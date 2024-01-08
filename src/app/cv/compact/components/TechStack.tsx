import * as React from 'react'

import { Image } from '-ui/Image'

import { TSkill } from '../../data/types'
import { CV_TECH_STACK_STYLES } from './TechStack.css'

type TLineProps = RequiredChildren & {
  label: string
}

const STYLES = CV_TECH_STACK_STYLES

/**
 * line with grouped skills in a tech stack section of the compact CV
 */
export const TechStackLine: React.FC<TLineProps> = ({ label, children }) => {
  return (
    <div className={STYLES.line}>
      {label}
      {children}
    </div>
  )
}

type TSkillProps = NoChildren & {
  skill: TSkill
}

/**
 * skill icon in a tech stack section of the compact CV
 */
export const TechStackSkill: React.FC<TSkillProps> = ({ skill }) => {
  return (
    <a href={skill.url} target={`_blank`}>
      <Image
        src={skill.icon}
        title={skill.title}
        alt={skill.iconDescription}
        className={STYLES.icon}
      />
    </a>
  )
}
