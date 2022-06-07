import React from "react";
import { Container, SystemProps } from "@chakra-ui/react";

interface SectionProps {
  children: React.ReactNode;
  direction?: SystemProps["flexDirection"] | undefined;
  as?: any;
  id?: string;
  rest?: SystemProps;
}

const Section = ({
  children,
  direction = "column",
  as = "section",
  id = "",
  rest,
}: SectionProps) => {
  return (
    <Container
      {...rest}
      id={id}
      display="flex"
      as={as}
      px="4"
      py="5"
      maxW="container.lg"
      flexDirection={direction}
    >
      {children}
    </Container>
  );
};

export default Section;
