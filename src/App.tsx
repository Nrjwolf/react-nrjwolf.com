import AppProvider from './context/AppContext'
import Home from "./screens/Home/Home"
import Navigation from './utils/Navigation/Navigation'

export default function App() {
  return (
    <AppProvider>
      <Navigation>
      </Navigation>
    </AppProvider>
  )
}
