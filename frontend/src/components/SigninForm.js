import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Box,
  Input,
  Heading,
  Center,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SigninForm({ options, onSubmit, title, message, redirect, href }) {
  return (
    <Box p="5" bgColor="green.600" rounded="3xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <Center>
          <Heading size="md">{title}</Heading>
        </Center>

        {options.map((option, index) => {
          return (
            <FormControl key={index} id={options.id}>
              <FormLabel>{option.name}</FormLabel>
              <Input
                required
                bgColor={"white"}
                color="black"
                type={option.type}
              />
              <FormHelperText>{option.helperText}</FormHelperText>
            </FormControl>
          );
        })}
        <Button
          width="100%"
          type="submit"
          bgColor="green.300"
          _hover={{ bgColor: "orange.400" }}
        >
          Submit
        </Button>
        <HStack mt="5" textAlign={"center"}>
          <Text>{message}</Text>
          <Link to={href} _hover={{color: 'white'}}><u>{redirect}</u></Link>
        </HStack>
      </form>
    </Box>
  );
}

export default SigninForm;
