import * as React from 'react'

import { Button } from '-ui/Button'
import { Image } from '-ui/Image'
import { ScreenContent } from '-ui/Screen'
import { Skill } from '-ui/Skill'

import download from '../../../public/images/download.png'
import { TECH_SKILLS } from './data/techSkills'
import { CV_PAGE_STYLES } from './page.css'

const CV: React.FC = () => {
  return (
    <ScreenContent>
      <div className={CV_PAGE_STYLES.headingContainer}>
        <h1 className={CV_PAGE_STYLES.h1}>Curriculum vitae</h1>
        <Button>
          <Image src={download} className={CV_PAGE_STYLES.downloadIcon} alt={`Download icon`} />
        </Button>
      </div>

      <h2 className={CV_PAGE_STYLES.h2}>Summary</h2>
      <h2 className={CV_PAGE_STYLES.h2}>About me</h2>
      <h2 className={CV_PAGE_STYLES.h2}>Skills</h2>

      <p>Some text</p>

      <h3 className={CV_PAGE_STYLES.h3}>Technology</h3>

      {TECH_SKILLS.map((category) => (
        <React.Fragment key={category.title}>
          <h4 className={CV_PAGE_STYLES.h4}>{category.title}</h4>

          <div className={CV_PAGE_STYLES.skillsGrid}>
            {category.skills.map((skill) => (
              <Skill.Root key={skill.title}>
                <Skill.Title>{skill.title}</Skill.Title>
                <Skill.Progress value={skill.progress} />
                <Skill.Icon src={skill.icon} alt={skill.iconDescription} />
                <Skill.Description>{skill.description}</Skill.Description>
              </Skill.Root>
            ))}
          </div>
        </React.Fragment>
      ))}

      <h3 className={CV_PAGE_STYLES.h3}>Non-tech skills</h3>
      <h2 className={CV_PAGE_STYLES.h2}>Timeline</h2>
      <h3 className={CV_PAGE_STYLES.h3}>Work experience</h3>
      <h3 className={CV_PAGE_STYLES.h3}>School</h3>
    </ScreenContent>
  )
}

export default CV
