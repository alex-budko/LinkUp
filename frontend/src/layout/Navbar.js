import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { log_out } from "../authentication/logout";
import { UserContext } from "../context/User";
import {
  DARK_HIGHLIGHT_BLUE,
  LIGHT_HIGHLIGHT_BLUE,
  MAIN_COLOR_BLUE,
  BACKGROUND_WHITE,
} from "../theme/theme";

const color = "#74d09d";

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Explore",
      href: "/explore",
    },
    {
      name: "Create",
      href: "event-create",
    },
    {
      name: "Leaderboard",
      href: "leaderboard",
    },
    {
      name: "Login",
      href: "login",
    },
  ];
  return (
    <Grid templateColumns="5fr 5fr 5fr" mb="5" mt="5">
      <GridItem>
        <Box as={Link} to='/'>
          <Image
            w="60px"
            position={"absolute"}
            left="50px"
            top="5"
            src={require("../images/sussi_logo.png")}
          />
        </Box>
      </GridItem>
      <GridItem />
      <GridItem>
        <Box>
          <HStack m="5" px="10">
            {links.map((link, index) => {
              if (link.name === "Login" && user.name) return;
              return (
                <Box
                  textAlign="center"
                  rounded="3xl"
                  color="gray.700"
                  fontWeight="750"
                  minW="130px"
                  key={index}
                  p="2.5"
                  as={Link}
                  to={link.href}
                  _hover={{
                    bgColor: "green.200",
                  }}
                >
                  <Text>{link.name}</Text>
                </Box>
              );
            })}
            {user.name && (
              <>
                <Avatar
                  as={Link}
                  to={`/profile/${user.uid}`}
                  name={user.name}
                />
                <Button rounded="full" color="gray.700" _hover={{ bg: "red.400"}} onClick={()=>{log_out(setUser)}}>Log Out</Button>
              </>
            )}
          </HStack>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Navbar;
