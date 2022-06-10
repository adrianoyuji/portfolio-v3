import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    heading: "Open Sans, sans-serif",
    body: "Raleway, sans-serif",
  },
  colors: {
    primary: "#899081",
    secondary: "#534644",
    background: "#091833",
    neonBlue: "#04d9ff",
    darkerNeonBlue: "#133e7c",
    neonPink: "#ea00d9",
    darkerneonPink: "#711c91",
  },
});

export default theme;
