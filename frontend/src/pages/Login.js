import { Box, Center } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { login } from "../authentication/login";
import SigninForm from "../components/SigninForm";
import { UserContext } from "../context/User";

function Login() {

  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();

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
      if (res.error) return
      setUser(res)
      navigate('/', {replace: true})
    })
  };

  const title = "Log In";
  const redirect = 'Sign Up'
  const message = "Don't have an account?"
  const href = '/signup'

  return (
    <Box>
      <Center>
        <SigninForm options={options} redirect={redirect} href={href} message={message} title={title} onSubmit={onSubmit} />
      </Center>
    </Box>
  );
}

export default Login;
