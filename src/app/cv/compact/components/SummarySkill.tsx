import * as React from 'react'

import { Image } from '-ui/Image'

import { TSkill } from '../../data/types'
import { CV_SUMMARY_SKILL_STYLES } from './SummarySkill.css'

type TProps = NoChildren & {
  skill: TSkill
}

const STYLES = CV_SUMMARY_SKILL_STYLES

/**
 * skill displayed in the summary section of the compact CV
 * as a label with an icon
 */
export const SummarySkill: React.FC<TProps> = ({ skill }) => {
  return (
    <div className={STYLES.container}>
      <Image src={skill.icon} alt={skill.iconDescription} className={STYLES.icon} />
      <p className={STYLES.label}>{skill.title}</p>
    </div>
  )
}
