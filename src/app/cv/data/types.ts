import { StaticImageData } from 'next/image'

/**
 * shape of a tech or non-tech skill
 * used throughout the CV
 */
export type TSkill = {
  title: string
  description: string
  icon: StaticImageData
  iconDescription: string
  progress: 0 | 1 | 2 | 3 | 4 | 5
  url: string
}
