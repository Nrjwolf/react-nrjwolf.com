import AppProvider from './context/AppContext'
import Navigation from './utils/Navigation/Navigation'
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
    <ChakraProvider>
      <AppProvider>
        <Navigation />
      </AppProvider>
    </ChakraProvider>
  )
}
