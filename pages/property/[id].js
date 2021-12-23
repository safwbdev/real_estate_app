import millify from "millify";
import React from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { MdChair } from "react-icons/md";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Heading,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { BsGridFill } from "react-icons/bs";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
    location,
  },
}) => {
  console.log(location);
  return (
    <Box maxWidth={"1280px"} m={"auto"} marginTop={"20px"}>
      <Stack direction={["column", "row"]}>
        <Box w={{ base: "100%", md: "75%" }}>
          <Box paddingLeft={"35px"}>
            <Text fontSize={"xl"} marginBottom={"2"} fontWeight={"bold"}>
              {title}
            </Text>
          </Box>
          {photos && <ImageScrollbar data={photos} />}
        </Box>
        <Box
          w={{ base: "100%", md: "25%" }}
          backgroundColor={"blue.100"}
          p={"10px"}
        >
          <Flex
            // paddingTop={"2"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex alignItems={"center"}>
              {isVerified && (
                <Box
                  paddingRight={"3"}
                  color={"green.400"}
                  display={{ base: "block", md: "none" }}
                >
                  {/* {isVerified && <GoVerified />} */}
                </Box>
              )}
              <Text fontWeight={"bold"} fontSize={"xl"}>
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Text fontSize={"lg"} textTransform={"capitalize"}>
              {type} {purpose.replace("-", " ")}
            </Text>
          </Flex>
          <Flex
            direction={{ base: "unset", md: "column" }}
            // alignItems={"center"}
            p={"1"}
            // justifyContent={"space-between"}
            // w={"250px"}
            color={"blue.400"}
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
            <Flex
              alignItems={"center"}
              display={{ base: "none", md: "flex" }}
              mb={1}
            >
              <Flex>
                <BsGridFill />
              </Flex>
              <Flex marginLeft={"10px"}>{millify(area)} square feet</Flex>
            </Flex>
            <Flex
              alignItems={"center"}
              display={{ base: "none", md: "flex" }}
              mb={1}
            >
              <Flex>
                <FaBed />
              </Flex>
              <Flex marginLeft={"10px"}>
                {rooms} {rooms > 1 ? "Bedrooms" : "Bedroom"}
              </Flex>
            </Flex>
            <Flex
              alignItems={"center"}
              display={{ base: "none", md: "flex" }}
              mb={1}
            >
              <Flex>
                <FaBath />
              </Flex>
              <Flex marginLeft={"10px"}>
                {baths} {baths > 1 ? "Bathrooms" : "Bathroom"}
              </Flex>
            </Flex>
            <Flex
              alignItems={"center"}
              display={{ base: "none", md: "flex" }}
              mb={1}
            >
              <Flex>
                <MdChair />
              </Flex>
              <Text marginLeft={"10px"} textTransform={"capitalize"}>
                {furnishingStatus && "Fully Furnished"}
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              display={{ base: "flex", md: "none" }}
              width={"200px"}
              justifyContent={"space-between"}
            >
              <BsGridFill /> {millify(area)} sqft | <FaBed /> {rooms} |{" "}
              <FaBath />{" "}
            </Flex>
          </Flex>
          {/* <Flex>
            <Box>
              <Text mb={1} textTransform={"capitalize"}>
                {type} {purpose.replace("-", " ")}
              </Text>
            </Box>
          </Flex> */}
          <Flex paddingTop={2} paddingBottom={3}>
            <Divider />
          </Flex>
          <Flex alignItems={"center"}>
            {/* <Text>Agent Info</Text> */}
            <Box marginRight={"10px"}>
              <Avatar size={"sm"} src={agency?.logo?.url} />
            </Box>
            <Box>
              <Text fontSize={"sm"}>{agency?.name}</Text>
            </Box>
          </Flex>
          {/* <Box marginTop={"2"}>
            <Text fontSize={"lg"} marginBottom={"2"} fontWeight={"bold"}>
              {title}
            </Text>
            <Text lineHeight={"2"} color={"grey.600"}>
              {description}
            </Text>
          </Box> */}
        </Box>
      </Stack>
      <Box
        // maxWidth="1000px"
        margin="auto"
        p="4"
      >
        {/* {photos && <ImageScrollbar data={photos} />} */}
        <Box w="full" p="2">
          {/* <Flex
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
          </Flex> */}
          {/* <Flex
            alignItems={"center"}
            p={"1"}
            justifyContent={"space-between"}
            w={"250px"}
            color={"blue.400"}
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
            <BsGridFill />
          </Flex> */}
          <Box marginTop={"2"}>
            {/* <Text fontSize={"lg"} marginBottom={"2"} fontWeight={"bold"}>
              {title}
            </Text> */}
            <Text lineHeight={"2"} color={"grey.600"}>
              {description}
            </Text>
          </Box>
          {/* <Flex
            flexWrap={"wrap"}
            textTransform={"uppercase"}
            justifyContent={"space-around"}
            p={"10"}
          >
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
              // w={"400px"}
              borderBottom={"1px"}
              borderColor={"gray.100"}
              p={"3"}
            >
              <Text fontSize="xl" mb={1}>
                Type :
              </Text>
              <Heading>{type}</Heading>
            </Flex>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              // w={"400px"}

              direction={"column"}
              borderBottom={"1px"}
              borderColor={"gray.100"}
              p={"3"}
            >
              <Text fontSize="xl" mb={1}>
                Purpose :
              </Text>
              <Heading>{purpose.replace("-", " ")}</Heading>
            </Flex>
            {furnishingStatus && (
              <Flex
                justifyContent={"center"}
                //   w={"400px"}

                direction={"column"}
                borderBottom={"1px"}
                alignItems={"center"}
                borderColor={"gray.100"}
                p={"3"}
              >
                <Text fontSize="xl" mb={1}>
                  Furnishing Status :
                </Text>
                <Heading>{furnishingStatus}</Heading>
              </Flex>
            )}
          </Flex> */}
          {/* Facilites */}
          <Box>
            {amenities.length && (
              <Text fontSize="2xl" fontWeight="black" marginTop="5">
                Facilites:
              </Text>
            )}
            <Flex flexWrap={"wrap"}>
              {amenities?.map((item) =>
                item?.amenities?.map((aminity) => (
                  <Text
                    key={aminity.text}
                    fontWeight={"bold"}
                    color={"blue.400"}
                    fontSize={"l"}
                    p={"2"}
                    bg={"gray.200"}
                    m={"1"}
                    borderRadius={"15"}
                  >
                    {aminity.text}
                  </Text>
                ))
              )}
            </Flex>
          </Box>
          {/* Facilites End */}
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
