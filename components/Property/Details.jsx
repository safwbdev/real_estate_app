import React from "react";
import { Box, Flex, Avatar, Text, Divider } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { MdChair } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";
import { BsGridFill } from "react-icons/bs";
import millify from "millify";
import {
  PROP_BATHS,
  PROP_FURNISH,
  PROP_ROOM,
  PROP_ROOMS,
  PROP_SQFT,
  PROP_SQFT_FULL,
  UAE_CURR,
} from "../../utils/lang";

export const Details = ({
  agent,
  area,
  isVerified,
  price,
  rentFrequency,
  type,
  purpose,
  location,
  rooms,
  baths,
  furnishingStatus,
}) => (
  <>

    <Flex alignItems={"center"} marginBottom={4}>
      {agent && (
        <>
          <Box marginRight={"10px"}>
            <Avatar size={"sm"} src={agent?.logo?.url} />
          </Box>
          <Box>
            <Text fontSize={"md"} textColor={"black"}>
              {agent?.name}
            </Text>
          </Box>
        </>
      )}
    </Flex>
    <Flex
      alignItems={"center"}
      justifyContent={{ base: "center", md: "space-between" }}
    >
      <Flex alignItems={"center"}>
        {isVerified && (
          <Box
            paddingRight={"3"}
            color={"green.400"}
            display={{ base: "block", md: "none" }}
          >
            <GoVerified />
          </Box>
        )}
        <Text fontWeight={"bold"} fontSize={"xl"} textColor={"black"}>
          {`${UAE_CURR} ${millify(price)}`}
          {rentFrequency && `/${rentFrequency}`}
        </Text>
      </Flex>
    </Flex>
    <Flex justifyContent={{ base: "center", md: "flex-start" }}>
      <Text fontSize={"lg"} textTransform={"capitalize"} textColor={"black"}>
        {type} {purpose.replace("-", " ")}
      </Text>
    </Flex>

    <Flex paddingTop={3} paddingBottom={3}>
      <Divider />
    </Flex>
    {location && (
      <Flex
        alignItems={"center"}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <Flex textColor={"black"}>
          <MdLocationCity />
        </Flex>
        <Text paddingLeft={"10px"} textColor={"black"}>
          {location?.name}
        </Text>
      </Flex>
    )}

    <Flex paddingTop={3} paddingBottom={3}>
      <Divider />
    </Flex>
    <Flex
      direction={{ base: "unset", md: "column" }}
      p={"1"}
      color={"blue.400"}
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Flex
        alignItems={"center"}
        w={"100%"}
        display={{ base: "none", md: "flex" }}
      >
        <Box paddingRight={"3"} color={"green.400"}>
          {isVerified && <GoVerified />}
        </Box>
        {isVerified && "Verified"}
      </Flex>
      <Flex alignItems={"center"} display={{ base: "none", md: "flex" }} mb={1}>
        <Flex>
          <BsGridFill />
        </Flex>
        <Flex marginLeft={"10px"}>{`${millify(area)} ${PROP_SQFT_FULL}`}</Flex>
      </Flex>

      {rooms !== 0 && (
        <Flex
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
          mb={1}
        >
          <Flex>
            <FaBed />
          </Flex>
          <Flex marginLeft={"10px"}>
            {rooms} {rooms >= 1 ? PROP_ROOMS : PROP_ROOM}
          </Flex>
        </Flex>
      )}
      {baths !== 0 && (
        <Flex
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
          mb={1}
        >
          <Flex>
            <FaBath />
          </Flex>
          <Flex marginLeft={"10px"}>
            {baths} {baths >= 1 ? PROP_BATHS : PROP_BATH}
          </Flex>
        </Flex>
      )}
      <Flex alignItems={"center"} display={{ base: "none", md: "flex" }} mb={1}>
        <Flex>
          <MdChair />
        </Flex>
        <Text marginLeft={"10px"} textTransform={"capitalize"}>
          {furnishingStatus && PROP_FURNISH}
        </Text>
      </Flex>
      <Flex
        alignItems={"center"}
        display={{ base: "flex", md: "none" }}
        width={"200px"}
        justifyContent={"space-between"}
      >
        <BsGridFill /> {`${millify(area)} ${PROP_SQFT}`} | <FaBed /> {rooms} |{" "}
        <FaBath /> {baths}
      </Flex>
    </Flex>
  </>
);
