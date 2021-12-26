import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const Banner = ({
  purpose,
  title,
  desc,
  buttonText,
  linkName,
  imageUrl,
  rest,
  flip,
  disableColor,
  disableHeight,
}) => {
  let isflip = flip ? "row-reverse" : "row";
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: isflip }}
      wrap="no-wrap"
      minH="50vh"
      p={8}
      mb={16}
      height={disableHeight ? "unset" : { base: "95vh", md: "unset" }}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Text
          color="gray.500"
          fontSize="sm"
          fontWeight="medium"
          display={{ base: "none", md: "block" }}
        >
          {purpose}
        </Text>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color={disableColor ? "black" : "primary.800"}
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color={disableColor ? "black" : "primary.800"}
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {desc}
        </Heading>
        <Link href={linkName}>
          <Button
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            textColor={disableColor ? "black" : "primary.800"}
            backgroundColor={disableColor ? "white" : "primary.800"}
          >
            {buttonText}
          </Button>
        </Link>
      </Stack>
      <Box
        w={{ base: "80%", sm: "60%", md: "50%" }}
        mb={{ base: 12, md: 0 }}
        display={{ base: "none", md: "block" }}
      >
        <Image src={imageUrl} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  );
};
export default Banner;
