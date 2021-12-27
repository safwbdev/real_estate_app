import React from "react";
import Gallery from "../../components/Property/Gallery";
import PropertySection from "../../components/Property/PropertySection";
import { Box, Flex, Text, Stack, Divider } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import { PROP_RECOMENDATIONS } from "../../utils/lang";
import { Facilities } from "../../components/Property/Facilities";
import { Details } from "../../components/Property/Details";
import { ShareBox } from "../../components/Property/ShareBox";

const RecommendationTitle = () => (
  <>
    <Box maxWidth={"1280px"} m={"auto"} marginTop={"20px"}>
      <Text
        fontSize="xl"
        fontWeight="black"
        marginBottom="2"
        paddingLeft={{ base: 5, md: 0 }}
        textAlign={"left"}
      >
        {PROP_RECOMENDATIONS}
      </Text>
    </Box>
  </>
);
const Description = ({ description }) => (
  <Box marginTop={"2"} marginBottom={8}>
    <Text lineHeight={"2"} color={"grey.600"}>
      {description}
    </Text>
  </Box>
);

const PropertyDetails = ({
  propertyDetails: {
    agency,
    amenities,
    area,
    baths,
    description,
    furnishingStatus,
    isVerified,
    location,
    photos,
    price,
    purpose,
    rentFrequency,
    rooms,
    title,
    type,
  },
  recommendations,
}) => {
  const shareUrl = "http://localhost:3000/";

  return (
    <>
      <Box
        maxWidth={"1280px"}
        m={"auto"}
        // m={{ base: "0", sm: "30px", md: "30px", lg: "auto" }}
        marginTop={"20px"}
      >
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
        <Stack
          // direction={["column", "row"]}
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        >
          <Box w={{ base: "100%", md: "100%", lg: "75%" }}>
            {photos && <Gallery data={photos} />}
          </Box>
          <Box
            w={{ base: "100%", md: "100%", lg: "25%" }}
            backgroundColor={"blue.100"}
            borderRadius={{ base: 0, md: 8 }}
            p={"10px"}
          >
            <Details
              agent={agency}
              isVerified={isVerified}
              price={price}
              rentFrequency={rentFrequency}
              type={type}
              purpose={purpose}
              location={location[2]}
              rooms={rooms}
              baths={baths}
              area={area}
              furnishingStatus={furnishingStatus}
            />
            <Flex paddingTop={2} paddingBottom={3}>
              <Divider />
            </Flex>

            <ShareBox link={shareUrl} />
          </Box>
        </Stack>
        <Box margin="auto" p={{ base: 4, md: 0 }}>
          <Box w="full">
            <Description description={description} />
            <Facilities data={amenities} />
          </Box>
        </Box>
        <RecommendationTitle />
        <PropertySection propertyData={recommendations?.hits} />
      </Box>
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
