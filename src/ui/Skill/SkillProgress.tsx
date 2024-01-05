'use client'

import * as React from 'react'
import { Meter } from 'react-aria-components'

import { SKILL_STYLES } from './Skill.css'

// ordered this way to fill the points from right to left
const POINTS = [5, 4, 3, 2, 1] as const
const MAX = Math.max(...POINTS)

type TProps = NoChildren & {
  value: 0 | (typeof POINTS)[number]
}

/**
 * renders a current level of skill
 * represented by number of highlighted points (out of 5)
 */
export const SkillProgress: React.FC<TProps> = ({ value }) => {
  return (
    <Meter
      minValue={0}
      value={value}
      maxValue={MAX}
      className={SKILL_STYLES.progress}
      valueLabel={`${value} out of ${MAX}`}
    >
      {POINTS.map((point) => (
        <div key={point} data-filled={point <= value} className={SKILL_STYLES.progressPoint} />
      ))}
    </Meter>
  )
}
