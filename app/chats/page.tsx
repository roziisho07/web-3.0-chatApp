"use client";

import { LeftPanel } from "@/components/left-panel";
import { RightPanel } from "@/components/right-panle";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { useEffect } from "react";

function Page() {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) router.replace("/"), [isConnected];
  });

  return (
    <Flex h="100vh">
      {/* <Header />
      <ChatList /> */}
      <LeftPanel />
      <RightPanel />
    </Flex>
  );
}

export default Page;
