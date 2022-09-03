import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Text,
  Wrap,
  WrapItem,
  Input,
  Heading,
  VStack,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import { get_events } from "../actions/get_events";
import useOnScreen from "../utils/useOnScreen";

function Main() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [page, setPage] = useState(0);

  useEffect(()=> {
    if (isVisible) {
      setPage(page + 1);
    }
  }, [isVisible])

  useEffect(() => {
    get_events(page).then((evnts) => {
      console.log([...events, ...evnts])
      // setEvents([...events, ...evnts])
    });
  }, [page]);

  const [events, setEvents] = useState([
    {
      title: "Event 1",
      organizer: "Tom",
      availability: "12/50",
      location: "Philadelphia",
      start: "8:00PM, June 19th",
      tags: ["Clean-Up", "Help", "Clean-Up", "Help", "Clean-Up", "Help"],
    },
    {
      title: "Event 2",
      start: "8:00PM, June 28th",
      organizer: "Tom",
      availability: "12/50",
      location: "Eastern Philly",
      tags: ["Beach-Clean-up"],
    },
    {
      title: "Event 3",
      start: "8:00PM, June 28th",
      organizer: "Tom",
      availability: "12/50",
      location: "Eastern Philly",
      tags: ["Beach-clean-up"],
    },
    {
      title: "Event 3",
      start: "8:00PM, June 28th",
      organizer: "Tom",
      availability: "12/50",
      location: "Eastern Philly",
      tags: ["Beach-clean-up"],
    },
    {
      title: "Event 3",
      start: "8:00PM, June 28th",
      organizer: "Tom",
      availability: "12/50",
      location: "Eastern Philly",
      tags: ["Beach-clean-up"],
    },
    {
      title: "Event 3",
      start: "8:00PM, June 28th",
      organizer: "Tom",
      availability: "12/50",
      location: "Eastern Philly",
      tags: ["Beach-clean-up"],
    },
  ]);

  return (
    <Box>
      <Center>
        <Input
          ref={ref}
          bgColor="blackAlpha.300"
          textAlign="center"
          rounded="3xl"
          maxW="300px"
          placeholder="Search"
        />
      </Center>
      <VStack>
        {events.map((event, index) => {
          return (
            <Box
              rounded="3xl"
              textAlign="center"
              key={index}
              id={index}
              ref={index === events.length - 1 ? ref : null}
              width="600px"
              p="10"
              bgColor="green.600"
              mt="10"
            >
              <Flex justifyContent={"center"}>
                <Box border="1px solid black" ml="-5">
                  <Avatar
                    _hover={{ cursor: "pointer" }}
                    as={Link}
                    to="/event/1"
                    size="2xl"
                    src="https://www.signupgenius.com/cms/images/groups/beach-clean-up-tips-ideas-article-600x400.jpg"
                  />
                </Box>
                <Spacer />
                <Box p="3" border="1px solid black">
                  <VStack>
                    <Heading as={Link} to="/event">
                      {event.title}
                    </Heading>
                    <Text>{event.organizer}</Text>
                    <Text>{event.location}</Text>
                  </VStack>
                </Box>
                <Spacer />
                <Box border="1px solid black">
                  <VStack>
                    <HStack>
                      <Text>{event.start}</Text>
                      <Text>{event.availability}</Text>
                    </HStack>
                    <Wrap justify={"center"} maxW="150px">
                      {event.tags.map((tag, i) => {
                        return <WrapItem>{tag}</WrapItem>;
                      })}
                    </Wrap>
                  </VStack>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
}

export default Main;
