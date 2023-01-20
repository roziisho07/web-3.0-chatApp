"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createClient, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { mainnet } from "wagmi/chains";

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function ChakraWrapper({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider refetchInterval={0}>
        <ChakraProvider>{children}</ChakraProvider>;
      </SessionProvider>
    </WagmiConfig>
  );
}

export default ChakraWrapper;
