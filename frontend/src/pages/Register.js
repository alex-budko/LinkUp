import { Box, Button, Center, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { register } from "../actions/register";
import { UserContext } from "../context/User";

export default function Register() {
  const { eid } = useParams();
  const navigate = useNavigate();

  const [registering, setRegistering] = useState(false)
  const { user, setUser } = useContext(UserContext);

  const [event, setEvent] = useState({
    title: "Beach clean-up",
    organizer: "Tom Nepala",
    availability: "12/50",
    location: "Prague",
    start: "8:00PM, June 19th",
    tags: ["#CleanUp", "#CleanUp", "#CleanUp"],
    picture:
      "https://www.signupgenius.com/cms/images/groups/beach-clean-up-tips-ideas-article-600x400.jpg",
  });

  const onClick = (e) => {
    setRegistering(true)
    if (user.name) {
      setTimeout(() => {
        register(user.uid, eid)
        navigate("/success");
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <Center>
      <Box
        width="50vw"
        align={"center"}
        justifyContent={"center"}
        py={12}
        rounded={"lg"}
        bgColor="purple.300"
        shadow="dark-lg"
      >
        <Heading>Register For {event.title}</Heading>
        <Heading size="md">By {event.organizer}</Heading>
        <Image rounded="xl" size="2xl" src={event.picture} />
        <Text>Members: {event.availability} </Text>
        <Button
          onClick={(e) => {
            onClick(e);
          }}
          textAlign='center'
          width={'50%'}
        >
         {registering ? <Spinner /> : 'Register' }
        </Button>
      </Box>
    </Center>
  );
}
