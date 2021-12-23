import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

const Layout = ({ children }) => (
  <>
    <Head>Real Estate</Head>
    <header>
      <Navbar2 />
    </header>
    {/* <Box maxWidth={"1280px"} m={"auto"}> */}
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
    {/* </Box> */}
  </>
);

export default Layout;
