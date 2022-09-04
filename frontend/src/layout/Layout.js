import Navbar from './Navbar'

import {Box, LinkBox} from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
        <Navbar />
        <Box  minH='90vh'
        backgroundImage={require("../images/jas.gif")} css={{
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'

        }}
        >{children}</Box>
    </>
  )
}