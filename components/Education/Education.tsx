import { Box } from "@chakra-ui/react";
import Section from "components/Section";
import React from "react";
import SectionNumber from "../SectionNumber/SectionNumber";
import certifications from "./Certifications";
import CertificationItem from "./CertificationItem";

const Education = () => {
  return (
    <Section id="education" direction="column">
      <SectionNumber sectionName="Education and Certificates" />
      <Box display="flex" flexDir="column" mt="8">
        {certifications.map((certificate, index) => (
          <CertificationItem {...certificate} key={`certification-${index}`} />
        ))}
      </Box>
    </Section>
  );
};

export default React.memo(Education);
