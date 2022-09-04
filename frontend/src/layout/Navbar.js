import { Avatar, Box, Center, HStack, Text } from "@chakra-ui/react";
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
      name: "Create",
      href: "event-create",
    },
    {
      name: "Login",
      href: "login",
    },
  ];
  return (
    <Center>
      <HStack m="5" px="10">
        {links.map((link, index) => {
          if (link.name === 'Login' && user.name) return
          return (
            <Box
              rounded="full"
              textAlign="center"
              color="gray.50"
              bgColor={"blue.300"}
              fontWeight="750"
              minW="120px"
              key={index}
              p="2.5"
              as={Link}
              to={link.href}
              _hover={{
                bgColor: 'blue.500',
              }}
            >
              <Text>{link.name}</Text>
            </Box>
          );
        })}
      </HStack>
      {user.name && <Avatar as={Link} to={`/profile/${user.uid}`} name={user.name} />}

    </Center>
  );
}

export default Navbar;
