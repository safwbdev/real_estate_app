import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Flex, Icon, Text, Stack } from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Property from "../components/Property/Property";
import SearchFilters from "../components/Search/SearchFilters";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { isMobile } from "react-device-detect";
import { SEARCH_FILTER_TITLE, SEARCH_NO_RESULTS } from "../utils/lang";

const noResults = "https://via.placeholder.com/500?text=No+Results";

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(true);
  const router = useRouter();
  const serachTitle = router.query.purpose
    ? `Properties ${router.query.purpose.replace("-", " ")}`
    : " All Properties";

  useEffect(() => {
    if (isMobile) {
      setSearchFilters(false);
    }
  }, []);

  let mobileFilterIcon = searchFilters ? (
    <Icon paddingLeft={"2"} w={"7"} as={BsChevronUp} />
  ) : (
    <Icon paddingLeft={"2"} w={"7"} as={BsChevronDown} />
  );
  return (
    <>
      <Box maxWidth={"1280px"} m={"auto"}>
        <Stack direction={["column", "row"]}>
          <Box w={{ base: "100%", md: "20%" }} marginTop={"20px"}>
            <Flex
              cursor={"pointer"}
              borderTopRadius={"10px"}
              borderBottomRadius={searchFilters ? 0 : "10px"}
              bg={"gray.100"}
              borderBottom={"1px"}
              borderColor={"gray.200"}
              p="2"
              fontWeight={"black"}
              fontSize={"lg"}
              justifyContent={"center"}
              alignItems={"center"}
              onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
            >
              <Text>{SEARCH_FILTER_TITLE}</Text>
              {mobileFilterIcon}
            </Flex>
            {searchFilters && <SearchFilters />}
          </Box>
          <Box w={{ base: "100%", md: "80%" }}>
            <Text fontSize={"2xl"} p="4" fontWeight={"bold"}>
              {serachTitle}
            </Text>

            <Flex flexWrap={"wrap"}>
              {properties.map((property) => (
                <Box key={property.id}>
                  <Property property={property} isSearch />
                </Box>
              ))}
            </Flex>
          </Box>
        </Stack>
        <Box>
          {properties.length === 0 && (
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              marginTop={"5"}
              marginBottom={"5"}
            >
              <Image
                alt="no result"
                src={noResults}
                width={"500px"}
                height={"500px"}
              />
              <Text fontSize="xl" marginTop="3">
                {SEARCH_NO_RESULTS}
              </Text>
            </Flex>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
