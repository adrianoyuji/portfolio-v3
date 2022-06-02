import { Box } from "@chakra-ui/react";
import Section from "components/Section";
import React from "react";
import SectionNumber from "../SectionNumber/SectionNumber";
import ProjectItem from "./ProjectItem";
import projects from "./Projects";
import Slider from "react-slick";

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  return (
    <Section id="portfolio" direction="column">
      <SectionNumber number="03" sectionName="Stuff I've built" />
      <Box display="flex" flexDir="column" mt="8">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectItem {...project} index={index} key={project.title} />
          ))}
        </Slider>
      </Box>
    </Section>
  );
};

export default React.memo(Portfolio);
