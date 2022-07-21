import AppBackground from './components/Background/Background'
import ImageLogo from './components/ImageLogo/ImageLogo'
import Text from './components/Text/Text'

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
