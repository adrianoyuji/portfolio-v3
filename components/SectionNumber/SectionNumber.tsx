import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface SectionNumberProps {
  number?: string;
  sectionName: string;
}

const SectionNumber = ({ number, sectionName }: SectionNumberProps) => {
  return (
    <Box
      as="h2"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Box w="10%" h="1px" background="gray.600" mr="4" />
      {number && (
        <Text fontSize="xl" fontFamily="SF Mono Light" color="neonBlue" pr="2">
          {number}.
        </Text>
      )}
      <Text fontSize="2xl" color="gray.200" textAlign="center">
        {sectionName}
      </Text>
      <Box w="10%" h="1px" background="gray.600" ml="4" />
    </Box>
  );
};

export default React.memo(SectionNumber);
