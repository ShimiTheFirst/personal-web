import * as React from 'react'

import { SKILL_STYLES } from './Skill.css'

type TProps = RequiredChildren

/**
 * description of the skill, usually a short sentence or two
 */
export const SkillDescription: React.FC<TProps> = ({ children }) => {
  return <i className={SKILL_STYLES.description}>{children}</i>
}
