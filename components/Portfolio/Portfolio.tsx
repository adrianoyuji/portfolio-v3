import { Box } from "@chakra-ui/react";
import Section from "components/Section";
import React, { useState, useEffect } from "react";
import SectionNumber from "../SectionNumber/SectionNumber";
import ProjectItem from "./ProjectItem";
import projects from "./Projects";
import Slider from "react-slick";

const Portfolio = () => {
  const [isLargerThan768, setIsLargerThan768] = useState(false);

  useEffect(() => {
    const handleScreenChange = () => {
      if (window.innerWidth > 768) {
        setIsLargerThan768(true);
      } else {
        setIsLargerThan768(false);
      }
    };

    handleScreenChange();
    window.addEventListener("resize", () => handleScreenChange());
    return window.removeEventListener("resize", () => handleScreenChange());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isLargerThan768 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
  };
  return (
    <Section id="portfolio" direction="column" rest={{ overflow: "hidden" }}>
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
