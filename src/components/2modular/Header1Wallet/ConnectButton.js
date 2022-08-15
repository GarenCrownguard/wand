import React, { useState } from "react";
import { Button, Box, Text, Icon } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import IconWallet from "./icon-wallet";
import { connect } from "react-redux";

import { UPDATE_ADDRESS } from "redux/reducerCalls";

function ConnectButton(props) {

  const { handleOpenModal, isMobile, localwalletstats} = props;

  const [account, setAccount] = useState(null);
  const toast = useToast();

  // console.log(isMobile);

  const handleConnectWallet = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      toast({
        title: "No wallet detected!",
        status: "warning",
        duration: 1000,
        position: "bottom-right",
        containerStyle: {
          width: "50px",
        },
      });
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      // console.log("Found an account! Address: ", accounts[0]);
      UPDATE_ADDRESS({ walletAddress: accounts[0] });
      setAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return account ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      {!isMobile && (
        <Box px="3">
          <Text color="white" fontSize={isMobile ? 14 : 19} fontWeight="light">
            {localwalletstats.sceptertoken &&
              parseFloat(localwalletstats.sceptertoken).toFixed(2)}{' '}
            SPTR
          </Text>
        </Box>
      )}
      <Button
        onClick={handleOpenModal}
        bg="gray.800"
        border="1px solid transparent"
        leftIcon={<IconWallet fill="currentColor" />}
        _hover={{
          border: '1px',
          borderStyle: 'solid',
          borderColor: 'blue.400',
          backgroundColor: 'gray.700',
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height={isMobile ? '30px' : '38px'}
      >
        <Text
          color="white"
          fontSize={isMobile ? 14 : 19}
          fontWeight="light"
          mr="8px"
          mt="5px"
        >
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Icon viewBox="0 0 200 200" color="#AE3C51">
          <path
            fill="#AE3C51"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
      </Button>
    </Box>
  ) : (
    <>
      <Button
        onClick={handleConnectWallet}
        bg="transparent"
        color="white"
        size="md"
        fontSize={isMobile ? 14 : 19}
        fontWeight="light"
        leftIcon={<IconWallet fill="currentColor" />}
        borderRadius="xl"
        border="1px solid transparent"
        _hover={{
          borderColor: 'grey',
          boxShadow:
            '-2px -4px 20px rgba(42, 224, 191, 0.2), 0px 4px 20px rgba(234, 58, 246, 0.25)',
          color: 'grey',
        }}
      >
        <Text
          color="white"
          fontSize={isMobile ? 14 : 19}
          fontWeight="light"
          mt="5px"
        >
          Connect wallet
        </Text>
      </Button>
      {localwalletstats.walletAddress}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats[0],
    investmentList: state.investmentList[0],
    localwalletstats: state.localwalletstats[0],
  };
};

export default connect(mapStateToProps)(ConnectButton);