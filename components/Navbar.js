// import {
//   Box,
//   Flex,
//   IconButton,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
//   Spacer,
// } from "@chakra-ui/react";
// import Link from "next/link";
// import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
// import { FiKey } from "react-icons/fi";
// import { BsSearch } from "react-icons/bs";

// const Navbar = () => {
//   return (
//     <Flex p="2" borderBottom="1px" borderColor="gray.100">
//       <Box fontSize={"3xl"} color={"blue.400"} fontWeight={"bold"}>
//         <Link href="/" paddingLeft="2">
//           UAE Realtor
//         </Link>
//       </Box>
//       <Spacer />
//       <Box>
//         <Menu>
//           <MenuButton
//             as={IconButton}
//             icon={<FcMenu />}
//             variant="outlined"
//             color={"red.400"}
//           />
//           <MenuList>
//             <Link href="/" passHref>
//               <MenuItem icon={<FcHome />}>Home</MenuItem>
//             </Link>
//             <Link href="/search" passHref>
//               <MenuItem icon={<BsSearch />}>Search</MenuItem>
//             </Link>
//             <Link href="/search?purpose=for-sale" passHref>
//               <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
//             </Link>
//             <Link href="/search?purpose=for-rent" passHref>
//               <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
//             </Link>
//           </MenuList>
//         </Menu>
//       </Box>
//     </Flex>
//   );
// };

// export default Navbar;

import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import Link from "next/link";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  const linkData = [
    { label: "Home", url: "/" },
    { label: "Search", url: "/search" },
    { label: "Rent", url: "/search?purpose=for-rent" },
    { label: "Buy", url: "/search?purpose=for-sale" },
  ];

  const navLinks = linkData.map((link) => (
    <Link href={link.url} passHref>
      <Button as="a" variant="ghost" aria-label={link.label} my={5} w="100%">
        {link.label}
      </Button>
    </Link>
  ));

  return (
    <Flex>
      <Flex position="static" top="1rem" right="1rem" align="center">
        {/* Desktop */}
        <Flex display={["none", "none", "none", "flex"]}>{navLinks}</Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<FcMenu />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        zIndex={20}
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<FcMenu />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          {navLinks}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
