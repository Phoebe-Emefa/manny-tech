import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import Socials from "../components/Home/Socials";
import Address from "../components/Home/Address";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <Box>
      <Socials />
      <Address />
      <Hero />
      <Text>THis is the home page</Text>
    </Box>
  );
};

export default Home;
