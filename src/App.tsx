import AppProvider from './context/AppContext'
import Home from "./screens/Home/Home"
import Navigation from './utils/Navigation/Navigation'
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
    <ChakraProvider>
      <AppProvider>
        <Navigation>
        </Navigation>
      </AppProvider>
    </ChakraProvider>
  )
}
