import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Banner from "../components/Banner";
import DividerBox from "../components/DividerBox";
import LandingLayout from "../components/Landing";

import PropertySection from "../components/PropertySection";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import {
  HERO_BUTTONTEXT_A,
  HERO_SUBTITLE_A,
  HERO_TEXT_A,
  HERO_TITLE_A,
  HERO_BUTTONTEXT_B,
  HERO_SUBTITLE_B,
  HERO_TEXT_B,
  HERO_TITLE_B,
} from "../utils/lang";

const Home = ({ propertiesForSale, propertiesForRent }) => {
  const image1 =
    "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  const image2 =
    "https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
  const image3 =
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  return (
    <>
      {/* <LandingLayout /> */}
      {/* <Box> */}
      <Box
        backgroundColor={{ base: "none", md: "blue.100" }}
        backgroundImage={{
          base: image1,
          md: "none",
        }}
        backgroundRepeat={"no-repeat"}
        // backgroundPosition={"right"}
        backgroundSize={"cover"}
        // backgroundAttachment={"fixed"}
      >
        <Box maxWidth={"1280px"} m={"auto"}>
          <Banner
            purpose={HERO_SUBTITLE_A}
            title={HERO_TITLE_A}
            desc={HERO_TEXT_A}
            buttonText={HERO_BUTTONTEXT_A}
            linkName="/search?purpose=for-sale"
            imageUrl={image1}
            disableColor
          />
        </Box>
      </Box>
      <Box maxWidth={"1280px"} m={"auto"}>
        <DividerBox
          title={"Properties for Sale"}
          url={"/search?purpose=for-sale"}
        />
      </Box>
      <PropertySection propertyData={propertiesForRent} />
      <Box
        // backgroundColor={"red.500"}
        backgroundImage={image2}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundAttachment={"fixed"}
      >
        <Flex
          maxWidth={"1280px"}
          height={{ base: "80vh", md: "30vh" }}
          // height={"30vh"}
          m={"auto"}
          p={{ base: "30px", md: "0" }}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          textAlign={"center"}
        >
          <Text textColor={"white"} fontSize={"xxx-large"} marginBottom={2}>
            100+ Properties all over the UAE
          </Text>

          <Text textColor={"white"} fontSize={"xx-large"} marginBottom={5}>
            Villas, Apartments and more to explore
          </Text>
          <Link href={"/search"}>
            <Button backgroundColor={"white"} textColor={"black"}>
              Explore Now
            </Button>
          </Link>
        </Flex>
      </Box>

      <Box maxWidth={"1280px"} m={"auto"}>
        <Banner
          purpose={HERO_SUBTITLE_B}
          title={HERO_TITLE_B}
          desc={HERO_TEXT_B}
          buttonText={HERO_BUTTONTEXT_B}
          linkName="/search?purpose=for-rent"
          imageUrl={image3}
          flip
          disableHeight
        />
        <DividerBox
          title={"Properties for Rent"}
          url={"/search?purpose=for-rent"}
        />
      </Box>
      <PropertySection propertyData={propertiesForSale} />
    </>
  );
};

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
