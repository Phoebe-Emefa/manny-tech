import React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

const icons = [
  {
    id: 1,
    icon: FaFacebookF,
    color: "#3b5998",
  },
  {
    id: 2,
    icon: FaTwitter,
    color: "#00acee ",
  },
  {
    id: 3,
    icon: FaLinkedinIn,
    color: "#0e76a8 ",
  },
];

const Socials = () => {
  return (
    <Flex bg="gray.700" justify="space-between" px={20} py={2}>
      <Text color="white">Welcome to Manny Tech Solutions</Text>
      <Flex>
        {icons.map((item) => (
          <Flex
            justify="center"
            align="center"
            key={item.id}
            bg="white"
            borderRadius="50%"
            h={7}
            w={7}
            ml={2}
          >
            <Icon as={item.icon} color={item.color} boxSize={4} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Socials;
