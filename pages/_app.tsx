// import '../styles/globals.css'
import '../styles/Shadow.css'

import React from 'react'
import { ChakraProvider, Flex, extendTheme } from '@chakra-ui/react'
import AppProvider from '../other/AppContext'
import Head from 'next/head'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#292a2d",
        color: '#a9a9b3',
      },
    }),
  },

})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap" rel="stylesheet"/>
      </Head>
      <AppProvider>
        <ChakraProvider theme={theme}>
          <Flex justifyContent='center' minH='100vh' fontFamily={'Ubuntu'}>
            <Flex maxW={'95%'} justifyContent='center' minH='100vh'>
              <Component {...pageProps} />
            </Flex>
          </Flex>
        </ChakraProvider>
      </AppProvider>
    </>
  )
}

export default MyApp
