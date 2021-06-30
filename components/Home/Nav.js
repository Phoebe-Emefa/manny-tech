import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const navItems = [
  {
    id: 1,
    text: "Home",
  },
  {
    id: 2,
    text: "About Us",
  },
  {
    id: 3,
    text: "Contacts",
  },
];
const Nav = () => {
  return (
    <Flex
      justify="space-evenly"
      align="center"
      bg="black"
      color="white"
      w="50%"
      mx="auto"
      h={16}
      cursor="pointer"
    >
      {navItems.map((item) => (
        <Heading key={item.id} as="h4" fontSize="lg">
          {item.text}
        </Heading>
      ))}
    </Flex>
  );
};

export default Nav;
