import { Box, Flex, Icon, Text, Grid, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import Property from "../components/Property";
import SearchFilters from "../components/SearchFilters";
import { baseUrl, fetchApi } from "../utils/fetchApi";
const noResults = "https://via.placeholder.com/500?text=No+Results";

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(true);
  const router = useRouter();

  return (
    <>
      <Stack direction={["column", "row"]}>
        <Box
          // bg="yellow.200"
          w={{ base: "100%", md: "20%" }}
        >
          <Flex
            cursor={"pointer"}
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
            <Text>Search by filter</Text>
            <Icon paddingLeft={"2"} w={"7"} as={BsFilter} />
          </Flex>
          {searchFilters && <SearchFilters />}
          {/* <Text fontSize={"2xl"} p="4" fontWeight={"bold"}>
            Properties {router.query.purpose}
          </Text> */}
        </Box>
        <Box
          w={{ base: "100%", md: "80%" }}
          // bg="tomato"
          // direction={["column", "row"]}
        >
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
        {/* <Flex
          cursor={"pointer"}
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
          <Text>Search by filter</Text>
          <Icon paddingLeft={"2"} w={"7"} as={BsFilter} />
        </Flex> */}
        {/* {searchFilters && <SearchFilters />}
        <Text fontSize={"2xl"} p="4" fontWeight={"bold"}>
          Properties {router.query.purpose}
        </Text> */}
        {/* <Flex flexWrap={"wrap"}>
          {properties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex> */}

        {/* <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Grid> */}
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
              No Result Found.
            </Text>
          </Flex>
        )}
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
