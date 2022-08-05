import React, { useState } from "react";
import { Button, Box, Text, Icon } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export default function ConnectButton({ handleOpenModal }) {
  const [account, setAccount] = useState(null);
  const [SPTRbalance, setSPTRbalance] = useState("2.3568");
  const toast = useToast();

  const IconWallet = (porps) => {
    return (
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.964 9.005H12.75c-.335 0-.607.252-.607.563 0 .31.272.563.607.563h1.214c.336 0 .607-.252.607-.563 0-.31-.271-.563-.607-.563ZM1.821 0C.815 0 0 .756 0 1.688v11.257c0 1.554 1.36 2.814 3.036 2.814h12.143c1.005 0 1.821-.756 1.821-1.688V3.94c0-.735-.507-1.36-1.214-1.593v-.659C15.786.756 14.97 0 13.964 0H1.821Zm-.607 12.945V3.281c.19.062.395.096.607.096H15.18c.335 0 .607.252.607.563v10.13c0 .311-.272.563-.607.563H3.036c-1.006 0-1.822-.755-1.822-1.688Zm.607-11.82h12.143c.336 0 .607.253.607.563v.563H1.821c-.335 0-.607-.252-.607-.563 0-.31.272-.562.607-.562Z"
          fill={porps.fill}
        />
      </svg>
    );
  };

  const handleConnectWallet = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      toast({
        title: "No wallet detected!",
        status: "warning",
        duration: 2000,
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
      <Box px="3">
        <Text color="white" fontSize="md">
          {SPTRbalance && parseFloat(SPTRbalance).toFixed(3)} SPTR
        </Text>
      </Box>
      <Button
        onClick={handleOpenModal}
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Icon viewBox="0 0 200 200" color="red.500">
          <path
            fill="red"
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
        size="sm"
        fontSize="md"
        fontWeight="medium"
        leftIcon={<IconWallet fill="currentColor" />}
        borderRadius="xl"
        border="1px solid transparent"
        _hover={{
          borderColor: "grey",
          color: "grey",
        }}
      >
        Connect wallet
      </Button>
    </>
  );
}
