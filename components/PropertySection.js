// import { Flex } from "@chakra-ui/react";
import React from "react";
import Property from "./Property";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";

const PropertySection = ({ propertyData }) => {
  // return (
  //   <Flex flexWrap={"wrap"}>
  //     {propertyData.map((property) => (
  //       <Property property={property} key={property.id} />
  //     ))}
  //   </Flex>
  // );

  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
        // centerMode: false,
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          // dots: true,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <Box maxWidth={{ base: "unset", md: "1280px" }} m={"auto"}>
      <Slider {...settings} className="propertySection">
        {propertyData.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Slider>
    </Box>
  );
};

export default PropertySection;
