import {
  getDropShadowValue,
  getRadiusValue,
  getSpaceValue,
  getTextShadowValue,
  getTypographyProperties,
} from '-designSystem'
import { style } from '-libs/vanilla-extract'

import { LAYERS } from '../../styles/layers.css'

const titleTypography = getTypographyProperties(`title6`)
const descriptionTypography = getTypographyProperties(`textSm`)

const LINE_HEIGHT = `1.2`
const ICON_SIZE = `calc(${titleTypography.fontSize} * ${LINE_HEIGHT})`
const POINT_SIZE = `14px`

export const SKILL_STYLES = {
  container: style({
    '@layer': {
      [LAYERS.base]: {
        display: `grid`,
        alignItems: `center`,
        alignContent: `start`,
        gridTemplateColumns: `auto 1fr auto`,
        gap: getSpaceValue(`s8`),

        position: `relative`,
      },
    },
  }),

  title: style({
    '@layer': {
      [LAYERS.base]: {
        gridColumn: `2`,
        gridRow: `1`,

        ...titleTypography,
        lineHeight: LINE_HEIGHT,
        textShadow: getTextShadowValue(`medium`),
        color: `#FFFFBD`,
        margin: 0,

        '@media': {
          [`(max-width: 500px)`]: {
            fontSize: titleTypography.fontSizeMobile,
          },
        },
      },
    },
  }),

  icon: style({
    '@layer': {
      [LAYERS.base]: {
        width: ICON_SIZE,
        height: ICON_SIZE,

        gridColumn: `1`,
        gridRow: `1 / span 2`,
        alignSelf: `start`,
        filter: `drop-shadow(${getDropShadowValue(`sharp`)})`,

        borderRadius: getRadiusValue(`r2`),
      },
    },
  }),

  progress: style({
    '@layer': {
      [LAYERS.base]: {
        gridColumn: `3`,
        gridRow: `1`,

        display: `flex`,
        gap: getSpaceValue(`s8`),
      },
    },
  }),

  progressPoint: style({
    '@layer': {
      [LAYERS.base]: {
        width: POINT_SIZE,
        height: POINT_SIZE,
        borderRadius: getRadiusValue(`r2`),

        background: `rgba(0,0,0, 0.25)`,
        borderColor: `rgba(0,0,0, 0.25)`,
        borderStyle: `outset`,
        borderWidth: `2px`,

        selectors: {
          '&[data-filled="true"]': {
            background: `gold`,
            borderColor: `gold`,
          },
        },
      },
    },
  }),

  description: style({
    '@layer': {
      [LAYERS.base]: {
        gridColumn: `2 / -1`,
        gridRow: `2`,

        fontStyle: `italic`,
        ...descriptionTypography,

        color: `#ADADAD`,
      },
    },
  }),
}
