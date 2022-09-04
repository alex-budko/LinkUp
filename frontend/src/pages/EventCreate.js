import React, { useContext } from "react";
import {
  Button,
  Box,
  Heading,
  Center,
  Flex,
  Spacer,
  Stack,
  Checkbox,
  Wrap,
  FormControl,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
} from "@chakra-ui/react";
import { UserContext } from "../context/User";
import { event_create } from "../actions/event_create";
import { useNavigate } from "react-router";
import NotAuthenticated from "../components/NotAuthenticated";

function EventCreate() {
  const navigate = useNavigate()

  const tags = [
    "Trash-Cleanup",
    "Food-Drive",
    "Lawn-Moving",
    "Planting-Trees",
    "Tutoring",
    "Gardening",
    "Volunteer",
  ];

  const { user, setUser } = useContext(UserContext);

  const onSubmit = (e) => {
    const title = e.target[0].value
    const description = e.target[1].value
    let tags = ''

    for (let i = 2; i <= 8; i++) {
      if (e.target[i].checked) {
        if (i === 8) tags += (e.target[i].id)
        else tags += (e.target[i].id + ',')
      }
    }
    const capacity = e.target[9].value
    const location = e.target[10].value

    event_create(user.uid, title, description, tags, capacity, location).then(()=> {
      navigate('/', {replace: true})
    })
  };

  

  return (
    <>
      {user.name ? (
        <Flex>
          <Spacer />
          <Box p="5" bgColor="green.600" maxW={"450px"} rounded="3xl">
            <Center>
              <Heading>Event Create</Heading>
            </Center>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(e);
              }}
            >
              

              <FormControl bgColor={"blue.300"} mb="2">
                <Center>
                  <Heading size={"md"}>Title</Heading>
                </Center>
                <Input required placeholder="Title" />
              </FormControl>

              <FormControl bgColor={"blue.300"} mb="2">
                <Center>
                  <Heading size={"md"}>Description</Heading>
                </Center>
                <Textarea required placeholder="Description" />
              </FormControl>

              <FormControl bgColor={"blue.300"} mb="2">
                <Center>
                  <Heading size={"md"}>Tags</Heading>
                </Center>
                <Wrap spacing={5} justify="center">
                  {tags.map((tag, index) => {
                    return <Checkbox id={tag} key={index}>{tag}</Checkbox>;
                  })}
                </Wrap>
              </FormControl>

              <FormControl bgColor={"blue.300"} mb="2">
                <Center>
                  <Heading size={"md"}>Capacity</Heading>
                </Center>
                <NumberInput>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl bgColor={"blue.300"} mb="2">
                <Center>
                  <Heading size={"md"}>Location</Heading>
                </Center>
                <Input placeholder="Location" />
              </FormControl>

              <Button
                width="100%"
                type="submit"
                bgColor="green.300"
                _hover={{ bgColor: "orange.400" }}
              >
                Submit
              </Button>
            </form>
          </Box>
          <Spacer />
        </Flex>
      ) : (
        <NotAuthenticated />
      )}
    </>
  );
}

export default EventCreate;
