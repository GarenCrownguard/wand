import React, { useState } from 'react'
import { connect } from 'react-redux'
import MainBlock1Card from 'components/1atomic/MainBlock1Card'

import {
  Flex,
  Text,
  Button,
  IconButton,
  useDisclosure,
  Link,
  Box,
} from '@chakra-ui/react'

import {
  Icon1swap,
  IconTokenUSDT,
  IconTokenBUSD,
  IconTokenUSDC,
  IconTokenBATON,
  IconTokenSPTR,
} from './icons'

import InputBox from './InputBox'
import SwapBoxModal from './SwapBoxModal'
import links from 'resources/links'
import TaxSlider from './TaxSlider'

const Swap1SwapBox = (props) => {
  const { localwalletstats } = props
  const tokenlist = [
    {
      name: 'SPTR',
      balance: localwalletstats.sceptertoken,
      canSwapTo: ['BATON', 'USDT', 'USDC', 'BUSD'],
      icon: <IconTokenSPTR />,
    },
    {
      name: 'BATON',
      balance: localwalletstats.batontoken,
      canSwapTo: ['USDT', 'USDC', 'BUSD'],
      icon: <IconTokenBATON />,
    },
    {
      name: 'USDT',
      balance: localwalletstats.usdttoken,
      canSwapTo: ['SPTR'],
      icon: <IconTokenUSDT />,
    },
    {
      name: 'USDC',
      balance: localwalletstats.usdctoken,
      canSwapTo: ['SPTR'],
      icon: <IconTokenUSDC />,
    },
    {
      name: 'BUSD',
      balance: localwalletstats.busdtoken,
      canSwapTo: ['SPTR'],
      icon: <IconTokenBUSD />,
    },
  ]

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [swapFromToken, setSwapFromToken] = useState('SPTR')
  const [swapToToken, setSwapToToken] = useState('USDT')
  const [isModalFrom, setIsModalFrom] = useState('true')
  const [swapFromInput1, setSwapFromInput1] = useState('')
  const [swapToInput2, setSwapToInput2] = useState('')
  const [taxSliderValue, setTaxSliderValue] = useState(0)
  /*
  tokenlist.map((eachtoken) => {
    console.log(eachtoken)
    eachtoken.name === 'BATON'
      ? console.log(eachtoken.balance)
      : console.log(eachtoken.canSwapTo)
  })
  console.log(tokenlist.filter((eachtoken) => eachtoken.name === 'BATON')[0])
  */

  const swapClickHandler = ()=> {
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
      <Flex
        justifyContent="space-between"
        m={0}
        p={0}
        w='100%'
        flexDirection={['column', 'column', 'row']}
      >
        <Button
          variant="solid"
          size="md"
          width="100%"
          mt="20px"
          mr='10px'
          backgroundColor="#06141D"
          color="#8C8C8C"
          fontSize="12px"
          fontWeight="bold"
          letterSpacing="0.5px"
          border="1px solid rgba(165, 239, 255, 0.2)"
          _hover={{
            backgroundColor: '#030a0f',
            color: '#FFFFFF',
          }}
        >
          Approve
        </Button>

        <Button
          variant="solid"
          size="md"
          width="100%"
          mt="20px"
          backgroundColor="#06141D"
          color="#8C8C8C"
          fontSize="12px"
          fontWeight="bold"
          letterSpacing="0.5px"
          border="1px solid rgba(165, 239, 255, 0.2)"
          _hover={{
            backgroundColor: '#030a0f',
            color: '#FFFFFF',
          }}
        >
          Swap
        </Button>
      </Flex>

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
