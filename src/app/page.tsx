import { APP_CONFIG } from '-config/app.config'
import { ButtonLink } from '-ui/Button'
import { Image } from '-ui/Image'
import { ScreenContent } from '-ui/Screen'

import developer from '../../public/images/developer.png'
import emailSign from '../../public/images/email.png'
import githubLogo from '../../public/images/github.png'
import linkedinLogo from '../../public/images/linkedin.png'
import { HOME_PAGE_STYLES } from './page.css'

const Home: React.FC = () => {
  return (
    <ScreenContent>
      <div className={HOME_PAGE_STYLES.content}>
        <div>
          <h1 className={HOME_PAGE_STYLES.display}>Martin Štěpánek</h1>
          <h2 className={HOME_PAGE_STYLES.subDisplay}>Frontend developer</h2>

          <p className={HOME_PAGE_STYLES.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a dui ut lacus malesuada
            lacinia ut a lacus. Nunc vitae condimentum nunc. Cras ultrices lacinia lorem, ac
            suscipit ex tristique quis.
          </p>

          <div className={HOME_PAGE_STYLES.buttonContainer}>
            <ButtonLink href={APP_CONFIG.linkedinUrl} target={`_blank`}>
              <Image
                priority
                src={linkedinLogo}
                alt={`LinkedIn logo`}
                className={HOME_PAGE_STYLES.icon}
              />
            </ButtonLink>
            <ButtonLink href={APP_CONFIG.githubUrl} target={`_blank`}>
              <Image
                priority
                src={githubLogo}
                alt={`GitHub logo`}
                className={HOME_PAGE_STYLES.icon}
              />
            </ButtonLink>
            <ButtonLink href={APP_CONFIG.mailUrl}>
              <Image
                priority
                src={emailSign}
                alt={`Email sign`}
                className={HOME_PAGE_STYLES.icon}
              />
            </ButtonLink>
          </div>
        </div>

        <Image priority src={developer} alt={`A sticker of a dev`} />
      </div>
    </ScreenContent>
  )
}

export default Home
