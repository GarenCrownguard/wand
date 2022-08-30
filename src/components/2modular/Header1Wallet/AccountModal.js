import React from 'react'
import { connect } from 'react-redux'
import {
  Box,
  Button,
  Flex,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Icon,
} from '@chakra-ui/react'
import { ExternalLinkIcon, CopyIcon } from '@chakra-ui/icons'
import contractAddresses from 'contracts/addresses'

const AccountModal = ({ isOpen, onClose, localwalletstats }) => {
  const account = localwalletstats.walletAddress
  const { ethereum } = window

  // const handleDeactivateAccount = ()=> {
  //   reducer.WALLET_DISCONNECT();
  //   onClose()
  // }

  const addSptrToken = async () => {
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: contractAddresses.SPTR, // The address that the token is at.
            symbol: 'SPTR', // A ticker symbol or shorthand, up to 5 chars.
            decimals: 18, // The number of decimals in the token
            image: `${process.env.REACT_APP_API_URL}/sptrtoken`, // A string url of the token logo
          },
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  const addBatonToken = async () => {
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: contractAddresses.BATON, // The address that the token is at.
            symbol: 'BTON', // A ticker symbol or shorthand, up to 5 chars.
            decimals: 18, // The number of decimals in the token
            image: `${process.env.REACT_APP_API_URL}/batontoken`, // A string url of the token logo
          },
        },
      })
    } catch (error) {
      console.log(error)
    }
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
          Account
        </ModalHeader>
        <ModalCloseButton
          color="white"
          fontSize="sm"
          _hover={{
            color: 'whiteAlpha.700',
          }}
        />
        <ModalBody pt={0} px={4}>
          <Box
            borderRadius="3xl"
            border="1px"
            borderStyle="solid"
            borderColor="gray.600"
            px={5}
            pt={4}
            pb={2}
            mb={3}
          >
            <Flex justifyContent="space-between" alignItems="center" mb={3}>
              <Text color="gray.400" fontSize="sm">
                Connected with Wallet
              </Text>
              {/* <Button
                variant="outline"
                size="sm"
                borderColor="wandRed"
                borderRadius="3xl"
                color="wandRed"
                fontSize="13px"
                fontWeight="normal"
                px={2}
                height="26px"
                _hover={{
                  background: 'none',
                  borderColor: 'transparent',
                }}
                onClick={handleDeactivateAccount}
              >
                Disconnect
              </Button> */}
            </Flex>
            <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
              <Icon viewBox="0 0 200 200" color="wandRed">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              <Text
                color="white"
                fontSize="lg"
                fontWeight="semibold"
                ml="2"
                lineHeight="1.1"
              >
                {account &&
                  `${account.slice(0, 6)}...${account.slice(
                    account.length - 4,
                    account.length
                  )}`}
              </Text>
            </Flex>
            <Flex alignContent="center" m={3}>
              <Button
                variant="link"
                color="gray.400"
                fontWeight="normal"
                fontSize="sm"
                _hover={{
                  textDecoration: 'none',
                  color: 'whiteAlpha.800',
                }}
                onClick={() => {
                  navigator.clipboard.writeText(`${account}`)
                }}
              >
                <CopyIcon mr={1} />
                Copy Address
              </Button>
              <Link
                fontSize="sm"
                display="flex"
                alignItems="center"
                href={`https://bscscan.com/address/${account}`}
                isExternal
                color="gray.400"
                ml={6}
                _hover={{
                  color: 'whiteAlpha.800',
                  textDecoration: 'underline',
                }}
              >
                <ExternalLinkIcon mr={1} />
                View on Explorer
              </Link>
            </Flex>
            <Flex alignContent="center" m={2}>
              <Button
                variant="outline"
                size="sm"
                borderColor="wandGreen"
                borderRadius="3xl"
                color="wandGreen"
                fontSize="13px"
                fontWeight="normal"
                px={2}
                mr={5}
                height="26px"
                _hover={{
                  background: 'none',
                  borderColor: 'transparent',
                }}
                onClick={addSptrToken}
              >
                Add SCEPTER
              </Button>
              <Button
                variant="outline"
                size="sm"
                borderColor="wandGreen"
                borderRadius="3xl"
                color="wandGreen"
                fontSize="13px"
                fontWeight="normal"
                px={2}
                height="26px"
                _hover={{
                  background: 'none',
                  borderColor: 'transparent',
                }}
                onClick={addBatonToken}
              >
                Add BATON
              </Button>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

const mapStateToProps = (state) => {
  return {
    localwalletstats: state.localwalletstats,
  }
}
export default connect(mapStateToProps)(AccountModal)
