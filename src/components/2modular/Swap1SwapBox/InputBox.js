import React from 'react'
import { connect } from 'react-redux'

import {
  Flex,
  Text,
  Button,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react'

import { Icon4downarrow } from './icons'

const InputBox = (props) => {
  const {
    token,
    tokenlist,
    inputvalue,
    setinputvalue,
    handleOpenModal,
    from,
    setIsModalFrom,
  } = props

  const handelOnClick = () =>{
    handleOpenModal()
    setIsModalFrom(from)
  }

  return (
    <Flex
      alignItems="stretch"
      flexDirection="column"
      minWidth="100%"
      backgroundColor="#0B1A28"
      borderRadius="7px"
      maxHeight="60px"
      border="1px solid rgba(165, 239, 255, 0.2)"
      mb="9px"
      mt="9px"
    >
      <Flex
        alignItems="stretch"
        flexDirection="column"
        minWidth="100%"
        backgroundColor="#0B1A28"
        borderRadius="7px"
        maxHeight="60px"
        pl="10px"
        pr="10px"
        pt="5px"
      >
        <Flex p="0px" justifyContent="space-between" alignItems="center">
          <Text
            color="#2AE0BF"
            fontSize="10px"
            lineHeight="12px"
            fontWeight="bold"
            letterSpacing="0.5px"
            display="block"
          >
            {tokenlist.filter((eachtoken) => eachtoken.name === token)[0].name}
          </Text>
          <Button
            variant="link"
            size="xs"
            color="#8C8C8C"
            display="block"
            p="0px"
            colorScheme="#8C8C8C"
            _hover={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Balance:{' '}
            {`${
              tokenlist.filter((eachtoken) => eachtoken.name === token)[0]
                .balance
            } ${
              tokenlist.filter((eachtoken) => eachtoken.name === token)[0].name
            }`}
          </Button>
        </Flex>
        <Flex p="0px">
          <NumberInput
            color="#DFDFDF"
            border="none"
            fontSize="14px"
            letterSpacing="tighter"
            fontWeight="bold"
            size="sm"
            w="100%"
            p="0px"
            value={inputvalue}
            onChange={(valueString) => setinputvalue(valueString)}
          >
            <NumberInputField
              border="none"
              p="0"
              _focusVisible={{ border: 'none' }}
            />
          </NumberInput>
          <Button
            onClick={handelOnClick}
            variant="solid"
            color="white"
            size="xs"
            background="tranparent"
            leftIcon={
              tokenlist.filter((eachtoken) => eachtoken.name === token)[0].icon
            }
            rightIcon={<Icon4downarrow />}
            iconSpacing="4px"
            _hover={{
              background: '#B1AFCD',
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats,

    localwalletstats: state.localwalletstats,
  }
}
export default connect(mapStateToProps)(InputBox)
