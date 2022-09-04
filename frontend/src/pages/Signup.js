import { Box, Center } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { signup } from "../authentication/signup";
import SigninForm from "../components/SigninForm";
import { UserContext } from "../context/User";

import { useNavigate } from "react-router-dom";

function Signup() {
  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(() => {});

  const options = [
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

  const title = "Sign Up";
  const redirect = "Log In";
  const message = "Already have an account?";
  const href = "/login";

  const onSubmit = (e) => {
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    signup(name, email, password).then((res) => {
      if (res.error) return;
      navigate("/login", { replace: true });
    });
  };

  return (
    <Box>
      <Center>
        <SigninForm
          title={title}
          redirect={redirect}
          href={href}
          message={message}
          options={options}
          onSubmit={onSubmit}
        />
      </Center>
    </Box>
  );
}

export default Signup;
