import {
  AbsoluteCenter,
  Center,
  Flex,
  Box,
  Heading,
  HStack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { EncryptedIcon, GeneralIcon } from "../assets/icons";

export function RightPanel(props: any) {
  const [isSmall] = useMediaQuery("(max-width: 600px)");
  return (
    <Center
      bg="#f0f2f5"
      borderBottom="6px solid #43c960"
      position="relative"
      {...props}
      w={"70%"}
      display={isSmall ? "none" : "flex"}
    >
      <Flex
        direction="column"
        textAlign="center"
        color="#41525d"
        align="center"
      >
        {/* <GeneralIcon /> */}
        <Box pt="8">
          <Heading fontWeight="light">Web 3.0 ChatApp</Heading>
          <Text fontSize="sm" mt="4">
            Send and receive messages with blockchain technology. <br />{" "}
          </Text>
        </Box>
        <AbsoluteCenter axis="horizontal" bottom="10" flex="1" mt="10">
          <HStack justifyItems="baseline" color="#8696a0">
            <EncryptedIcon />
            <Text fontSize="sm" fontWeight="medium">
              blockchain encrypted
            </Text>
          </HStack>
        </AbsoluteCenter>
      </Flex>
    </Center>
  );
}
