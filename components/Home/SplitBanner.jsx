import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IMG_APARTMENT, IMG_VILLA } from "../../utils/imageSource";
import {
  SEE_MORE_TEXT,
  SUBTITLE_APARTMENTS,
  SUBTITLE_VILLA,
  TITLE_APARTMENTS,
  TITLE_VILLAS,
} from "../../utils/lang";

const SplitBanner = ({ disableColor }) => {
  const bannerHeight = { base: "60vh", md: "50vh" };
  const bannerWidth = { base: "100%", md: "50%" };
  return (
    <Stack
      direction={["column", "row"]}
      spacing={0}
      marginTop={{ base: "30px", md: "100px" }}
    >
      <Flex
        w={bannerWidth}
        h={bannerHeight}
        backgroundImage={IMG_APARTMENT}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box textAlign={"center"}>
          <Heading
            as={"h2"}
            size={"xl"}
            textColor={"white"}
            textShadow={"3px 3px 3px  #000"}
            lineHeight={1.5}
            textAlign={"center"}
            marginBottom={5}
          >
            {TITLE_APARTMENTS}
          </Heading>
          <Text
            marginBottom={5}
            textColor={"white"}
            fontWeight={"bold"}
            fontSize={18}
            textShadow={"2px 2px 3px  #000"}
          >
            {SUBTITLE_APARTMENTS}
          </Text>

          <Link href={"/search?categoryExternalID=4"}>
            <Button
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              size="md"
              textColor={disableColor ? "black" : "primary.800"}
              backgroundColor={disableColor ? "white" : "primary.800"}
            >
              {SEE_MORE_TEXT}
            </Button>
          </Link>
        </Box>
      </Flex>
      <Flex
        w={bannerWidth}
        h={bannerHeight}
        backgroundImage={IMG_VILLA}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box textAlign={"center"}>
          <Heading
            as={"h2"}
            size={"xl"}
            lineHeight={1.5}
            textColor={"white"}
            textShadow={"3px 3px 3px  #000"}
            textAlign={"center"}
            marginBottom={5}
          >
            {TITLE_VILLAS}
          </Heading>
          <Text
            marginBottom={5}
            textColor={"white"}
            fontWeight={"bold"}
            fontSize={18}
            textShadow={"2px 2px 3px  #000"}
          >
            {SUBTITLE_VILLA}
          </Text>
          <Link href={"/search?categoryExternalID=3"}>
            <Button
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              size="md"
              textColor={disableColor ? "black" : "primary.800"}
              backgroundColor={disableColor ? "white" : "primary.800"}
            >
              {SEE_MORE_TEXT}
            </Button>
          </Link>
        </Box>
      </Flex>
    </Stack>
  );
};

export default SplitBanner;
