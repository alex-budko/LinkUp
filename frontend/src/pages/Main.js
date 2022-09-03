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
import React, { useState } from "react";

import {Link} from 'react-router-dom'

function Main() {
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
  ]);

  return (
    <Box>
      <Center>
        <Input
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
              // minW={["100px", "300px"]}
              width='850px'
              // minH="150px"
              p="14"
              bgColor={color}
              mt="10"
            >
              <Flex justifyContent={'center'}>
                <Box>
                  <Avatar _hover={{cursor: 'pointer'}} as={Link} to='/event' size='2xl' src={event.picture} />
                </Box>
                <Spacer />
                <Box>
                  <VStack>
                    <Heading as={Link} to='/event'>{event.title}</Heading>
                    <Text fontSize={24}> {event.organizer}</Text>
                    <Text fontSize={24}>{event.location}</Text>
                  </VStack>
                </Box>
                <Spacer />
                <Box>
                  <VStack>
                      <Text fontSize={24}>{event.start}</Text>
                      <Text fontSize={24}>{event.availability} available</Text>
                    <Wrap justify={'center'} maxW='150px' fontSize={24}>
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
