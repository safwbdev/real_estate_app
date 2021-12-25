import { Avatar, Box, Flex, Text, Image, Badge } from "@chakra-ui/react";
import millify from "millify";
// import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill, GoGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

const defaultImage =
  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
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
          src={coverPhoto ? coverPhoto.url : defaultImage}
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
              AED {millify(price)}
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
          {millify(area)} sqft
        </Flex>
        <Text fontSize={"lg"}>
          {title.length > 30 ? `${title.substring(0.3)}...` : title}
        </Text>
      </Box>
    </Flex>

    {/* <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={coverPhoto ? coverPhoto.url : defaultImage}
        alt={"property"}
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {rooms} beds &bull; {baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title.length > 30 ? `${title.substring(0.3)}...` : title}
        </Box>

        <Box>
          AED {millify(price)}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

      </Box>
    </Box> */}
  </Link>
);

export default Property;
