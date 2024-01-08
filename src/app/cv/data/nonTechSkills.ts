import bitbucket from '../../../../public/images/bitbucket.png'
import figma from '../../../../public/images/figma.webp'
import notion from '../../../../public/images/notion.png'
import youtrack from '../../../../public/images/youtrack.png'
import { TSkill } from './types'

const FIGMA: TSkill = {
  title: `Figma`,
  url: `https://www.figma.com/design-overview/`,
  progress: 4,
  icon: figma,
  iconDescription: `Figma logo`,
  description: `TODO`,
}

const NOTION: TSkill = {
  title: `Notion`,
  url: `https://www.notion.so/product`,
  progress: 5,
  icon: notion,
  iconDescription: `Notion logo`,
  description: `TODO`,
}

const YOUTRACK: TSkill = {
  title: `YouTrack`,
  url: `https://www.jetbrains.com/youtrack/`,
  progress: 4,
  icon: youtrack,
  iconDescription: `YouTrack logo`,
  description: `TODO`,
}

const BITBUCKET: TSkill = {
  title: `Bitbucket`,
  url: `https://bitbucket.org/`,
  progress: 4,
  icon: bitbucket,
  iconDescription: `Bitbucket logo`,
  description: `TODO`,
}

export const NON_TECH_SKILLS = {
  FIGMA,
  NOTION,
  YOUTRACK,
  BITBUCKET,
}
