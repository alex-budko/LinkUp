import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { login } from "../authentication/login";
import SigninForm from "../components/SigninForm";

function Login() {
  const options = [
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
  const onSubmit = (e) => {
    const email = e.target[0].value
    const password = e.target[1].value

    login(email, password).then((res)=> {
      console.log(res)
    })

  };

  const title = "Log In";

  return (
    <Box>
      <Center>
        <SigninForm options={options} title={title} onSubmit={onSubmit} />
      </Center>
    </Box>
  );
}

export default Login;
