"use client";

import {
  Button,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
  Switch,
} from "@chakra-ui/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const formBacground = useColorModeValue("gray.100", "gray.700");
  const { isConnected } = useAccount();

  const { connect, connectors } = useConnect();

  useEffect(() => {
    if (isConnected) router.push("/chats");
  });

  return (
    <Flex
      height="100vh"
      direction={"column"}
      alignItems="center"
      justifyContent="center"
    >
      <Heading color={"ThreeDLightShadow"} mb={6}>
        Web3 Chat App
      </Heading>
      <Flex direction="column" p={12} background={formBacground} rounded={6}>
        <Flex direction={"column"} p={12} gap={6}>
          <Heading mb={6}>Log in</Heading>
          {connectors.map((connector) => (
            <>
              <Button
                onClick={() => connect({ connector })}
                key={connector.id}
                colorScheme={"teal"}
              >
                MetaMask
              </Button>
              <Button
                onClick={() => connect({ connector })}
                key={connector.id}
                colorScheme={"teal"}
              >
                Wallet Connect
              </Button>
            </>
          ))}

          <Switch onChange={toggleColorMode}> </Switch>
        </Flex>
      </Flex>
    </Flex>
  );
}
