import * as React from 'react'

import { SKILL_STYLES } from './Skill.css'

type TProps = RequiredChildren

/**
 * name of the skill rendered as h6
 */
export const SkillTitle: React.FC<TProps> = ({ children }) => {
  return <h6 className={SKILL_STYLES.title}>{children}</h6>
}
