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
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { get_event } from "../actions/get_event";
import { get_user } from "../actions/get_user";
import { register } from "../actions/register";
import { UserContext } from "../context/User";
import { DARK_HIGHLIGHT_BLUE, LIGHT_HIGHLIGHT_BLUE } from "../theme/theme";

export default function Event() {
  const { eid } = useParams();
  const navigate = useNavigate();

  const [registering, setRegistering] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [org, setOrg] = useState(null)

  const [event, setEvent] = useState({
    title: "",
  });

  useEffect(() => {
    get_event(eid).then((data) => {
      setEvent(data);
      get_user(data.organizer).then((res)=> {
        setOrg(res.name)
      })
    });
  }, []);

  const onClick = (e) => {
    setRegistering(true);
    if (user.name) {
      setTimeout(() => {
        register(user.uid, eid);
        navigate("/");
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <>
      <Center>
        <VStack
          spacing="8"
          width="50vw"
          color={"black"}
          align={"center"}
          justifyContent={"center"}
          py={12}
          rounded={"3xl"}
          bgColor="blue.100"
          shadow="dark-lg"
        >
          <Heading>{event.title}</Heading>
          <Heading size="md">
            By <i>{org ? org : 'NAN'}</i>
          </Heading>
          <Image
            rounded="xl"
            width="34vw"
            src={
              "https://www.signupgenius.com/cms/images/groups/beach-clean-up-tips-ideas-article-600x400.jpg"
            }
          />
          <Box
            spacing="3"
            width="34vw"
            p="5"
            textAlign="left"
            bgColor="blue.700"
            rounded="2xl"
            color="white"
          >
            <Heading>Description</Heading>
            <Text>{event.description}</Text>
          </Box>
          <HStack>
            <Box
              spacing="3"
              width="17vw"
              minH="125px"
              p="5"
              textAlign="left"
              bgColor="blue.700"
              rounded="2xl"
              color="white"
            >
              <Heading size={["sm", "md"]}>Location</Heading>
              <Text>{event.location} </Text>
            </Box>
            <Box
              spacing="3"
              width="17vw"
              minH="125px"
              p="5"
              textAlign="left"
              bgColor="blue.700"
              rounded="2xl"
              color="white"
            >
              <Heading size={["sm", "md"]}>Members</Heading>
              <Text>{event.attendees_count} </Text>
            </Box>
          </HStack>

          <Button
            onClick={(e) => {
              onClick(e);
            }}
            textAlign="center"
            bg={DARK_HIGHLIGHT_BLUE}
            rounded={"2xl"}
            width={"25%"}
            color="white"
            _hover={{
              bg: 'blue.600',
            }}
          >
            {registering ? <Spinner /> : "Register"}
          </Button>
        </VStack>
      </Center>
      <Box minH="20">
      </Box>
    </>
  );
}
