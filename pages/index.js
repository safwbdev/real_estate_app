import Link from "next/link";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Banner3 from "../components/Banner3";
import DividerBox from "../components/DividerBox";
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
  HERO_TITLE_C,
  HERO_TEXT_C,
  HERO_BUTTONTEXT_C,
} from "../utils/lang";
import { BANNER_1, BANNER_2, BANNER_3 } from "../utils/imageSource";

const Home = ({ propertiesForSale, propertiesForRent }) => {
  return (
    <>
      <Box
        backgroundColor={{ base: "none", md: "blue.100" }}
        backgroundImage={{
          base: BANNER_1,
          md: "none",
        }}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      >
        <Box maxWidth={"1280px"} m={"auto"}>
          <Banner
            purpose={HERO_SUBTITLE_A}
            title={HERO_TITLE_A}
            desc={HERO_TEXT_A}
            buttonText={HERO_BUTTONTEXT_A}
            linkName="/search?purpose=for-sale"
            imageUrl={BANNER_1}
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
        backgroundImage={BANNER_2}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundAttachment={"fixed"}
      >
        <Flex
          maxWidth={"1280px"}
          height={{ base: "80vh", md: "50vh" }}
          m={"auto"}
          p={{ base: "30px", md: "0" }}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          textAlign={"center"}
        >
          <Text textColor={"white"} fontSize={"xxx-large"} marginBottom={2}>
            {HERO_TITLE_C}
          </Text>

          <Text textColor={"white"} fontSize={"xx-large"} marginBottom={5}>
            {HERO_TEXT_C}
          </Text>
          <Link href={"/search"}>
            <Button backgroundColor={"white"} textColor={"black"}>
              {HERO_BUTTONTEXT_C}
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
          imageUrl={BANNER_3}
          flip
          disableHeight
        />
        <DividerBox
          title={"Properties for Rent"}
          url={"/search?purpose=for-rent"}
        />
      </Box>
      <PropertySection propertyData={propertiesForSale} />
      <Banner3 disableColor />
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
