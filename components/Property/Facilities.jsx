import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { PROP_FACILITIES } from "../../utils/lang";

export const Facilities = ({ data }) => (
  <Box marginBottom={50}>
    {data.length && (
      <Text
        fontSize="xl"
        fontWeight="black"
        marginBottom="2"
        textAlign={{ base: "center", md: "left" }}
      >
        {PROP_FACILITIES}
      </Text>
    )}
    <Flex
      flexWrap={"wrap"}
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      {data?.map((item) =>
        item?.amenities?.map((aminity) => (
          <Text
            key={aminity.text}
            fontWeight={"bold"}
            color={"blue.400"}
            fontSize={"sm"}
            p={"2"}
            bg={"gray.200"}
            m={"1"}
            borderRadius={8}
          >
            {aminity.text}
          </Text>
        ))
      )}
    </Flex>
  </Box>
);
