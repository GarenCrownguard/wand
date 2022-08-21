import React from 'react'
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useRadio,
  useRadioGroup,
  HStack,
} from '@chakra-ui/react'

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'wandGreen',
          color: 'white',
          borderColor: '#06141D',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}

const ChooseTokenModal = (props) => {
  const {
    oncloseModal,
    isopenModal,
    claimLockFuntion,
    isClaimDisabled,
    isClaimLoading,
    setChosenToken,
  } = props

  const TokenOptions = ['USDC', 'BUSD', 'DAI', 'FRAX']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'wand',
    defaultValue: 'USDC',
    onChange: (token) => {
      setChosenToken(token)
    },
  })

  const group = getRootProps()
  return (
    <Modal
      onClose={oncloseModal}
      isOpen={isopenModal}
      isCentered
      size="sm"
    >
      <ModalOverlay />
      <ModalContent
        background="gray.900"
        border="1px"
        borderStyle="solid"
        borderColor="gray.700"
        borderRadius="3xl"
      >
        <ModalHeader>Choose token to claim</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack {...group}>
            {TokenOptions.map((value) => {
              const radio = getRadioProps({ value })
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              )
            })}
          </HStack>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button
            variant="solid"
            onClick={claimLockFuntion}
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
            {isClaimDisabled ? <>Claim not available</> : <>Claim</>}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ChooseTokenModal
