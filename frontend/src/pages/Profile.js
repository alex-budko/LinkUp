import {
  Avatar,
  Box,
  Text,
  Wrap,
  WrapItem,
  VStack,
  Center,
  Heading,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { get_user } from "../actions/get_user";
import { UserContext } from "../context/User";

function Profile() {
  const [user, setUser] = useState({
    username: "Tom Hanks",
    email: "ky200617@gmail.com",
    location: "Philadelphia, PA",
    tags: ["Clean-Up", "Help", "Oceans"],
    past_events: ["Event 1"],
    upcoming_events: ["Event 3"],
    hours: 10,
  });
  const { uid } = useParams();
  useEffect(() => {
    get_user(uid).then((data) => {
      console.log(data)
      // setUser();
    });
  }, []);
  // const user = {
  //   username: "Tom Hanks",
  //   email: "ky200617@gmail.com",
  //   location: "Philadelphia, PA",
  //   tags: ["Clean-Up", "Help", "Oceans"],
  //   past_events: [
  //     "Event 1"
  //   ],
  //   upcoming_events: ["Event 3"],
  //   hours: 10,
  // };

  return (
    <Flex>
      <Spacer />
      <Wrap
        bgColor="gray.700"
        minH="550px"
        shadow="dark-lg"
        rounded="3xl"
        p="5"
        maxW="350px"
        justify={"center"}
        mt={"5"}
      >
        <Box style={{ marginTop: "15px" }}>
          <Center>
            <Avatar size="2xl" name={user.username} />
          </Center>
          <VStack mt="5">
            <Heading color="white">{user.username}</Heading>
            <Text color="white">{user.email}</Text>
          </VStack>
        </Box>

        <VStack
          style={{ align: "center", marginLeft: "10px" }}
          alignItems="center"
        >
          <Box
            rounded="2xl"
            textAlign="center"
            p="2"
            bgColor="yellow.500"
            style={{ marginTop: "15px" }}
          >
            {user.hours} Total Hours
          </Box>
          <Box
            rounded="2xl"
            textAlign="center"
            p="2"
            bgColor="blue.300"
            style={{ marginTop: "25px" }}
          >
            {user.location}
          </Box>
          <Wrap justify={"center"} style={{ marginTop: "25px" }}>
            {user.tags.map((tags, index) => {
              return (
                <WrapItem
                  key={index}
                  rounded="2xl"
                  textAlign="center"
                  bgColor="green.500"
                  p="2"
                >
                  <Text>#{tags}</Text>
                </WrapItem>
              );
            })}
          </Wrap>
        </VStack>
      </Wrap>
      <Spacer />
    </Flex>
  );
}

export default Profile;
