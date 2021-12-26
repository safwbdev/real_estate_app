import Link from "next/link";
import { Avatar, Box, Flex, Text, Image } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { PROP_SQFT, UAE_CURR } from "../utils/lang";
import { DEFAULT_PROP_IMAGE } from "../utils/imageSource";

const normalSize = { base: "100%", md: "420px" };

const searchSize = { base: "100%", md: "335px" };

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
  isSearch,
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      flexWrap={"wrap"}
      w={isSearch ? searchSize : normalSize}
      p="5"
      paddingTop={"0"}
      justifyContent={"flex-start"}
      cursor={"pointer"}
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : DEFAULT_PROP_IMAGE}
          size="100%"
          width={400}
          height={250}
          rounded="10px"
        />
      </Box>
      <Box w={"full"}>
        <Flex
          paddingTop={"2"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex alignItems={"center"}>
            <Box paddingRight={"3"} color={"green.400"}>
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight={"bold"} fontSize={"lg"}>
              {`${UAE_CURR} ${millify(price)}`}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size={"sm"} src={agency?.logo?.url} />
          </Box>
        </Flex>
        <Flex
          alignItems={"center"}
          p={"1"}
          justifyContent={"space-between"}
          w={"250px"}
          color={"blue.400"}
        >
          <FaBed /> {rooms} | <FaBath /> {baths} | <BsGridFill />{" "}
          {`${millify(area)} ${PROP_SQFT}`}
        </Flex>
        <Text fontSize={"lg"}>
          {title.length > 30 ? `${title.substring(0.3)}...` : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;
