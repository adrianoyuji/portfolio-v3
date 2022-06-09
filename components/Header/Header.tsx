import { Box } from "@chakra-ui/react";
import Section from "components/Section";
import useScrollDirection from "hooks/useScrollDirection";
import React, { useEffect } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

interface Props {
  onOpenDrawer: () => void;
}

const Header = ({ onOpenDrawer }: Props) => {
  const scrollDirection = useScrollDirection({ initialDirection: "down" });

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
      zIndex="100"
      transition="all 500ms ease-in-out"
      transform={
        scrollDirection === "down" ? "translate(0,-400px)" : "translate(0,0)"
      }
    >
      <Section id="top" direction="row" as="div">
        <Box w="100%" display="flex" flexDirection="row">
          <Logo />
          <NavBar onOpenDrawer={onOpenDrawer} />
        </Box>
      </Section>
    </Box>
  );
};

export default React.memo(Header);
