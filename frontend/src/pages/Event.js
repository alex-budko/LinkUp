import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { register } from "../actions/register";
import { UserContext } from "../context/User";
import { DARK_HIGHLIGHT_BLUE, LIGHT_HIGHLIGHT_BLUE } from "../theme/theme";

export default function Event() {
  const { eid } = useParams();
  const navigate = useNavigate();

  const [registering, setRegistering] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const [event, setEvent] = useState({
    title: "Beach clean-up",
    organizer: "Tom Nepala",
    availability: "12/50",
    location: "Prague",
    description:
      "PraguePraguePraguePraguePraguePraguePr aguePraguePraguePraguePraguePraguePraguePraguePrague PraguePraguePraguePraguePraguePraguePraguePrague",
    start: "8:00PM, June 19th",
    tags: ["#CleanUp", "#CleanUp", "#CleanUp"],
    picture:
      "https://www.signupgenius.com/cms/images/groups/beach-clean-up-tips-ideas-article-600x400.jpg",
  });

  const onClick = (e) => {
    setRegistering(true);
    if (user.name) {
      setTimeout(() => {
        register(user.uid, eid);
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
      <VStack
        spacing="8"
        width="50vw"
        color={"black"}
        align={"center"}
        justifyContent={"center"}
        py={12}
        rounded={"3xl"}
        bgColor={LIGHT_HIGHLIGHT_BLUE}
        shadow="dark-lg"
      >
        <Heading>{event.title}</Heading>
        <Heading size="md">
          By <i> {event.organizer}</i>
        </Heading>
        <Image rounded="xl" width="34vw" src={event.picture} />
        <Box
          spacing="3"
          width="34vw"
          p="5"
          textAlign="left"
          bgColor={DARK_HIGHLIGHT_BLUE}
          rounded="2xl"
          color="white"
        >
          <Heading>Description</Heading>
          <Text>{event.description}</Text>
        </Box>
        <HStack>
        <Box
            spacing="3"
            width='11vw'
            minH='125px'

            p="5"
            textAlign="left"
            bgColor={DARK_HIGHLIGHT_BLUE}
            rounded="2xl"
            color="white"
          >
            <Heading size={['sm', 'md']}>Location</Heading>
            <Text>{event.location} </Text>
          </Box>
          <Box
            spacing="3"
            width='11vw'
            minH='125px'

            p="5"
            textAlign="left"
            bgColor={DARK_HIGHLIGHT_BLUE}
            rounded="2xl"
            color="white"
          >
            <Heading size={['sm', 'md']}>Members</Heading>
            <Text>{event.availability} </Text>
          </Box>
          
          <Box
            spacing="3"
            width='11vw'
            minH='125px'
            p="5"
            textAlign="left"
            bgColor={DARK_HIGHLIGHT_BLUE}
            rounded="2xl"
            color="white"
          >
            <Heading size={['sm', 'md']}>Tags</Heading>
            <Text>{event.availability} </Text>
          </Box>
        </HStack>

        <Button
          onClick={(e) => {
            onClick(e);
          }}
          textAlign="center"
          rounded={"2xl"}
          width={"25%"}
        >
          {registering ? <Spinner /> : "Register"}
        </Button>
      </VStack>
    </Center>
  );
}
