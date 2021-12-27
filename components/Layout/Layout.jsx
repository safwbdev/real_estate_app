import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { NAV_TITLE } from "../../utils/lang";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>{NAV_TITLE}</title>
    </Head>
    <header>
      <Navbar />
    </header>

    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Layout;
