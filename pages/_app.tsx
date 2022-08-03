import '../styles/globals.css'
import '../styles/Shadow.css'

import React from 'react'
import { ChakraProvider, Flex, Box } from '@chakra-ui/react'
import AppProvider from '../other/AppContext'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ChakraProvider>
        <Flex justifyContent='center' minH='100vh' bgColor='#292a2d' color='#a9a9b3'>
          <Component {...pageProps} />
        </Flex>
      </ChakraProvider>
    </AppProvider>
  )
}

export default MyApp
