import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
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
        <Box key={index} as={Link} to={link.href}>
          {link.name}
        </Box>;
      })}
    </Center>
  );
}

export default Navbar;
