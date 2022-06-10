import { Box } from "@chakra-ui/react";
import Section from "components/Section";
import React from "react";
import SectionNumber from "../SectionNumber/SectionNumber";
import ExperienceItem from "./ExperienceItem";
import experiences from "./Experiences";

const Experience = () => {
  return (
    <Section id="experience" direction="column">
      <SectionNumber number="02" sectionName="My Career" />
      <Box display="flex" flexDir="column" mt="8">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={`${experience.company}-${index}`}
            {...experience}
          />
        ))}
      </Box>
    </Section>
  );
};

export default React.memo(Experience);
