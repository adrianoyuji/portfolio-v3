import { Box } from "@chakra-ui/react";
import Section from "components/Section";
import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Box
      backdropFilter="blur(10px)"
      boxShadow=" 0 10px 30px -10px rgba(2,12,27,0.7)"
      as="header"
      bgColor="rgb(9, 24, 51,0.85)"
      position="fixed"
      w="100vw"
      top="0"
      left="0"
      zIndex="9999"
    >
      <Section id="top" direction="row" as="div">
        <Box w="100%" display="flex" flexDirection="row">
          <Logo />
          <NavBar />
        </Box>
      </Section>
    </Box>
  );
};

export default React.memo(Header);
