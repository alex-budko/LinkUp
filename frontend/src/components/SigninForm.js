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
  Link,
  VStack,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

function SigninForm({ options, onSubmit, title, message, redirect, href }) {
  return (
    <Box p="5" color='white' bgColor={"green.800"} rounded="3xl" minW='500px'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <Center>
          <Heading size="lg">{title}</Heading>
        </Center>

        {options.map((option, index) => {
          return (
            <FormControl key={index} id={options.id} mb='30px'>
              <FormLabel>{option.name}</FormLabel>
              <Input
                required
                bgColor={"white"}
                color="black"
                type={option.type}
              />
              <FormHelperText color='gray.50'>{option.helperText}</FormHelperText>
            </FormControl>
          );
        })}
        <Button
          width="100%"
          type="submit"
          bgColor="green.300"
          _hover={{ bgColor: "green.400" }}
        >
          Submit
        </Button>
        <Center>
        <VStack spacing='-.5' mt="5" textAlign={"center"}>
          <Text>{message}</Text>
          <Link as={ReactLink} to={href} _hover={{color: 'white', fontWeight: 600}}><u>{redirect}</u></Link>
        </VStack>
        </Center>
        
      </form>
    </Box>
  );
}

export default SigninForm;
