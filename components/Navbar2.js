import { useState } from "react";
// import Link from "next/Link";
import { Flex, Box, Text, useColorMode, Switch } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
// import { NAV_TITLE } from "../utils/lang";

// const MenuItem = ({ children, isLast, to = "/" }) => {
//   return (
//     <Text
//       mb={{ base: isLast ? 0 : 8, sm: 0 }}
//       mr={{ base: 0, sm: isLast ? 0 : 8 }}
//       display="block"
//     >
//       <Link href={to} passHref>
//         {children}
//       </Link>
//     </Text>
//   );
// };

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  // const linkData = [
  //   { label: "Home", url: "/", isLast: false },
  //   { label: "Search", url: "/search", isLast: false },
  //   { label: "Rent", url: "/search?purpose=for-rent", isLast: false },
  //   { label: "Buy", url: "/search?purpose=for-sale", isLast: false },
  // ];

  // const navLinks = linkData.map((link) => (
  //   <MenuItem to={link.url} isLast={link.isLast} key={link.label}>
  //     {link.label}
  //   </MenuItem>
  // ));
  return (
    <Flex
      p={8}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      borderBottom={"1px"}
      borderBottomStyle={"solid"}
      borderBottomColor={"blue.100"}
    >
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          {/* <Link href={"/"} passHref>
            {NAV_TITLE}
          </Link> */}
        </Text>
      </Box>
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <IoMdClose /> : <GiHamburgerMenu />}
      </Box>
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          {/* {navLinks} */}
          {/* <MenuItem to={"/"}>Home</MenuItem>
          <MenuItem to={"/search"}>Search</MenuItem>
          <MenuItem to={"/search?purpose=for-rent"}>Rent</MenuItem>
          <MenuItem to={"/search?purpose=for-sale"}>Buy</MenuItem> */}
          <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
