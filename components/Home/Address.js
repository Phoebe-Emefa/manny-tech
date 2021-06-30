import React from "react";
import { Box, Flex, Heading, Text, Icon, Image } from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const address = [
  {
    id: 1,
    title: "Call Us Today",
    info: "+233501426490 / +233555382991",
    icon: FaPhoneAlt,
  },
  {
    id: 2,
    title: "Email",
    info: "info@mannytechsolution.com",
    icon: MdEmail,
  },
  {
    id: 3,
    title: "Location",
    info: "North-Legon, Ghana",
    icon: ImLocation,
  },
];
const Address = () => {
  return (
    <Flex justify="space-between" px={20} py={2} bg="white">
      <Box w={60}>
        <Image src="/images/logo.png" alt="logo" width="100%" />
      </Box>
      <Flex align="center">
        {address.map((item) => (
          <Flex
            key={item.id}
            borderX={item.id === 2 ? "1px solid #A0AEC0" : "none"}
            ml={6}
            px={2}
          >
            <Icon as={item.icon} boxSize={8} color="orange.500" />
            <Box ml={3}>
              <Heading as="h6" fontSize="md">
                {item.title}{" "}
              </Heading>
              <Text fontSize="sm">{item.info} </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Address;
