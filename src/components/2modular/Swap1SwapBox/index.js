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
  Tag,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  ActualToBigNumber,
  GenerateTransactionLink,
  BigNumberToActual,
} from 'resources/utilities'
import {
  Icon1swap,
  IconTokenBUSD,
  IconTokenUSDC,
  IconTokenBATON,
  IconTokenSPTR,
  IconTokenDAI,
  IconTokenFRAX,
} from './icons'

import { setAirdropAddress } from 'resources/api'

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
  const [isWL, setIsWL] = useState(false)
  const [WLbuylimit, setWLBuyLimit] = useState(0)
  const [WLbuybought, setWLBuyBought] = useState(0)
  const [approved, setapproved] = useState(false)
  const [approving, setApproving] = useState(false)

  var wandAllowanceSPTR = null
  var wandAllowanceBATON = null
  var wandAllowanceUSDC = null
  var wandAllowanceBUSD = null
  var wandAllowanceDAI = null
  var wandAllowanceFRAX = null

  const checkWL = async () => {
    try {
      const checkwl =
        (await contracts.wandContract?.whiteListees(account)) ?? false

      if (BigNumberToActual(checkwl[0], 'SPTR') === 0) {
        setIsWL(false)
        // console.log(BigNumberToActual(checkwl[0], 'SPTR'))
        // console.log(checkwl)
      } else {
        setIsWL(true)
        setWLBuyLimit(BigNumberToActual(checkwl[0], 'SPTR'))
        setWLBuyBought(BigNumberToActual(checkwl[1], 'SPTR'))
        // console.log('is whitelisted')
      }
    } catch (error) {
      // console.log('Check WL error')
      setIsWL(false)
      toast({
        title: 'Cannot check WL for your account',
        status: 'error',
        duration: 2000,
        position: 'bottom-right',
        containerStyle: {
          width: '100%',
        },
      })
    }
  }

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
    setApproving(true)
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

      // await ApproveCall.wait()

      var transactionLink = GenerateTransactionLink(ApproveCall.hash)

      toast({
        title: (
          <Link color="white" href={transactionLink} isExternal>
            Submitted. Check transaction.
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
      setapproved(true)
      setApproving(false)
    } catch (error) {
      setapproved(false)
      toast({
        title: 'Transaction Error!',
        status: 'error',
        duration: 3000,
        position: 'bottom-right',
        containerStyle: {
          width: '100%',
        },
      })
    }
  }

  const swap = async () => {
    // swaptotoken == sptr => buyScepter(amount, stableChosen)
    // swapfromtoken == baton => cashOutBaton(amount, stableChosen)
    // swapfromtoken == sptr => cashOutScepter(amount, daysChosenLocked, stableChosen)
    // swapfromtoken == sptr && swaptotoken == baton => transformScepterToBaton(amount)

    try {
      setApproving(true)
      var SwapCall

      if (swapFromToken === 'SPTR') {
        if (swapToToken === 'BATON') {
          // transformScepterToBaton(amount) -- tested
          // console.log('transformScepterToBaton')
          SwapCall =
            (await contracts.wandContract?.transformScepterToBaton(
              ActualToBigNumber(swapFromInput1, swapFromToken),
              'USDC'
            )) ?? false

          await setAirdropAddress(account)
        } else {
          // cashOutScepter(amount, daysChosenLocked, stableChosen) -- tested
          // console.log(`cashOutScepter(${swapFromInput1}, ${taxSliderValue}, ${swapToToken})`)
          SwapCall =
            (await contracts.wandContract?.cashOutScepter(
              ActualToBigNumber(swapFromInput1, swapFromToken),
              taxSliderValue,
              swapToToken
            )) ?? false
        }
      } else if (swapFromToken === 'BATON') {
        // Assuming the swaptotoken will be a stable
        // cashOutBaton(amount, stableChosen) -- tested
        // console.log('cashOutBaton')

        SwapCall =
          (await contracts.wandContract?.cashOutBaton(
            ActualToBigNumber(swapFromInput1, swapFromToken),
            swapToToken
          )) ?? false
      } else if (swapToToken === 'SPTR') {
        // Assuming the swapFromtoken will always be a stable
        // buyScepter(amount, stableChosen) -- tested
        // console.log('buyScepter')

        SwapCall =
          (await contracts.wandContract?.wlBuyScepter(
            ActualToBigNumber(swapToInput2, swapToToken),
            swapFromToken
          )) ?? false
      } else {
        // console.log('swap error')
        toast({
          title: 'Swap Error! Something went wrong!',
          status: 'error',
          duration: 2000,
          position: 'bottom-right',
          containerStyle: {
            width: '100%',
          },
        })
        setApproving(false)
      }

      // await SwapCall.wait()

      var transactionLink = GenerateTransactionLink(SwapCall.hash)
      toast({
        title: (
          <Link color="white" href={transactionLink} isExternal>
            Submitted. Check transaction.
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
      setapproved(true)
      setApproving(false)
    } catch (error) {
      // console.log(error.reason)
      toast({
        title: error.reason,
        status: 'error',
        duration: 2000,
        position: 'bottom-right',
        containerStyle: {
          width: '100%',
        },
      })
      setApproving(false)
    }
  }

  useEffect(() => {
    if (swapFromToken === 'BATON' && swapToToken === 'SPTR') {
      setSwapToToken('USDC')
    }
    if (swapFromToken !== 'SPTR' && swapToToken === 'BATON') {
      setSwapFromToken('SPTR')
    }

    checkAllowance(swapFromToken)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swapFromToken, swapToToken, localwalletstats])

  useEffect(() => {
    if (swapFromToken === 'SPTR') {
      if (swapToToken === 'BATON') {
        // sptr -> baton
        // tested
        setSwapToInput2(
          isNaN(parseFloat(parseFloat(swapFromInput1)?.toFixed(3)))
            ? 0
            : parseFloat(parseFloat(swapFromInput1)?.toFixed(3))
        )
      } else {
        // sptr -> stable
        setSwapToInput2(
          parseFloat(
            parseFloat(swapFromInput1 * stats.scepterSellPrice)?.toFixed(3)
          )
        )
      }
    } else if (swapFromToken === 'BATON') {
      // baton -> stable
      // tested
      setSwapToInput2(
        parseFloat(
          parseFloat(swapFromInput1 * stats.batonRedeemingPrice)?.toFixed(3)
        )
      )
    } else {
      // buy sptr
      // tested
      setSwapToInput2(
        isNaN(swapFromInput1 / stats.scepterBuyPrice)
          ? 0
          : parseFloat(
              parseFloat(swapFromInput1 / stats.scepterBuyPrice)?.toFixed(3)
            )
      )
    }
  }, [
    swapFromInput1,
    swapFromToken,
    swapToToken,
    stats.batonRedeemingPrice,
    stats.scepterSellPrice,
    stats.scepterBuyPrice,
  ])

  useEffect(() => {
    checkWL()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const swapClickHandler = () => {
    setSwapFromInput1('')
    setSwapToInput2(0)
    setSwapFromToken(swapToToken)
    setSwapToToken(swapFromToken)
  }

  return (
    <MainBlock1Card
      minHeight="345px"
      minWidth={['320px', '356px', '356px']}
      maxWidth={['100%', '100%', '356px']}
      flexDirection="column"
      alignItems="flex-start"
      p="25px"
    >
      <Flex w="100%" alignItems="center" justifyContent="space-between">
        <Text variant="value" textAlign="left" color="wandGreen" w="100%">
          WL Swap
        </Text>
        {isWL ? (
          <Tag size="sm" bg="wandGreen" w="100%">
            {`Buy Limit: ${WLbuybought}/${WLbuylimit}`}
          </Tag>
        ) : (
          <Tag size="sm" bg="wandRed" color="black" w="100%">
            Not whiteListed.
          </Tag>
        )}
      </Flex>
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
            `1 ${swapFromToken} = ${parseFloat(
              parseFloat(1 / stats.scepterBuyPrice)?.toFixed(3)
            )} ${swapToToken}`}
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
