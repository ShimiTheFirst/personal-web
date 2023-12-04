import { Image } from '-ui/Image'
import { ScreenContent } from '-ui/Screen'

import developer from '../../public/images/developer.png'
import { HOME_PAGE_STYLES } from './page.css'

const IMAGE_SIZE = 600

const Home: React.FC = () => {
  return (
    <ScreenContent className={HOME_PAGE_STYLES.content}>
      <div>
        <h1 className={HOME_PAGE_STYLES.display}>Martin Štěpánek</h1>
        <h2 className={HOME_PAGE_STYLES.subDisplay}>Frontend developer</h2>
        <p className={HOME_PAGE_STYLES.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a dui ut lacus malesuada
          lacinia ut a lacus. Nunc vitae condimentum nunc. Cras ultrices lacinia lorem, ac suscipit
          ex tristique quis.
        </p>
      </div>
      <Image
        src={developer}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        alt={`A sticker of a dev`}
        priority
      />
    </ScreenContent>
  )
}

export default Home
