import React from "react";
import Gallery from "../../components/Gallery";
import PropertySection from "../../components/PropertySection";
import { Box, Flex, Avatar, Text, Stack, Divider } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { MdChair } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";
import { BsGridFill } from "react-icons/bs";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import millify from "millify";
import {
  PROP_BATHS,
  PROP_FACILITIES,
  PROP_FURNISH,
  PROP_RECOMENDATIONS,
  PROP_ROOM,
  PROP_ROOMS,
  PROP_SHARE,
  PROP_SQFT,
  PROP_SQFT_FULL,
  UAE_CURR,
} from "../../utils/lang";

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
  recommendations,
}) => {
  const shareUrl = "http://localhost:3000/";

  return (
    <>
      <Box maxWidth={"1280px"} m={"auto"} marginTop={"20px"}>
        <Box>
          <Text
            fontSize={{ base: "xl", md: "x-large" }}
            marginBottom={{ base: "0", md: "2" }}
            fontWeight={"bold"}
            p={{ base: 4, md: 0 }}
          >
            {title}
          </Text>
        </Box>
        <Stack direction={["column", "row"]}>
          <Box w={{ base: "100%", md: "75%" }}>
            {photos && <Gallery data={photos} />}
          </Box>
          <Box
            w={{ base: "100%", md: "25%" }}
            backgroundColor={"blue.100"}
            borderRadius={{ base: 0, md: 8 }}
            p={"10px"}
          >
            <Flex alignItems={"center"} marginBottom={4}>
              <Box marginRight={"10px"}>
                <Avatar size={"sm"} src={agency?.logo?.url} />
              </Box>
              <Box>
                <Text fontSize={"md"} textColor={"black"}>
                  {agency?.name}
                </Text>
              </Box>
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
              <Text
                fontSize={"lg"}
                textTransform={"capitalize"}
                textColor={"black"}
              >
                {type} {purpose.replace("-", " ")}
              </Text>
            </Flex>

            <Flex paddingTop={3} paddingBottom={3}>
              <Divider />
            </Flex>
            {location[2] && (
              <Flex
                alignItems={"center"}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                <Flex textColor={"black"}>
                  <MdLocationCity />
                </Flex>
                <Text paddingLeft={"10px"} textColor={"black"}>
                  {location[2]?.name}
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
              <Flex
                alignItems={"center"}
                display={{ base: "none", md: "flex" }}
                mb={1}
              >
                <Flex>
                  <BsGridFill />
                </Flex>
                <Flex marginLeft={"10px"}>{`${millify(
                  area
                )} ${PROP_SQFT_FULL}`}</Flex>
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
              <Flex
                alignItems={"center"}
                display={{ base: "none", md: "flex" }}
                mb={1}
              >
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
                <BsGridFill /> {`${millify(area)} ${PROP_SQFT}`} | <FaBed />{" "}
                {rooms} | <FaBath /> {baths}
              </Flex>
            </Flex>

            <Flex paddingTop={2} paddingBottom={3}>
              <Divider />
            </Flex>
            <Flex
              paddingBottom={3}
              justifyContent={{ base: "center", md: "center" }}
            >
              <Text fontSize={"sm"} fontWeight={"bold"} textColor={"black"}>
                {PROP_SHARE}
              </Text>
            </Flex>
            <Flex paddingBottom={3} justifyContent={"space-around"}>
              <TwitterIcon size={32} url={shareUrl} round />
              <FacebookIcon size={32} url={shareUrl} round />
              <WhatsappIcon size={32} url={shareUrl} round />
            </Flex>
          </Box>
        </Stack>
        <Box margin="auto" p={{ base: 4, md: 0 }}>
          <Box w="full">
            <Box marginTop={"2"} marginBottom={8}>
              <Text lineHeight={"2"} color={"grey.600"}>
                {description}
              </Text>
            </Box>

            <Box marginBottom={50}>
              {amenities.length && (
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
                {amenities?.map((item) =>
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
          </Box>
        </Box>
      </Box>

      <Box maxWidth={"1280px"} m={"auto"} marginTop={"20px"}>
        {recommendations?.hits.length && (
          <Text
            fontSize="xl"
            fontWeight="black"
            marginBottom="2"
            paddingLeft={{ base: 5, md: 0 }}
            textAlign={"left"}
          >
            {PROP_RECOMENDATIONS}
          </Text>
        )}
      </Box>
      <PropertySection propertyData={recommendations?.hits} />
    </>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  const recommendation = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&hitsPerPage=3`
  );

  return {
    props: {
      propertyDetails: data,
      recommendations: recommendation,
    },
  };
}
