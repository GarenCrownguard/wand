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
} from '@chakra-ui/react'

import { CloseIcon } from '@chakra-ui/icons'
import MainBlock1Card from 'components/1atomic/MainBlock1Card'
import MainBlock2StatsText from 'components/1atomic/MainBlock2StatsText'
import MainBlock4CountdownTimer from 'components/1atomic/MainBlock4CountdownTimer'

import { prettifytolocalstring, prettifyamounts } from 'resources/utilities'
import IconBottomRightArrow from './icon'

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
  const { stats, localwalletstats } = props

  const [isOutstanding, setIsOutstanding] = useState(false)
  const [timeleft, setTimeleft] = useState(
    calculateTimeLeft(localwalletstats.remainingSwapTime * 1000)
  )
  
  useEffect(() => {
    setTimeleft(calculateTimeLeft(localwalletstats.remainingSwapTime * 1000))
    timeleft.days === 0 &&
    timeleft.hours === 0 &&
    timeleft.minutes === 0 &&
    timeleft.seconds === 0
      ? setIsOutstanding(false)
      : setIsOutstanding(true)
  }, [localwalletstats.remainingSwapTime])

  const { isOpen: isAlertVisible, onClose } = useDisclosure({
    defaultIsOpen: true,
  })

  // console.log(localwalletstats.amountOfSptrSwapped)
  return (
    isOutstanding && (
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

        <MainBlock1Card p="15px">
          <MainBlock4CountdownTimer
            title="Remaining days left for swap conclusion"
            timeleft={timeleft}
          />
          <MainBlock2StatsText
            title="Amount of SCEPTER Swapped"
            value={prettifytolocalstring(localwalletstats.amountOfSptrSwapped)}
          />
          <MainBlock2StatsText
            title="SCEPTER Value (USD)"
            value={prettifyamounts(
              localwalletstats.amountOfSptrSwapped * stats.scepterBackingPrice
            )}
          />
        </MainBlock1Card>

        <Box h="30px" /* Only for spacing*/ />
      </>
    )
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats,
    localwalletstats: state.localwalletstats,
  }
}
export default connect(mapStateToProps)(MainBlock2OutstandingStats)
