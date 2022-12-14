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
  GridItem,
  useMediaQuery,
  Grid,
} from "@chakra-ui/react";

import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import { get_events } from "../actions/get_events";
import { get_search_events } from "../actions/get_search_events";

function Main() {
  const [isMobile] = useMediaQuery("max-width:500px");
  const textSize = 15;

  const pictures = [
    "https://www.popsci.com/uploads/2022/04/21/garden.jpg",
    "https://www.signupgenius.com/cms/images/groups/beach-clean-up-tips-ideas-article-600x400.jpg",
    "https://www.avera.org/app/files/public/79969/volunteers-safely-cleaning-up-community.jpg",
    "https://iea.imgix.net/9b69c4b4-e46f-43a6-9035-a8cf1143f56d/GettyImages-1169892501.jpg?auto=compress%2Cformat&fit=min&q=80&rect=0%2C0%2C3936%2C2624&w=2560&fit=crop&fm=jpg&q=70&auto=format&h=1707"
  ];

  const [search, setSearch] = useState("");
  const color = "#74d09d";
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (search === "") {
      get_events().then((evnts) => {
        console.log(evnts);
        setEvents([...evnts]);
      });
    } else {
      get_search_events(search).then((evnts) => {
        if (evnts.error) return;
        setEvents([...evnts]);
      });
    }
  }, [search]);

  return (
    <Box color={"white"}>
      <Center>
        <Input
          bgColor={"green.200"}
          shadow={"xl"}
          textAlign="center"
          rounded="3xl"
          textColor="green.800"
          maxW="300px"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          _placeholder={{
            fontWeight: 700,
            color: "green.700",
          }}
          fontWeight="semi-bold"
        />
      </Center>
      <VStack spacing="8">
        {events.map((event, index) => {
          return (
            <Box
              rounded="3xl"
              key={index}
              id={index}
              p="5"
              bgColor={"green.700"}
              mt="10"
              maxW={["300px", "600px"]}
            >
              <Grid templateColumns="1fr 1.3fr">
                <GridItem p="2">
                  <VStack>
                    <Heading
                      size="xl"
                      as={Link}
                      to={`/event/${event.eid}`}
                      textAlign={"center"}
                    >
                      {event.title}
                    </Heading>
                    <Text fontSize={textSize} style={{ marginTop: "10px" }}>
                      {event.location}
                    </Text>
                  </VStack>
                  <VStack>
                    <Text fontSize={textSize} style={{ marginTop: "10px" }}>
                      {event.start_time}
                    </Text>
                    <Text fontSize={textSize}>
                      {event.capacity - event.attendees_count} spots available
                    </Text>

                    <Button
                      style={{ marginTop: "20px" }}
                      width={"80%"}
                      rounded="3xl"
                      color="gray.50"
                      bgColor="green.400"
                      as={Link}
                      to={`/event/${event.eid}`}
                      _hover={{ bgColor: "green.500" }}
                    >
                      Register
                    </Button>
                  </VStack>
                </GridItem>
                <GridItem>
                  {!isMobile && (
                    <Image rounded="xl" src={pictures[index % 3]} />
                  )}
                </GridItem>
              </Grid>
            </Box>
          );
        })}
        <Box minH="20"></Box>
      </VStack>
    </Box>
  );
}

export default Main;
