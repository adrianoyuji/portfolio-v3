import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Box flex="2.5">
      <Link href="#top" passHref>
        <Text
          as="a"
          color="neonBlue"
          fontSize="lg"
          _hover={{
            opacity: "0.8",
          }}
          transition="all 0.25s ease"
        >
          Adriano Yuji
        </Text>
      </Link>
    </Box>
  );
};

export default Logo;
