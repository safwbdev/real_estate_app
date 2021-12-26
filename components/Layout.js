import Head from "next/head";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import { NAV_TITLE } from "../utils/lang";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>{NAV_TITLE}</title>
    </Head>
    <header>
      <Navbar2 />
    </header>

    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Layout;
