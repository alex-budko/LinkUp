import React, { useContext, useState } from "react";
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
import DtPicker from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/index.css";

function EventCreate() {


  const [date, setDate] = useState(null);

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const onSubmit = (e) => {
    const title = e.target[0].value;
    const description = e.target[1].value;
    const capacity = e.target[2].value;
    const location = e.target[3].value;

    event_create(user.uid, title, description, capacity, location, date).then(
      () => {
        navigate("/explore", { replace: true });
      }
    );
  };
  return (
    <>
      {user.name ? (
        <Flex color="white">
          <Spacer />
          <Box
            p="5"
            bgColor={"green.800"}
            minW={"500px"}
            rounded="3xl"
            boxShadow="2xl"
          >
            <Center mb="5" mt="3">
              <Heading>Create Event</Heading>
            </Center>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(e);
              }}
            >
              <FormControl mb="2">
                <Heading size={"md"} mb="2">
                  Title*
                </Heading>
                <Input
                  mb="4"
                  color="black"
                  bgColor="white"
                  required
                  placeholder="Title"
                />
              </FormControl>

              <FormControl mb="2">
                <Heading size={"md"} mb="2">
                  Description
                </Heading>
                <Textarea
                  mb="4"
                  color="black"
                  bgColor="white"
                  placeholder="Description"
                />
              </FormControl>

              <FormControl mb="2">
                <Heading size={"md"} mb="2">
                  Capacity*
                </Heading>
                <NumberInput
                  mb="6"
                  defaultValue={2}
                  min={2}
                  max={20}
                  color="black"
                  bgColor="white"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper bgColor="green.400" rounded="md" />
                    <NumberDecrementStepper bgColor="green.400" rounded="md" />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl mb="2">
                <Heading size={"md"} mb="2">
                  Location*
                </Heading>
                <Input
                  mb="4"
                  color="black"
                  bgColor="white"
                  required
                  placeholder="Location"
                />
              </FormControl>

              <FormControl mb="2">
                <Heading size={"md"} mb="1">
                  Date*
                </Heading>
                <Box color="black" style={{ marginBottom: "25px" }}>
                  <DtPicker
                    onChange={setDate}
                  />
                </Box>
              </FormControl>

              <Button
                width="100%"
                type="submit"
                bgColor="green.300"
                _hover={{ bgColor: "green.400" }}
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
      <Box minH="20"></Box>
    </>
  );
}

export default EventCreate;
