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
} from "@chakra-ui/react";

function SigninForm({ options, onSubmit, title }) {
  return (
    <Box p="5" bgColor="green.600" rounded="3xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <Center>
          <Heading size='md'>{title}</Heading>
        </Center>

        {options.map((option, index) => {
          return (
            <FormControl key={index} id={options.id}>
              <FormLabel>{option.name}</FormLabel>
              <Input required bgColor={'white'} color='black' type={option.type} />
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
      </form>
    </Box>
  );
}

export default SigninForm;
