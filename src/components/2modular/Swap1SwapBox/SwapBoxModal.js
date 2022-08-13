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
} from '@chakra-ui/react'

export default function SwapBoxModal({
  isOpen,
  onClose,
  tokenlist,
  isModalFrom,
  otherToken,
  setSwapFromToken,
  setSwapToToken,
}) {
  // console.log(tokenlist.filter((eachtoken) => eachtoken.name === otherToken)[0].canSwapTo)
  function handleOnClick(name) {
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
            {tokenlist
              .filter((eachtoken) => eachtoken.name === otherToken)[0]
              .canSwapTo.map((eachtokenName) => {
                return (
                  <Button
                    key={Math.random()}
                    variant="outline"
                    color="wandGreen"
                    fontSize="13px"
                    fontWeight="normal"
                    borderRadius="3xl"
                    borderColor="gray.600"
                    mb={3}
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
                    {eachtokenName}
                  </Button>
                )
              })}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
