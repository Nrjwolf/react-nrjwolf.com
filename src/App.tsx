import { useContext } from "react"
import AppProveder  from './context/AppContext'
import Home from "./screens/Home/Home"

export default function App() {
  return (
    <AppProveder>
      <Home />
    </AppProveder>
  )
}
