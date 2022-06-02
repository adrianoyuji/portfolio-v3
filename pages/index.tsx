import { Box } from "@chakra-ui/react";
import About from "components/About";
import Contact from "components/Contact";
import Education from "components/Education";
import Experience from "components/Experience";
import Footer from "components/Footer";
import Header from "components/Header";
import HeadingBanner from "components/HeadingBanner";
import HeadTag from "components/HeadTag";
import Portfolio from "components/Portfolio";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <HeadTag
        title="Adriano Yuji | Frontend Engineer"
        description="Hey there"
      />
      <Header />
      <Box as="main" bgColor="background">
        <HeadingBanner />
        <About />
        <Experience />
        <Portfolio />
        <Education />
        <Contact />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
