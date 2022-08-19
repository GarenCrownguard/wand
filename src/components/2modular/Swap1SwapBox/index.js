import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import MainBlock1Card from 'components/1atomic/MainBlock1Card'
import { ethers } from 'ethers'
import contracts from 'contracts/contracts'
import contractAddresses from 'contracts/addresses'
import {
  Flex,
  Text,
  Button,
  IconButton,
  useDisclosure,
  Link,
  Box,
  useToast,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ActualToBigNumber } from 'resources/utilities'
import {
  Icon1swap,
  IconTokenBUSD,
  IconTokenUSDC,
  IconTokenBATON,
  IconTokenSPTR,
  IconTokenDAI,
  IconTokenFRAX,
} from './icons'

import InputBox from './InputBox'
import SwapBoxModal from './SwapBoxModal'
import links from 'resources/links'
import TaxSlider from './TaxSlider'

const MAX_APPROVAL = ethers.BigNumber.from(
  '0xfffffffffffffffffffffffffffffffffffffffffffff'
)

const Swap1SwapBox = (props) => {
  const { stats, localwalletstats } = props
  const toast = useToast()
  const account = localwalletstats.walletAddress

  const tokenlist = [
    {
      name: 'SPTR',
      balance: localwalletstats.sceptertoken ?? 0,
      canSwapTo: ['BATON', 'USDC', 'BUSD', 'DAI', 'FRAX'],
      canSwapFrom: ['BATON', 'USDC', 'BUSD', 'DAI', 'FRAX'],
      icon: <IconTokenSPTR />,
    },
    {
      name: 'BATON',
      balance: localwalletstats.batontoken ?? 0,
      canSwapTo: ['USDC', 'BUSD', 'DAI', 'FRAX'],
      canSwapFrom: ['SPTR'],
      icon: <IconTokenBATON />,
    },
    {
      name: 'USDC',
      balance: localwalletstats.usdctoken ?? 0,
      canSwapTo: ['SPTR'],
      canSwapFrom: ['BATON', 'SPTR'],
      icon: <IconTokenUSDC />,
    },
    {
      name: 'BUSD',
      balance: localwalletstats.busdtoken ?? 0,
      canSwapTo: ['SPTR'],
      canSwapFrom: ['BATON', 'SPTR'],
      icon: <IconTokenBUSD />,
    },
    {
      name: 'DAI',
      balance: localwalletstats.daitoken ?? 0,
      canSwapTo: ['SPTR'],
      canSwapFrom: ['BATON', 'SPTR'],
      icon: <IconTokenDAI />,
    },
    {
      name: 'FRAX',
      balance: localwalletstats.fraxtoken ?? 0,
      canSwapTo: ['SPTR'],
      canSwapFrom: ['BATON', 'SPTR'],
      icon: <IconTokenFRAX />,
    },
  ]

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [swapFromToken, setSwapFromToken] = useState('USDC')
  const [swapToToken, setSwapToToken] = useState('SPTR')
  const [isModalFrom, setIsModalFrom] = useState('true')
  const [swapFromInput1, setSwapFromInput1] = useState('')
  const [swapToInput2, setSwapToInput2] = useState('')
  const [taxSliderValue, setTaxSliderValue] = useState(0)

  const [approved, setapproved] = useState(false)
  const [approving, setApproving] = useState(false)

  var wandAllowanceSPTR = null
  var wandAllowanceBATON = null
  var wandAllowanceUSDC = null
  var wandAllowanceBUSD = null
  var wandAllowanceDAI = null
  var wandAllowanceFRAX = null

  const checkAllowance = async (fromtoken) => {
    setApproving(true)
    wandAllowanceSPTR =
      contracts.SPTRContract?.allowance(account, contractAddresses.wand) ??
      ethers.BigNumber.from(0)
    wandAllowanceBATON =
      contracts.BATONContract?.allowance(account, contractAddresses.wand) ??
      ethers.BigNumber.from(0)

    wandAllowanceUSDC =
      contracts.USDCContract?.allowance(account, contractAddresses.wand) ??
      ethers.BigNumber.from(0)
    wandAllowanceBUSD =
      contracts.BUSDContract?.allowance(account, contractAddresses.wand) ??
      ethers.BigNumber.from(0)

    wandAllowanceDAI =
      contracts.DAIContract?.allowance(account, contractAddresses.wand) ??
      ethers.BigNumber.from(0)

    wandAllowanceFRAX =
      contracts.FRAXContract?.allowance(account, contractAddresses.wand) ??
      ethers.BigNumber.from(0)

    const AllAllowance = await Promise.all([
      wandAllowanceSPTR,
      wandAllowanceBATON,
      wandAllowanceUSDC,
      wandAllowanceBUSD,
      wandAllowanceDAI,
      wandAllowanceFRAX,
    ])

    switch (fromtoken) {
      case 'SPTR':
        setapproved(
          AllAllowance[0]?.gt(
            ActualToBigNumber(localwalletstats.sceptertoken, 'SPTR') ?? 0
          ) ?? false
        )
        setApproving(false)
        break
      case 'BATON':
        setapproved(
          AllAllowance[1]?.gt(
            ActualToBigNumber(localwalletstats.batontoken, 'BATON') ?? 0
          ) ?? false
        )
        setApproving(false)
        break
      case 'USDC':
        setapproved(
          AllAllowance[2]?.gt(
            ActualToBigNumber(localwalletstats.usdctoken, 'USDC') ?? 0
          ) ?? false
        )
        setApproving(false)
        break
      case 'BUSD':
        setapproved(
          AllAllowance[3]?.gt(
            ActualToBigNumber(localwalletstats.busdtoken, 'BUSD') ?? 0
          ) ?? false
        )
        setApproving(false)
        break
      case 'DAI':
        setapproved(
          AllAllowance[4]?.gt(
            ActualToBigNumber(localwalletstats.daitoken, 'DAI') ?? 0
          ) ?? false
        )
        setApproving(false)
        break
      case 'FRAX':
        setapproved(
          AllAllowance[5]?.gt(
            ActualToBigNumber(localwalletstats.fraxtoken, 'FRAX') ?? 0
          ) ?? false
        )
        setApproving(false)
        break
      default:
        // console.log('Cannot get the Allowance of the wallet')
        toast({
          title: 'Cannot get the Allowance of the wallet',
          status: 'error',
          duration: 1000,
          position: 'bottom-right',
          containerStyle: {
            width: '100%',
          },
        })
        setapproved(false)
        setApproving(true)
        break
    }
  }

  const approve = async () => {
    setApproving(true);
    try {
      var ApproveCall
      switch (swapFromToken) {
        case 'SPTR':
          ApproveCall =
            (await contracts.SPTRContract?.approve(
              contractAddresses.wand,
              MAX_APPROVAL
            )) ?? false
          break
        case 'BATON':
          ApproveCall =
            (await contracts.BATONContract?.approve(
              contractAddresses.wand,
              MAX_APPROVAL
            )) ?? false
          break
        case 'USDC':
          ApproveCall =
            (await contracts.USDCContract?.approve(
              contractAddresses.wand,
              MAX_APPROVAL
            )) ?? false
          break
        case 'BUSD':
          ApproveCall =
            (await contracts.BUSDContract?.approve(
              contractAddresses.wand,
              MAX_APPROVAL
            )) ?? false
          break
        case 'DAI':
          ApproveCall =
            (await contracts.DAIContract?.approve(
              contractAddresses.wand,
              MAX_APPROVAL
            )) ?? false
          break
        case 'FRAX':
          ApproveCall =
            (await contracts.FRAXContract?.approve(
              contractAddresses.wand,
              MAX_APPROVAL
            )) ?? false
          break
        default:
          // console.log('Cannot get the Allowance of the wallet')
          toast({
            title: 'Approve failed! Try Again.',
            status: 'error',
            duration: 1000,
            position: 'bottom-right',
            containerStyle: {
              width: '100%',
            },
          })
          setapproved(false)
          setApproving(false)
          checkAllowance(swapFromToken)
          break
      }

      await ApproveCall.wait()
      
      var transactionLink = `https://testnet.snowtrace.io/tx/${ApproveCall.hash}`
      toast({
        title: (
          <Link color="white" href={transactionLink} isExternal>
            Approved. Check transaction.
            <ExternalLinkIcon mx="5px" mt="-5px" />
          </Link>
        ),
        status: 'success',
        duration: 1000,
        position: 'bottom-right',
        containerStyle: {
          width: '70px',
        },
      })
      setapproved(true)
      setApproving(false)
    } catch (error) {
      setapproved(false)
      toast({
        title: 'Transaction Error!',
        status: 'error',
        duration: 1000,
        position: 'bottom-right',
        containerStyle: {
          width: '100%',
        },
      })
    }
  }

  const swap = async () => {
    // try {
    //   console.log('Initialize BATON approval')
    //   let ApproveBATON =
    //     (await contracts.BATONContract?.approve(
    //       contractAddresses.wand,
    //       MAX_APPROVAL
    //     )) ?? 'BATON approving failed'
    //   console.log('Approving... please wait')
    //   await ApproveBATON.wait()
    //   console.log(
    //     `Mined, see transaction: https://testnet.snowtrace.io/tx/${ApproveBATON.hash}`
    //   )
    // } catch (error) {
    //   console.log(error.code === 4001)
    // }
  }

  useEffect(() => {
    // setApprove
    // setApproving

    if (swapFromToken === 'BATON' && swapToToken === 'SPTR') {
      setSwapToToken('USDC')
    }

    checkAllowance(swapFromToken)

    // if (swapFromToken !== 'SPTR' && swapFromToken !== 'BATON') {
    //   // Stable -> xxx
    //   if (swapToToken === 'SPTR') {
    //     // Stable -> SPTR
    //     approve(swapFromToken)
    //   } else {
    //     // Stable -> BATON *** situation not possible
    //     setapproved(false)
    //   }
    // } else {
    //   // SPTR or BATON -> xxx
    //   setapproved(true)
    // }
  }, [swapFromToken, localwalletstats])

  useEffect(() => {
    if (swapFromToken === 'SPTR') {
      if (swapToToken === 'BATON') {
        setSwapToInput2(swapFromInput1)
      } else {
        setSwapToInput2(swapFromInput1 * stats.scepterSellPrice)
      }
    } else if (swapFromToken === 'BATON') {
      setSwapToInput2(swapFromInput1 * stats.batonRedeemingPrice)
    } else {
      setSwapToInput2(swapFromInput1 * stats.scepterBuyPrice)
      // console.log('[error] swapFromInput1')
    }
  }, [
    swapFromInput1,
    swapFromToken,
    swapToToken,
    stats.batonRedeemingPrice,
    stats.scepterSellPrice,
    stats.scepterBuyPrice,
  ])

  const swapClickHandler = () => {
    setSwapFromInput1(0)
    setSwapToInput2(0)
    setSwapFromToken(swapToToken)
    setSwapToToken(swapFromToken)
  }

  return (
    <MainBlock1Card
      minHeight="345px"
      minWidth={['320px', '356px', '356px']}
      maxWidth={['100%', '356px', '356px']}
      flexDirection="column"
      alignItems="flex-start"
      p="25px"
    >
      <Text variant="value" textAlign="left" color="wandGreen">
        Swap
      </Text>
      <Text variant="title" textAlign="left">
        Choose the tokens to swap
      </Text>
      <InputBox
        token={swapFromToken}
        tokenlist={tokenlist}
        inputvalue={swapFromInput1}
        setinputvalue={setSwapFromInput1}
        handleOpenModal={onOpen}
        from={true}
        setIsModalFrom={setIsModalFrom}
      />
      <Flex width="100%" justifyContent="center" p="8px">
        <IconButton
          onClick={swapClickHandler}
          icon={<Icon1swap />}
          size="xs"
          width={0}
          height={0}
        />
      </Flex>
      <InputBox
        token={swapToToken}
        tokenlist={tokenlist}
        inputvalue={swapToInput2}
        setinputvalue={setSwapToInput2}
        handleOpenModal={onOpen}
        from={false}
        setIsModalFrom={setIsModalFrom}
      />
      <Text variant="title" textAlign="left">
        {swapFromToken === 'SPTR'
          ? swapToToken === 'BATON'
            ? // SPTR -> BATON
              `1 ${swapFromToken} = 1 ${swapToToken}`
            : // SPT -> Stable
              `1 ${swapFromToken} = ${stats.scepterSellPrice} ${swapToToken}`
          : swapFromToken === 'BATON'
          ? // BATON -> Stable
            `1 ${swapFromToken} = ${stats.batonRedeemingPrice} ${swapToToken}`
          : // Stable -> SPTR
            `1 ${swapFromToken} = ${stats.scepterBuyPrice} ${swapToToken}`}
      </Text>
      {swapFromToken === 'SPTR' && swapToToken !== 'BATON' && (
        <>
          <Text variant="title" textAlign="left" mb="35px">
            When you sell SCEPTER, you have a maximum of 10 days vesting period
            with dynamic tax applied&nbsp;-&nbsp;
            <Link color="wandGreen" href={links.disclaimerSPTRSell} isExternal>
              Learn more
            </Link>
          </Text>
          <Box w="100%" textAlign="center">
            <TaxSlider
              taxSliderValue={taxSliderValue}
              setTaxSliderValue={setTaxSliderValue}
            />
          </Box>
        </>
      )}

      <Button
        variant="solid"
        onClick={approved ? swap : approving ? () => {} : approve}
        size="md"
        width="100%"
        mt="20px"
        mr="10px"
        backgroundColor="#06141D"
        color="#8C8C8C"
        fontSize="12px"
        fontWeight="bold"
        letterSpacing="0.5px"
        border="1px solid rgba(165, 239, 255, 0.2)"
        isLoading={approving}
        _hover={{
          backgroundColor: '#030a0f',
          color: '#FFFFFF',
        }}
      >
        {approved
          ? 'Swap'
          : approving
          ? 'Checking for allowance...'
          : 'Approve'}
      </Button>

      {/* Modal placeholder */}
      <SwapBoxModal
        isOpen={isOpen}
        onClose={onClose}
        tokenlist={tokenlist}
        isModalFrom={isModalFrom}
        otherToken={isModalFrom ? swapToToken : swapFromToken}
        setSwapFromToken={setSwapFromToken}
        setSwapToToken={setSwapToToken}
      />
    </MainBlock1Card>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats,

    localwalletstats: state.localwalletstats,
  }
}
export default connect(mapStateToProps)(Swap1SwapBox)
