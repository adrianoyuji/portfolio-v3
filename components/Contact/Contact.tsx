import { Box, Text } from "@chakra-ui/react";
import Section from "components/Section";
import React from "react";
import SectionNumber from "../SectionNumber/SectionNumber";
import socialMedias from "./SocialMedia";
import SocialMediaItem from "./SocialMediaItem";

const Contact = () => {
  return (
    <Section
      id="contact"
      direction="column"
      rest={{
        height: "80vh",
        display: "flex",
        flexDir: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <SectionNumber number="04" sectionName="Now what?" />
      <Box
        display="flex"
        flexDir="column"
        mt="8"
        justifyContent="center"
        alignItems="center"
      >
        <Text as="h3" color="gray.300" fontSize="4xl" fontWeight={"bold"}>
          Send me a message
        </Text>
        <Text
          as="p"
          color="gray.500"
          fontSize="md"
          textAlign="center"
          width="75%"
          my="4"
        >
          I am looking for international opportunities to work remote or
          on-site!
          <br />
          Feel free to contact me through any of the channels below
        </Text>
        <Box
          mt="4"
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="center"
        >
          {socialMedias.map((social) => (
            <SocialMediaItem {...social} key={social.title} />
          ))}
        </Box>
      </Box>
    </Section>
  );
};

export default React.memo(Contact);
