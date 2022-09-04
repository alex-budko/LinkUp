import {
  Divider,
  Heading,
  TableCaption,
  TableContainer,
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
  const [users, setUsers] = useState([1, 2, 3, 4, 5]);

  console.log(users)
  useEffect(() => {
    get_users().then((_users) => {
      setUsers(_users);
    });
  }, []);

  return (
    <VStack spacing={"5"}>
      <Heading>Leaderboard</Heading>
      <Divider />
      <TableContainer
        rounded={"3xl"}
        shadow="dark-lg"
        color="gray.50"
        mb="5"
        p="8"
        minWidth={"70%"}
        bgColor={DARK_HIGHLIGHT_BLUE}
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
    </VStack>
  );
}

export default Leaderboard;
