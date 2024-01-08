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
          <hgroup>
            <h1 className={HOME_PAGE_STYLES.display}>Martin Štěpánek</h1>
            <h2 className={HOME_PAGE_STYLES.subDisplay}>Frontend developer</h2>
          </hgroup>

          <p className={HOME_PAGE_STYLES.body}>
            Hi, I’m an enthusiastic frontend developer from the Czech Republic who enjoys creating
            meaningful things that make someone’s life a bit better – starting with people around
            me.
          </p>

          <div className={HOME_PAGE_STYLES.buttonContainer}>
            <ButtonLink href={APP_CONFIG.linkedInProfileUrl} target={`_blank`}>
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
            <ButtonLink href={`mailto:${APP_CONFIG.email}`}>
              <Image
                priority
                src={emailSign}
                alt={`Email sign`}
                className={HOME_PAGE_STYLES.icon}
              />
            </ButtonLink>
          </div>
        </div>

        <Image
          priority
          src={developer}
          alt={`A sticker of a dev`}
          className={HOME_PAGE_STYLES.image}
        />
      </div>
    </ScreenContent>
  )
}

export default Home
