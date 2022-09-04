import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

const testimonials = [
  {
    name: 'Alex B.',
    role: 'UPenn Engineering Student In Freshman Year',
    content:
      'Alex here! I am a front-end engineer currently in my freshman year at Penn. I look forward to coding some more websites.',
    avatar:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Kevin Y.',
    role: 'Newton South High School Student In 11th Grade',
    content:
      "Hello everyone! I really enjoyed this hackathon though it is not my first one. Hopefully I'll have the chance to come back some time.",
    avatar:
      'https://media-exp1.licdn.com/dms/image/C4E03AQGeo0uMUwSpQA/profile-displayphoto-shrink_800_800/0/1609907461816?e=1668038400&v=beta&t=HRan6GCf78MtJicjkFjO9AqJYxQlj_wL_4xOEfCS8_s',
  },
  {
    name: 'Tom N.',
    role: 'UPenn Wharton Student In Freshman Year',
    content:
      "Hello everyone! My name is Tom, and this is my first and probably last time taking part in a hackathon. Hopefully, this website will work properly, but even if it would not, I had fun with our team. Cheers!",
    avatar:
      'https://media-exp1.licdn.com/dms/image/C4E03AQGXgyF3jN7eMQ/profile-displayphoto-shrink_400_400/0/1660131688776?e=1668038400&v=beta&t=nufik3wU6lVWiJQue5KjlmUx-jweWWrLq9NFa1fI7Zc',
  },
  {
    name: 'Davis C.',
    role: "St. George's High School Student In 12th Grade",
    content:
      'Hi everybody! I am Davis and I have really enjoyed this hackathon experience from pulling an all-nighter to midnight karaoke. I look forward to creating more websites and learning more about backend development in the future!',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C5603AQGr_7oS1mzlgA/profile-displayphoto-shrink_800_800/0/1661126814518?e=1668038400&v=beta&t=shfz3cFmh8_RPuKncnrOFQMT6jIrhfC_8plewjQbzpQ',
  },
];

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

function TestimonialCard(props) {
  const { name, role, content, avatar, index } = props;
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      >
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}>
        <chakra.p
          fontWeight={'medium'}
          fontSize={'15px'}
          pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontWeight={'bold'} fontSize={14}>
          {name}
          <chakra.span
            fontWeight={'medium'}
            color={'gray.500'}>
            {' '}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={'80px'}
        width={'80px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      />
    </Flex>
  );
}

export default function About() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}>
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h3
          fontWeight={'bold'}
          fontSize={20}
          textTransform={'uppercase'}
          color={'black.400'}>
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.700')}>
          Learn about the team behind{' '}
          <chakra.strong color={useColorModeValue('green.400', 'green.400')}>
             SUSSI
          </chakra.strong>
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'70%'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.500', 'gray.400')}>
          See how we can help in the sustainability movement with{' '}
          <chakra.strong color={useColorModeValue('green.400', 'green.400')}>
            millions
          </chakra.strong>{' '}
          of high schoolers, college students, and other volunteers.
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={'20'}
        mt={16}
        mx={'auto'}>
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <Box minH="20">
      </Box>
    </Flex>
  );
}