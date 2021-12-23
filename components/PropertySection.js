import { Flex } from "@chakra-ui/react";
import React from "react";
import Property from "./Property";

const PropertySection = ({ propertyData }) => {
  return (
    <Flex flexWrap={"wrap"}>
      {propertyData.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
  );
};

export default PropertySection;
