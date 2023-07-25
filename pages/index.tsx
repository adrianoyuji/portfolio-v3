import { Box, useDisclosure } from "@chakra-ui/react";
import About from "components/About";
import Contact from "components/Contact";
import DrawerComponent from "components/Drawer/Drawer";
import Education from "components/Education";
import Experience from "components/Experience";
import Footer from "components/Footer";
import Header from "components/Header";
import HeadingBanner from "components/HeadingBanner";
import HeadTag from "components/HeadTag";
import Portfolio from "components/Portfolio";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); //Drawer

  return (
    <>
      <HeadTag
        title="Adriano Yuji | Front-end Engineer"
        description="I build responsive web pages, check my portfolio!"
      />
      <Header onOpenDrawer={onOpen} />
      <Box as="main" bgColor="background">
        <HeadingBanner />
        <About />
        <Experience />
        <Portfolio />
        <Education />
        <Contact />
        <Footer />
      </Box>
      <DrawerComponent isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Home;
