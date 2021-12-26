import React from "react";
import { Flex } from "@chakra-ui/react";

export default function LandingLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      backgroundColor={"red"}
      m="0 auto"
      {...props}
    ></Flex>
  );
}
