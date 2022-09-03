import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { signup } from "../authentication/signup";
import SigninForm from "../components/SigninForm";

function Signup() {
  const options = [
    {
      name: "Username",
      type: "text",
      id: "username",
      helperText: "",
    },
    {
      name: "Name",
      type: "text",
      id: "name",
      helperText: "",
    },
    {
      name: "Email",
      type: "email",
      id: "email",
      helperText: "We won't share your email with anyone else",
    },
    {
      name: "Password",
      type: "password",
      id: "password",
      helperText: "",
    },
  ];

  const title = 'Sign Up'

  const onSubmit = (e) => {
    const username = e.target[0].value
    const name = e.target[1].value
    const email = e.target[2].value
    const password = e.target[3].value

    signup(username, name, email, password).then((res)=> {
      console.log(res)
    })
  };

  return (
    <Box>
      <Center>
        <SigninForm title={title} options={options} onSubmit={onSubmit} />
      </Center>
    </Box>
  );
}

export default Signup;
