import {
  Divider,
  Heading,
  TableCaption,
  TableContainer,
  Box,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Table,
  VStack,
  Avatar,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { get_users } from "../actions/get_users";
import { DARK_HIGHLIGHT_BLUE } from "../theme/theme";

function Leaderboard() {
  const [users, setUsers] = useState([]);

  console.log(users)
  useEffect(() => {
    get_users().then((_users) => {
      setUsers(_users);
    });
  }, []);

  return (
    <VStack spacing={"5"} mt="60px">
      <Heading color="black">Leaderboard</Heading>
      <Divider />
      <TableContainer
        rounded={"3xl"}
        shadow="dark-lg"
        // color="gray.200"
        mb="5"
        p="8"
        minWidth={"70%"}
        bgColor={'gray.100'}
      >
        <Table >
          <Thead> 
            <Tr>
              <Th>Rank</Th>
              <Th>Name</Th>
              <Th>Volunteer Hours</Th>
              <Th>Profile</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, i) => {
              return (
                <Tr>
                  <Td>{i + 1}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.hours}</Td>
                  <Td>
                    <Avatar
                      as={Link}
                      to={`/profile/${user.uid}`}
                      name={user.name}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        
      </TableContainer>
      <Box minH="20">
      </Box>
    </VStack>
  );
}

export default Leaderboard;
