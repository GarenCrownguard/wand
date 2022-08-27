import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import {
  Alert,
  AlertTitle,
  useDisclosure,
  Text,
  IconButton,
  Icon,
  Box,
  Button,
  Flex,
  useToast,
  Link,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import contracts from 'contracts/contracts'
import { CloseIcon } from '@chakra-ui/icons'
import MainBlock1Card from 'components/1atomic/MainBlock1Card'
import MainBlock2StatsText from 'components/1atomic/MainBlock2StatsText'
import MainBlock4CountdownTimer from 'components/1atomic/MainBlock4CountdownTimer'
import * as reducer from 'redux/reducerCalls'
import {
  prettifytolocalstring,
  prettifyamounts,
  GenerateTransactionLink,
} from 'resources/utilities'
import IconBottomRightArrow from './icon'
import { BigNumberToActual } from 'resources/utilities'

import ChooseTokenModal from './ChooseTokenModal'

const calculateTimeLeft = (time) => {
  let timeLeft = {}

  const difference = +new Date(time) - +new Date()

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return timeLeft
}

const MainBlock2OutstandingStats = (props) => {
  const { localwalletstats } = props
  const toast = useToast()
  const [isClaimDisabled, setIsClaimDisabled] = useState(true)
  const [isClaimLoading, setIsClaimLoading] = useState(false)

  const [chosenTokenToClaim, setChosenTokenToClaim] = useState('USDC')

  const {
    isOpen: isOpenTokenChoose,
    onOpen: onOpenTokenChoose,
    onClose: onCloseTokenChoose,
  } = useDisclosure()

  const [timeleft, setTimeleft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const { days, hours, minutes, seconds } = timeleft
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0 && localwalletstats.amountOfSptrSwapped !== 0) {
      setIsClaimDisabled(false)
    }else {
      setIsClaimDisabled(true)
    }
    // setIsClaimDisabled(false) // comment this out after testing
  }, [timeleft])

  useEffect(() => {
    const getOutstandingStats = async () => {
      /* Updating the outstanding locked amount */
      const outstandingStats =
        (await contracts.wandContract?.withheldWithdrawals(
          localwalletstats.walletAddress
        )) ?? null

      const outstandingTime =
        BigNumberToActual(outstandingStats?.timeUnlocked ?? 0, 'one') * 10

      reducer.UPDATE_OUTSTANDING_STATS({
        outstandingTimeLocked: outstandingTime,
        outstandingSwappedAmounts: BigNumberToActual(
          outstandingStats?.amounts ?? 0,
          'SPTR'
        ),
      })

      setTimeleft(calculateTimeLeft(outstandingTime * 1000))
    }

    getOutstandingStats()
  }, [])

  const { isOpen: isAlertVisible, onClose } = useDisclosure({
    defaultIsOpen: true,
  })

  const claimlocked = async () => {
    console.log(`claiming: ${chosenTokenToClaim}`)
    setIsClaimLoading(true)
    onCloseTokenChoose()
    try {
      const claimWithdrawals =
        (await contracts.wandContract?.claimLockedUSDC(chosenTokenToClaim)) ??
        null

      await claimWithdrawals.wait()

      var transactionLink = GenerateTransactionLink(claimWithdrawals.hash);
      toast({
        title: (
          <Link color="white" href={transactionLink} isExternal>
            Approved. Check transaction.
            <ExternalLinkIcon mx="5px" mt="-5px" />
          </Link>
        ),
        status: 'success',
        duration: 3000,
        position: 'bottom-right',
        containerStyle: {
          width: '100%',
        },
      })

      setIsClaimLoading(false)
      setIsClaimDisabled(true)
    } catch (error) {
      // console.log(error);
      toast({
        title: 'Claim Error!',
        status: 'error',
        duration: 2000,
        position: 'bottom-right',
        containerStyle: {
          width: '100%',
        },
      })
      setIsClaimLoading(false)
      setIsClaimDisabled(false)
    }
  }

  return (
    <>
      {isAlertVisible && (
        <Alert
          colorScheme=""
          bg="linear-gradient(136.67deg, #FF409A 8.34%, #C438EF 95.26%);"
          opacity={0.9}
          boxShadow="0px 1.92982px 14.9561px #BA1358;"
          h="42px"
          maxWidth={['90%', '330px', '330px']}
          borderRadius="5px"
          m="7px"
          mb="13px"
        >
          <AlertTitle>
            <Text fontSize="14px" fontWeight={400}>
              Your outstanding locked amount
              <Icon viewBox="0 0 12 12" ml={['15px', '15px', '20px']}>
                <IconBottomRightArrow fill="white" />
              </Icon>
            </Text>
          </AlertTitle>
          <IconButton
            size="xs"
            borderRadius="25px"
            fontSize="10px"
            bg="black"
            ml="auto"
            mr={['-10px', '-10px', '5px']}
            _hover={{
              background: 'black',
              color: 'white',
            }}
            onClick={onClose}
            icon={<CloseIcon />}
          />
        </Alert>
      )}
      <MainBlock1Card p="15px" alignItems={['center', 'cneter']}>
        <MainBlock4CountdownTimer
          title="Remaining days left for swap conclusion"
          timeleft={timeleft}
        />
        <MainBlock2StatsText
          title="Amount locked (USD) if not claimed"
          value={prettifytolocalstring(localwalletstats.amountOfSptrSwapped)}
        />
        <Flex flexGrow={0.5} justifyContent="space-around">
          <Button
            variant="solid"
            onClick={onOpenTokenChoose}
            size="md"
            w="150px"
            mt={['10px', '10px', '0px']}
            backgroundColor="wandGreen"
            color="black"
            fontSize="12px"
            fontWeight="bold"
            letterSpacing="0.5px"
            border="1px solid rgba(165, 239, 255, 0.2)"
            disabled={isClaimDisabled}
            isLoading={isClaimLoading}
            _hover={{
              backgroundColor: '#06141D',
              color: '#8C8C8C',
            }}
          >
            {isClaimDisabled ? (
              <>Claim not available</>
            ) : (
              <>Claim locked amount</>
            )}
          </Button>
        </Flex>
      </MainBlock1Card>
      <ChooseTokenModal
        oncloseModal={onCloseTokenChoose}
        isopenModal={isOpenTokenChoose}
        claimLockFuntion={claimlocked}
        isClaimDisabled={isClaimDisabled}
        isClaimLoading={isClaimLoading}
        setChosenToken={setChosenTokenToClaim}
      />
      <Box h="30px" /* Only for spacing*/ />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats,
    localwalletstats: state.localwalletstats,
  }
}
export default connect(mapStateToProps)(MainBlock2OutstandingStats)
