import { Box, Center, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Register() {
  const { eid } = useParams();

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
        <Image
          rounded="xl"
          size="2xl"
          src={event.picture}
        />
      </Box>
    </Center>
  );
}
