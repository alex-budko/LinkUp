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

function Main() {
  const [isMobile] = useMediaQuery("max-width:500px");
  const textSize = 15;
  const color = "#74d09d";
  const [events, setEvents] = useState([]);

  useEffect(() => {
    get_events().then((evnts) => {
      setEvents([...evnts]);
    });
  }, []);

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
                      size="lg"
                      as={Link}
                      to="/event"
                      textAlign={"center"}
                    >
                      {event.title}
                    </Heading>
                    <Text fontSize={textSize}>{event.location}</Text>
                  </VStack>
                  <VStack>
                    <Text fontSize={textSize}>{event.start_time}</Text>
                    <Text fontSize={textSize}>
                      {event.capacity - event.attendees_count} spots available
                    </Text>
                    <Wrap justify={"center"}>
                      {/* {event.tags.map((tag, i) => {
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
                      })} */}
                    </Wrap>
                    <Button
                      width={"80%"}
                      rounded="3xl"
                      color="gray.50"
                      bgColor="green.400"
                      _hover={{ bgColor: "green.500" }}
                    >
                      Register
                    </Button>
                  </VStack>
                </GridItem>
                <GridItem>
                  {!isMobile && (
                    <Image
                      rounded="xl"
                      src={
                        "https://www.signupgenius.com/cms/images/groups/beach-clean-up-tips-ideas-article-600x400.jpg"
                      }
                    />
                  )}
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
