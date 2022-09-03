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

  const textSize = 20

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

  const color = "green.400"
  const [events, setEvents] = useState([
    {
      title: "Beach clean-up",
      organizer: "Tom Nepala",
      availability: "12/50",
      location: "Prague",
      start: "8:00PM, June 19th",
      tags: ["#CleanUp"],
      picture: "https://www.signupgenius.com/cms/images/groups/beach-clean-up-tips-ideas-article-600x400.jpg" ,
    },
    {
      title: "Food drive",
      start: "8:00PM, June 29th",
      organizer: "Alex Budko",
      availability: "20/50",
      location: "Souther Philly",
      tags: ["#FoodDrive"],
      picture: "https://gracechristianchurch.com/wp-content/uploads/2021/01/Food-Drive-2.jpg" ,
    },
    {
      title: "Gardening",
      start: "8:00PM, June 30th",
      organizer: "Kevin Yang",
      availability: "9/50",
      location: "Boston",
      tags: ["#Garderfair"],
      picture: "https://gracechristianchurch.com/wp-content/uploads/2021/01/Food-Drive-2.jpg" ,
    },
    {
      title: "Electricity generation",
      start: "8:00PM, June 30th",
      organizer: "Davis Clark",
      availability: "9/100",
      location: "Eastern Philly",
      tags: ["#Renewable"],
      picture: "https://www.signupgenius.com/cms/images/groups/beach-clean-up-tips-ideas-article-600x400.jpg",
    },
    {
      title: "Event 3",
      start: "8:00PM, June 28th",
      organizer: "Tom",
      availability: "12/50",
      location: "Eastern Philly",
      tags: ["Beach-clean-up", "Beach-clean-up", "Beach-clean-up", "Beach-clean-up", "Beach-clean-up"],
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
              width="800px"
              p="10"
              bgColor={color}
              mt="10"
            >
              <Flex justifyContent={"center"}>
                <Box>
                  <Avatar
                    _hover={{ cursor: "pointer" }}
                    as={Link}
                    to="/event/1"
                    size="2xl"
                    src={event.picture}
                  />
                </Box>
                <Spacer />
                <Box>
                  <VStack>
                    <Heading as={Link} to="/event">
                      {event.title}
                    </Heading>
                    <Text fontSize={textSize}> {event.organizer}</Text>
                    <Text fontSize={textSize}>{event.location}</Text>
                  </VStack>
                </Box>
                <Spacer />
                <Box maxW={'400px'}>
                  <VStack>
                      <Text fontSize={textSize}>{event.start}</Text>
                      <Text fontSize={textSize}>{event.availability} available</Text>
                    <Wrap justify={"center"} >
                      {event.tags.map((tag, i) => {
                        return <WrapItem bgColor="blue.400" p="5" rounded="xl">{tag}</WrapItem>;
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
