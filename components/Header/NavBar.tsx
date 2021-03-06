import { Box, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import navItems from "./NavigationList";
import { BiMenuAltRight } from "react-icons/bi";
interface Props {
  onOpenDrawer: () => void;
}
const NavBar = ({ onOpenDrawer }: Props) => {
  return (
    <>
      <Box as="nav" flex="1.5">
        <Box
          as="ul"
          display={{
            base: "none",
            md: "flex",
          }}
          flexDir="row"
          justifyContent="space-between"
        >
          {navItems.map((item, index) => (
            <Box mr="4" as="li" key={item.label}>
              <Link href={item.href} passHref>
                <Text
                  as="a"
                  display="flex"
                  flexDir="row"
                  fontSize="sm"
                  color="gray.100"
                  fontFamily="SF Mono Light"
                  transition="all 0.25s ease"
                  _hover={{
                    color: "neonBlue",
                  }}
                >
                  <Text color="neonBlue" as="span" mr="1">
                    0{index + 1}.
                  </Text>
                  {item.label}
                </Text>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        display={{
          base: "block",
          md: "none",
        }}
      >
        <IconButton
          variant="ghost"
          color="neonBlue"
          aria-label="Side Drawer"
          onClick={onOpenDrawer}
          icon={<BiMenuAltRight size="2rem" />}
        />
      </Box>
    </>
  );
};

export default NavBar;
