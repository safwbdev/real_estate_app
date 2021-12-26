import React from "react";
import Link from "next/link";
import { Button, Divider, Flex, Heading } from "@chakra-ui/react";
import { SEE_MORE_TEXT } from "../utils/lang";

const DividerBox = ({ title, url }) => {
  return (
    <Flex
      paddingTop={30}
      paddingBottom={30}
      paddingLeft={5}
      paddingRight={10}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {title && (
        <Flex paddingRight={5}>
          <Heading
            as="h2"
            size="lg"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
          >
            {title}
          </Heading>
        </Flex>
      )}
      {url ? (
        <Flex>
          <Divider borderColor="gray.200" />
        </Flex>
      ) : (
        <Divider borderColor="gray.200" />
      )}
      {url && (
        <Flex paddingLeft={5} display={{ base: "none", md: "block" }}>
          <Link href={url}>
            <Button backgroundColor={"transparent"}>{SEE_MORE_TEXT}</Button>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default DividerBox;
