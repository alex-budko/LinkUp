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
import React, { useContext } from "react";
import { UserContext } from "../context/User";
import { md5 } from "md5";
import axios from "axios";

export const get_gravatar = async (md5hash) => {
  let ans;
  try {
    await axios
      .get(`https://gravatar.com/avatar/${md5hash}?size=120&d=404`)
      .then((res) => {
        console.log("good");
      });
    return true;

  } catch (err) {
    return false;
  }
};


function Profile() {
  // const { user, setUser } = useContext(UserContext);

  const user = {
    username: "Tom Hanks",
    email: "ky200617@gmail.com",
    location: "Philadelphia, PA",
    tags: ["Clean-Up", "Help", "Oceans"],
    past_events: [
      "Event 1"
    ],
    upcoming_events: ["Event 3"],
    hours: 10,
  };

  // var md5 = require('md5');

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
            {/* {get_gravatar(md5(user.email)).then((res) => {return res}) == true || get_gravatar(md5(user.email)).catch((res) => {return res}) == false
              ? <Image src={`https://gravatar.com/avatar/${md5(user.email)}?size=120&d=404`} rounded="50%"/>
              : <Avatar size="2xl" name={user.username} />
            } */}
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
            width="150px"
            p="2"
            bgColor="yellow.300"
            style={{ marginTop: "15px" }}
          >
            {user.hours} Total Hours
          </Box>
          <Box
            rounded="2xl"
            textAlign="center"
            width="150px"
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
                  bgColor="green.300"
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
