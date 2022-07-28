import AppProvider  from './context/AppContext'
import Home from "./screens/Home/Home"

export default function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}
