import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Text,
  DrawerBody,
  Box,
} from "@chakra-ui/react";
import navItems from "components/Header/NavigationList";
import Link from "next/link";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const DrawerComponent = ({ onClose, isOpen }: Props) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="xs">
      <DrawerOverlay />
      <DrawerContent bgColor="background">
        <DrawerCloseButton color="gray.200" />

        <DrawerBody
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          as="nav"
        >
          <Box
            as="ul"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            {navItems.map((item, index) => (
              <Box as="li" key={item.label} my="3">
                <Link href={item.href} passHref>
                  <Text
                    onClick={onClose}
                    as="a"
                    display="flex"
                    flexDir="column"
                    fontSize="md"
                    color="gray.100"
                    fontFamily="SF Mono Light"
                    transition="all 0.25s ease"
                    justifyContent="center"
                    alignItems="center"
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
