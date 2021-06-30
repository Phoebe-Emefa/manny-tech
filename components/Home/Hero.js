import React from "react";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import { IoMdSettings } from "react-icons/io";
import Nav from "./Nav";

const Hero = () => {
  return (
    <Box>
      <Box pos="absolute" zIndex={2} width="100%">
        <Nav />
      </Box>
      <Box pos="relative">
        <Image src="/images/hero-bg.jpg" alt="hero image" />

        <Box pos="absolute" top="20%" left="calc(50% - 200px)">
          <Flex direction="column" justify="center" align="center">
            <Heading
              as="h3"
              fontSize="6xl"
              color="red.500"
              w={96}
              textAlign="center"
            >
              Manny Tech Solutions
            </Heading>
            <Text color="yellow.300" fontSize="xl">
              Our mandate is to solve all your digital needs
            </Text>
            <Box mt={6}>
              <Button
                leftIcon={<IoMdSettings color="red" />}
                bg="black"
                color="white"
                variant="solid"
                py={6}
                _hover={{ bg: "white", color: "black" }}
                _focus={{ outline: "none" }}
              >
                View Services
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box className="ct-angle">
          <svg
            className="first-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 100 100"
            version="1.1"
            preserveAspectRatio="none"
          >
            <path
              strokeWidth="0"
              d="M0 0 C50 100 50 100 100 0 L100 100 0 100"
            ></path>
          </svg>
        </Box>
        <Box className="ct-angle">
          <svg
            className="second-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 100 100"
            version="1.1"
            preserveAspectRatio="none"
          >
            <path
              strokeWidth="0"
              d="M0 0 C50 100 50 100 100 0 L100 100 0 100"
            ></path>
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
