import { Box } from "@chakra-ui/layout";
import { COPYRIGHT_TEXT } from "../utils/lang";

const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    {COPYRIGHT_TEXT}
  </Box>
);

export default Footer;
