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
import {
  DARK_HIGHLIGHT_BLUE,
  LIGHT_HIGHLIGHT_BLUE,
  MAIN_COLOR_BLUE,
} from "../theme/theme";
import useOnScreen from "../utils/useOnScreen";

function Main() {
  const ref = useRef();
  const [isMobile] = useMediaQuery("max-width:500px");
  const isVisible = useOnScreen(ref);
  const [page, setPage] = useState(0);

  const textSize = 15;

  useEffect(() => {
    if (isVisible) {
      setPage(page + 1);
    }
  }, [isVisible]);

  useEffect(() => {
    get_events(page).then((evnts) => {
      console.log([...events, ...evnts]);
      // setEvents([...events, ...evnts])
    });
  }, [page]);

  const color = "#74d09d";
  const [events, setEvents] = useState([
    {
      title: "Beach clean-up",
      organizer: "Tom Nepala",
      availability: "12/50",
      location: "Prague",
      start: "8:00PM, June 19th",
      tags: ["#CleanUp", "#CleanUp", "#CleanUp"],
      picture:
        "https://www.signupgenius.com/cms/images/groups/beach-clean-up-tips-ideas-article-600x400.jpg",
    },
    {
      title: "Food drive",
      start: "8:00PM, June 29th",
      organizer: "Alex Budko",
      availability: "20/50",
      location: "Southern Philly",
      tags: ["#FoodDrive"],
      picture:
        "https://gracechristianchurch.com/wp-content/uploads/2021/01/Food-Drive-2.jpg",
    },
    {
      title: "Gardening",
      start: "8:00PM, June 30th",
      organizer: "Kevin Yang",
      availability: "9/50",
      location: "Boston",
      tags: ["#Gardenfair"],
      picture:
        "https://gracechristianchurch.com/wp-content/uploads/2021/01/Food-Drive-2.jpg",
    },
    {
      title: "Electricity generation",
      start: "8:00PM, June 30th",
      organizer: "Davis Clark",
      availability: "9/100",
      location: "Eastern Philly",
      tags: ["#Renewable"],
      picture:
        "https://www.signupgenius.com/cms/images/groups/beach-clean-up-tips-ideas-article-600x400.jpg",
    },
  ]);

  return (
    <Box color={"white"}>
      <Center>
        <Input
          ref={ref}
          bgColor={'blue.200'}
          shadow={"xl"}
          textAlign="center"
          rounded="3xl"
          textColor={MAIN_COLOR_BLUE}
          maxW="300px"
          placeholder="Search"
          _placeholder={{
            fontWeight: 700,
            color: MAIN_COLOR_BLUE,
          }}
          fontWeight="semi-bold"
        />
      </Center>
      <VStack spacing='8'>
        {events.map((event, index) => {
          return (
            <Box
              rounded="3xl"
              key={index}
              id={index}
              ref={index === events.length - 1 ? ref : null}
              p="5"
              bgColor={'blue.200'}
              mt="10"
              maxW={["300px", "600px"]}
            >
              <Grid templateColumns="1fr 1.3fr">
                <GridItem p="2">
                  <VStack>
                    <Heading
                      size="lg"
                      as={Link}
                      to="/event"
                      textAlign={"center"}
                      textColor={MAIN_COLOR_BLUE}
                    >
                      {event.title}
                    </Heading>
                    <Text fontSize={textSize} >{event.location}</Text>
                  </VStack>
                  <VStack>
                    <Text fontSize={textSize}>{event.start}</Text>
                    <Text fontSize={textSize}>
                      {event.availability} available
                    </Text>
                    <Wrap justify={"center"}>
                      {event.tags.map((tag, i) => {
                        return (
                          <WrapItem
                            bgColor="blue.400"
                            p="1.5"
                            fontSize="10"
                            rounded="xl"
                            color="gray.50"
                            fontWeight={"600"}
                          >
                            {tag}
                          </WrapItem>
                        );
                      })}
                    </Wrap>
                    <Button
                      width={"80%"}
                      rounded="3xl"
                      color="gray.50"
                      bgColor="green.400"
                      _hover={{ bgColor: "green.800" }}
                    >
                      Register
                    </Button>
                  </VStack>
                </GridItem>
                <GridItem>
                  {!isMobile && <Image rounded="xl" src={event.picture} />}
                </GridItem>
              </Grid>
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
}

export default Main;
