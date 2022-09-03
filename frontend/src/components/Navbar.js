import { Box, Center, HStack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";

function Navbar() {

  const { user, setUser } = useContext(UserContext);

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
      <HStack m='5' bgColor="blue.700" px='10' rounded='full'>
        {links.map((link, index) => {
          return (
            <Box key={index} p="5" as={Link} to={link.href}>
              <Text>{link.name}</Text>
            </Box>
          );
        })}
      </HStack>
    </Center>
  );
}

export default Navbar;
