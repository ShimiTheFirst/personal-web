import * as React from 'react'

import { Image } from '-ui/Image'

import { SKILL_STYLES } from './Skill.css'

type TProps = NoChildren & OmitSafe<PropsOf<typeof Image>, 'className'>

/**
 * icon or image related to of the skill
 */
export const SkillIcon: React.FC<TProps> = ({ alt, ...props }) => {
  // alt destructured to please eslint accessiblity rule
  return <Image className={SKILL_STYLES.icon} alt={alt} {...props} />
}
