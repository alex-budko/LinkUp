import {
  Avatar,
  Box,
  Text,
  Wrap,
  WrapItem,
  VStack,
  Center,
  Heading,
  Flex,
  Image,
  Spacer,
  Button,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { get_certificate } from "../actions/get_certificate";
import { get_user } from "../actions/get_user";
import { UserContext } from "../context/User";

function Profile() {
  const { user } = useContext(UserContext);
  const [_user, setUser] = useState({
    email: "",
  });
  const { uid } = useParams();
  useEffect(() => {
    get_user(uid).then((data) => {
      // console.log(data)
      setUser(data);
    });
  }, []);

  return (
    <>
      {_user.email !== "" && (
        <Flex>
          <Spacer />
          <VStack
            minW="350px"
            bgColor="gray.700"
            minH="550px"
            shadow="dark-lg"
            rounded="3xl"
            p="5"
            maxW="350px"
            justify={"center"}
            mt={"5"}
          >
            <Box style={{ marginTop: "15px" }}>
              <Center>
                <Avatar size="2xl" name={_user.name} />
              </Center>
              <VStack mt="5">
                <Heading color="white">{_user.name}</Heading>
                <Text color="white">{_user.email}</Text>
              </VStack>
            </Box>

            <VStack
              style={{ align: "center", marginLeft: "10px" }}
              alignItems="center"
            >
              <Box
                rounded="2xl"
                textAlign="center"
                p="2"
                bgColor="yellow.500"
                style={{ marginTop: "15px" }}
              >
                {_user.hours} Total Hours
              </Box>
            </VStack>
            {user.name === _user.name && (
              <Box>
                <Button
                  onClick={() => {
                    get_certificate(user.uid).then((data) => {
                      // console.log(data)
                      const img = atob(data.image);
                      const link = document.createElement("a");
                      link.style.display = "none";

                      link.href = URL.createObjectURL(
                        new Blob([img], { type: "image/png" })
                      );

                      link.download = `cetificate.png`;

                      document.body.appendChild(link);

                      link.click();

                      URL.revokeObjectURL(link.href);
                      link.parentNode.removeChild(link);
                    });
                  }}
                >
                  Get Certificate
                </Button>
              </Box>
            )}
          </VStack>

          <Spacer />
        </Flex>
      )}{" "}
    </>
  );
}

export default Profile;
