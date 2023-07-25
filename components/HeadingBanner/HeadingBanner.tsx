import { Text } from "@chakra-ui/react";
import Section from "components/Section";
import React from "react";
import FadeUpTag from "./FadeUpTag";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";

const HeadingBanner = () => {
  return (
    <Section
      id="main"
      rest={{
        display: "flex",
        flexDir: "column",
        justifyContent: "center",
        alignContent: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <FadeUpTag delayMS="1000">
        <Text as="h1" fontFamily="SF Mono Light" color="neonBlue" fontSize="md">
          Hey, my name is
        </Text>
      </FadeUpTag>
      <FadeUpTag delayMS="1200">
        <Text
          mt="4"
          lineHeight={{ base: "64px", md: "96px" }}
          as="h2"
          color="gray.200"
          fontSize={{ base: "5xl", md: "8xl" }}
          fontWeight={"bold"}
        >
          Adriano Yuji.
        </Text>
      </FadeUpTag>
      <FadeUpTag delayMS="1400">
        <Text
          lineHeight={{ base: "40px", md: "80px" }}
          as="h3"
          color="gray.500"
          fontSize={{ base: "2xl", md: "6xl" }}
          fontWeight={"bold"}
          mb="4"
        >
          I build responsive web pages.
        </Text>
      </FadeUpTag>
      <FadeUpTag delayMS="1600">
        <Text as="p" color="gray.300">
          I'm a Front-end Engineer specialized in building responsive and usable
          digital solutions.
        </Text>
      </FadeUpTag>
      <Link href="#about" passHref>
        <Text
          as="a"
          position="absolute"
          bottom="64px"
          right="47.5%"
          animation="bounce 1.5s ease-in-out infinite"
        >
          <BsChevronDown color="white" size="1.5rem" />
        </Text>
      </Link>
    </Section>
  );
};

export default React.memo(HeadingBanner);
