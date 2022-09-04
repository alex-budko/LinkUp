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
  Spacer,
  Button,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { get_certificate } from "../actions/get_certificate";
import { get_event } from "../actions/get_event";
import { get_user } from "../actions/get_user";
import { get_user_events } from "../actions/get_user_events";
import { UserContext } from "../context/User";

function Profile() {
  const { user } = useContext(UserContext);

  const [events, setEvents] = useState([]);
  const [_user, setUser] = useState({
    email: "",
  });
  const { uid } = useParams();
  useEffect(() => {
    get_user(uid).then((data) => {
      // console.log(data)
      setUser(data);
    });
  }, []);

  useEffect(() => {
    setEvents([]);
    get_user_events(uid).then((res) => {
      res.map((event) => {
        get_event(event.eid).then((evt) => {
          setEvents((events) => [...events, evt]);
        });
      });
    });
    console.log(events);
  }, []);

  return (
    <>
      {_user.email !== "" && (
        <Flex>
          <Spacer />
          <VStack
            minW="350px"
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
                <Avatar size="2xl" name={_user.name} />
              </Center>
              <VStack mt="5">
                <Heading color="white">{_user.name}</Heading>
                <Text color="white">{_user.email}</Text>
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
                style={{ marginTop: "5px", marginBottom: "25px" }}
              >
                {_user.hours} Total Hours
              </Box>
            </VStack>
            {user.name === _user.name && (
              <Box>
                <Center>
                  <Button
                    mb="30px"
                    onClick={() => {
                      get_certificate(user.uid).then((data) => {
                        console.log(data.image);

                        const img = new Image();

                        img.src = `data:image/png;base64,${data.image}`;
                        document.body.appendChild(img);
                        
                      });
                    }}
                  >
                    Get Certificate
                  </Button>
                </Center>
              </Box>
            )}
            {events.length > 0 && (
              <Box>
                <Heading color="white" size="md">
                  Upcoming Events:
                </Heading>
                {events.map((event, index) => {
                  return (
                    <Box
                      textAlign={"center"}
                      p="3"
                      color="white"
                      rounded="xl"
                      key={index}
                      bgColor="blue.700"
                    >
                      <Heading size="sm" as={Link} to={`/event/${event.eid}`}>{event.title}</Heading>
                    </Box>
                  );
                })}
              </Box>
            )}
          </VStack>

          <Spacer />
        </Flex>
      )}{" "}
    </>
  );
}

export default Profile;
