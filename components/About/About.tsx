import SectionNumber from "../SectionNumber/SectionNumber";
import { Box, Text, Button } from "@chakra-ui/react";
import Section from "components/Section";
import React from "react";
import { FaCaretRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const TechStack: string[] = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "NextJS",
  "Node.js",
  "CSS3",
  "React-Native",
  "HTML5",
];

const About = () => {
  return (
    <Section id="about" direction="column">
      <SectionNumber number="01" sectionName="About me" />
      <Box display="flex" flexDir={{ base: "column", md: "row" }} mt="8">
        <Box flex="1.5" display="flex" flexDir="column" color="gray.200">
          <Text as="p" mb="4">
            Hello! My name is Adriano Yuji Sato de Vasconcelos, I'm a Frontend
            Engineer that loves to solve problems! I started my journey in
            programming back in 2014, when I wrote simple scripts for a
            videogame I used to play.
          </Text>

          <Text as="p" mb="4">
            Fast-forward to late 2019, where I began diving down into the ocean
            that web development is! Since then, I have tried to improve a
            little bit every single day in order to become a highly capable
            Software Engineer!
          </Text>
          <Text as="p" mb="4">
            Here are the technologies I've been working with until now:
          </Text>
          <Box as="ul" display="grid" gridTemplateColumns="50% 50%">
            {TechStack.map((tech) => (
              <Text
                as="li"
                fontFamily="SF Mono Regular"
                fontSize="sm"
                key={tech}
                display="flex"
                flexDir="row"
                alignItems="center"
              >
                <Text color="neonBlue" pr="2">
                  <FaCaretRight />
                </Text>
                {tech}
              </Text>
            ))}
          </Box>
        </Box>
        <Box flex="1" display="flex" flexDir="column" alignItems="center">
          <Box
            mt={{ base: "10", md: "0" }}
            h={{ base: "256px", md: "196px" }}
            w={{ base: "256px", md: "196px" }}
            position="relative"
            borderRadius="3xl"
            overflow="hidden"
            transition="all 0.5s ease-in-out"
            boxShadow="2xl"
            _hover={{
              transform: "scale(0.95)",
            }}
          >
            <Image
              objectFit="contain"
              src="/images/profile.jpg"
              layout="fill"
              loading="lazy"
              alt="Profile Picture"
              title="Adriano Yuji Profile Picture"
            />
          </Box>

          <Link
            href="/files/Adriano Vasconcelos - CV [EN] Frontend Dev.pdf"
            passHref
          >
            <Button
              variant="outline"
              colorScheme="cyan"
              mt="8"
              title="Check my resume/CV"
              as="a"
              target="_blank"
            >
              Resume
            </Button>
          </Link>
        </Box>
      </Box>
    </Section>
  );
};

export default React.memo(About);
