import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { ChatList } from "./chat-list";
import { Header } from "./Header";
import { SearchPanel } from "./search-panel";

export function LeftPanel(props: any) {
  const [isSmall] = useMediaQuery("(max-width: 600px)");
  return (
    <Flex direction="column" w={isSmall ? "100%" : "30%"} {...props}>
      <Box>
        <Header />
        <SearchPanel />
      </Box>
      <ChatList flex="1" overflow="auto" />
    </Flex>
  );
}
