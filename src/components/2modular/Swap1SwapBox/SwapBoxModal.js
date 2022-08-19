import React from 'react'
import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  chakra,
} from '@chakra-ui/react'


const SwapBoxModal = ({
  isOpen,
  onClose,
  tokenlist,
  isModalFrom,
  otherToken,
  setSwapFromToken,
  setSwapToToken,
}) => {
  // console.log(tokenlist.filter((eachtoken) => eachtoken.name === otherToken)[0].canSwapTo)
  const handleOnClick = (name) => {
    // console.log(`Is from token: ${isModalFrom} and the name is: ${name}`);
    isModalFrom ? setSwapFromToken(name) : setSwapToToken(name)

    onClose()
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm">
      <ModalOverlay />
      <ModalContent
        background="gray.900"
        border="1px"
        borderStyle="solid"
        borderColor="gray.700"
        borderRadius="3xl"
      >
        <ModalHeader color="white" px={4} fontSize="md" fontWeight="medium">
          Choose token to swap
        </ModalHeader>
        <ModalCloseButton
          color="white"
          fontSize="sm"
          _hover={{
            color: 'whiteAlpha.700',
          }}
        />
        <ModalBody pt={0} px={4}>
          <Flex direction="column">
            {isModalFrom
              ? tokenlist
                  .filter((eachtoken) => eachtoken.name === otherToken)[0]
                  .canSwapFrom.map((eachtokenName, key) => {
                    return (
                      <Button
                        key={key}
                        variant="outline"
                        borderRadius="3xl"
                        borderColor="gray.600"
                        mb={3}
                        justifyContent="flex-start"
                        leftIcon={
                          tokenlist.filter(
                            (eachtoken) => eachtoken.name === eachtokenName
                          )[0].icon
                        }
                        _hover={{
                          background: 'gray',
                          borderColor: 'transparent',
                        }}
                        _active={{
                          background: 'none',
                          borderColor: 'transparent',
                        }}
                        onClick={() => handleOnClick(eachtokenName)}
                      >
                        <Text
                          color="wandGreen"
                          fontSize="13px"
                          lineHeight="12px"
                          fontWeight="bold"
                          letterSpacing="0.5px"
                          display="block"
                          ml="0"
                        >
                          {eachtokenName}
                        </Text>
                        <chakra.span
                          color="#B1AFCD"
                          fontSize="13px"
                          textAlign="center"
                          mr="0px"
                          ml="auto"
                        >
                          Balance:{' '}
                          {`${
                            tokenlist.filter(
                              (eachtoken) => eachtoken.name === eachtokenName
                            )[0].balance
                          } ${
                            tokenlist.filter(
                              (eachtoken) => eachtoken.name === eachtokenName
                            )[0].name
                          }`}
                        </chakra.span>
                      </Button>
                    )
                  })
              : tokenlist
                  .filter((eachtoken) => eachtoken.name === otherToken)[0]
                  .canSwapTo.map((eachtokenName, key) => {
                    return (
                      <Button
                        key={key}
                        variant="outline"
                        borderRadius="3xl"
                        borderColor="gray.600"
                        mb={3}
                        justifyContent="flex-start"
                        leftIcon={
                          tokenlist.filter(
                            (eachtoken) => eachtoken.name === eachtokenName
                          )[0].icon
                        }
                        _hover={{
                          background: 'gray',
                          borderColor: 'transparent',
                        }}
                        _active={{
                          background: 'none',
                          borderColor: 'transparent',
                        }}
                        onClick={() => handleOnClick(eachtokenName)}
                      >
                        <Text
                          color="wandGreen"
                          fontSize="13px"
                          lineHeight="12px"
                          fontWeight="bold"
                          letterSpacing="0.5px"
                          display="block"
                          ml="0"
                        >
                          {eachtokenName}
                        </Text>
                        <chakra.span
                          color="#B1AFCD"
                          fontSize="13px"
                          textAlign="center"
                          mr="0px"
                          ml="auto"
                        >
                          Balance:{' '}
                          {`${
                            tokenlist.filter(
                              (eachtoken) => eachtoken.name === eachtokenName
                            )[0].balance
                          } ${
                            tokenlist.filter(
                              (eachtoken) => eachtoken.name === eachtokenName
                            )[0].name
                          }`}
                        </chakra.span>
                      </Button>
                    )
                  })}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SwapBoxModal
