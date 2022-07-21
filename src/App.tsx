import AppBackground from "./components/app/Background/Background"
import ImageLogo from "./components/app/ImageLogo/ImageLogo"
import Text from "./components/app/Text/Text"

export default function App() {
  return (
    <AppBackground>
      <ImageLogo src='nrjwolf-logo.png' width={100} />
      <Text style='light'>
        IT Developer
      </Text>
    </AppBackground>
  )
}
