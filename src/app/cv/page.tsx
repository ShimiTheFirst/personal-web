import { getTypographyProperties } from '-designSystem'
import { ScreenContent } from '-ui/Screen'

const CV: React.FC = () => {
  return (
    <ScreenContent>
      <h1 style={getTypographyProperties(`display1`)}>CV</h1>
    </ScreenContent>
  )
}

export default CV
