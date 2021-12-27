import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import { PROP_SHARE } from "../../utils/lang";

export const ShareBox = ({ link }) => (
  <>
    <Flex paddingBottom={3} justifyContent={{ base: "center", md: "center" }}>
      <Text fontSize={"sm"} fontWeight={"bold"} textColor={"black"}>
        {PROP_SHARE}
      </Text>
    </Flex>
    <Flex paddingBottom={3} justifyContent={"space-around"}>
      <TwitterIcon size={32} url={link} round />
      <FacebookIcon size={32} url={link} round />
      <WhatsappIcon size={32} url={link} round />
    </Flex>
  </>
);
