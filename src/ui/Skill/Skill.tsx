import * as React from 'react'

import { SKILL_STYLES } from './Skill.css'

type TProps = RequiredChildren

/**
 * skill section container
 */
export const Skill: React.FC<TProps> = ({ children }) => {
  return <article className={SKILL_STYLES.container}>{children}</article>
}
