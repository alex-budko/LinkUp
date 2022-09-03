import {
  Avatar,
  Box,
  Center,
  HStack,
  Text,
  Wrap,
  WrapItem,
  Heading,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserContext } from "../context/User";

function Profile() {
  // const { user, setUser } = useContext(UserContext);

  const user = {
    username: "Tom Hanks",
    email: "tom@gmail.com",
    location: "Philadelphia, PA",
    tags: ["Clean-Up", "Help", "Oceans"],
    past_events: [
      "Event 1",
      "Event 2",
      "Event 3",
      "Event 4",
      "Event 5",
      "Event 6",
      "sdflkj",
      "Event 1",
      "Event 2",
      "Event 3",
      "Event 4",
      "Event 5",
      "Event 6",
      "sdflkj",
    ],
    upcoming_events: ["Event 3"],
    hours: 10,
  };

  return (
    <Box>
      <HStack mt="50">
        <Box ml="250">
          <Avatar size="2xl" name={user.username} />
          <VStack mt="2">
            <Text>{user.username}</Text>
            <Text>{user.email}</Text>
          </VStack>
        </Box>
        <VStack style={{ marginLeft: "500px" }} alignItems="end">
          <Box
            rounded="3xl"
            textAlign="center"
            width="150px"
            p="2"
            bgColor="yellow.300"
          >
            {user.hours} Total Hours
          </Box>
          <Box
            rounded="3xl"
            textAlign="center"
            width="150px"
            p="2"
            bgColor="blue.300"
            style={{ marginTop: "25px" }}
          >
            {user.location}
          </Box>
          <Box display="flex">
            {user.tags.map((tags, index) => {
              return (
                <Box
                  key={index}
                  rounded="3xl"
                  textAlign="center"
                  bgColor="green.300"
                  mt="5"
                  p="3"
                  ml="5"
                >
                  <Text>#{tags}</Text>
                </Box>
              );
            })}
          </Box>
        </VStack>
      </HStack>

      <Accordion allowMultiple borderBottom="none !important">
        <AccordionItem>
          <Center>
            <AccordionButton
              rounded="3xl"
              width="850px"
              p="5"
              bgColor="green.600"
              mt="10"
            >
              <Box flex="1" textAlign="left">
                Upcoming Events
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Center>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <VStack align="left" ml="250" mr="250">
        <Box rounded="3xl" width="850px" p="5" bgColor="green.600" mt="10">
          <Heading>Upcoming Events</Heading>
        </Box>

        <Heading>Past Events</Heading>

        <Wrap>
          {user.past_events.map((event) => (
            <WrapItem>
              <Box
                bgColor="blackAlpha.300"
                rounded="3xl"
                p="5"
                m="5"
                maxW="300px"
              >
                <Text>{event}</Text>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </Box>
  );
}

export default Profile;
