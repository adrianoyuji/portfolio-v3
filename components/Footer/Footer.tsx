import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
const Footer = () => {
  return (
    <Box
      as="footer"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      py="4"
    >
      <Link href="https://github.com/adrianoyuji/portfolio-v3" passHref>
        <Text
          as="a"
          fontFamily="SF Mono Light"
          color="gray.200"
          target="_blank"
          fontSize="sm"
        >
          Made and designed with 💙 by Adriano Yuji Sato de Vasconcelos
        </Text>
      </Link>
    </Box>
  );
};

export default Footer;
