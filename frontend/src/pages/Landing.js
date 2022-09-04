import {
  Box,
  Heading,
  Container,
  Text,
  Link,
  Button,
  Stack,
  VStack,
  Icon,
  useColorModeValue,
  createIcon,
  Image,
  Center
} from '@chakra-ui/react';

import {Link as ReactLink} from 'react-router-dom'

export default function Landing() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 10, md: 10 }}
          py={{ base: 20, md: "96px" }}>
          <Heading
            color="green.400"
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            SUSSI<br />
            <Text as={'span'} color={'gray.800'}>
            Service Uniting Students for Sustainable Initiatives
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Join and host community service events in your local area, without the hassle of dozens of Facebook posts and mall flyers. Interested in learning more? Click the button below to find local events.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              as={ReactLink}
              to='/explore'
              textColor="gray.100"
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
            </Button>

          </Stack>
        </Stack>
      </Container>
    </>
  );
}
