import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Experience } from "./Experiences";
import { BsDot } from "react-icons/bs";

const ExperienceItem = ({
  availability,
  company,
  description,
  duration,
  position,
}: Experience) => {
  return (
    <Box display="flex" flexDir="column" my="4">
      <Text
        fontSize="xl"
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        alignItems={{ base: "flex-start", md: "center" }}
        as="h3"
      >
        <Text as="span" color="gray.200">
          {position}
        </Text>
        <Link href={company.href} passHref>
          <Text pl="1" color="neonBlue" as="a" _hover={{ opacity: "0.8" }}>
            @ {company.name}
          </Text>
        </Link>
      </Text>
      <Text color="gray.400" as="p">
        {availability}
      </Text>
      <Text fontFamily="SF Mono Light" color="gray.400" as="h4">
        {duration}
      </Text>
      <Text pt="4" color="gray.400" as="p">
        {description.heading}
      </Text>
      {description.bullets && (
        <Box as="ul">
          {description.bullets.map((bullet, index) => (
            <Box
              py="1"
              as="li"
              color="gray.400"
              key={`${position}-${index}`}
              display="flex"
            >
              <Text color="neonBlue" pr="1" pt="1">
                <BsDot size="1.25rem" />
              </Text>
              {bullet}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default React.memo(ExperienceItem);
