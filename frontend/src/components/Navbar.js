import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    {
      name: "Explore",
      href: "",
    },
    {
      name: "Leaderboard",
      href: "leaderboard",
    },
    {
      name: "Login",
      href: "login",
    },
    {
      name: "Sign Up",
      href: "signup",
    },
  ];
  return (
    <Center>
      {links.map((link, index) => {
        return (
          <Box key={index} p="8" as={Link} to={link.href}>
            <Text>{link.name}</Text>
          </Box>
        );
      })}
    </Center>
  );
}

export default Navbar;
