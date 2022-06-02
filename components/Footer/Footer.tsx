import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Section from "components/Section";
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
      <Section id="footer">
        <Link href="https://github.com/adrianoyuji/portfolio-v3" passHref>
          <Text
            textAlign="center"
            as="a"
            fontFamily="SF Mono Light"
            color="gray.200"
            target="_blank"
            fontSize="sm"
          >
            Made and designed with 💙 by Adriano Yuji Sato de Vasconcelos
          </Text>
        </Link>
      </Section>
    </Box>
  );
};

export default Footer;
