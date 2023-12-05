import { getBoxShadowValue, getDurationValue, getRadiusValue, getSpaceValue } from '-designSystem'
import { style } from '-libs/vanilla-extract'
import { LAYERS } from '-styles/layers.css'

import { OUTLINE_STYLES } from '../styles/outline.css'

const GRADIENT_ANGLE = `135deg`
// TODO add multiple color variants
// TODO move colors to DS
const COLORS = {
  light: `rgb(238, 99, 82)`,
  dark: `rgb(212, 28, 6)`,
  borderLight: `rgb(240, 163, 155)`,
  borderMedium: `rgb(220, 101, 86)`,
  borderDark: `rgb(123, 34, 23)`,
}

const BUTTON_BASE_STYLES = style({
  '@layer': {
    [LAYERS.base]: {
      background: [
        COLORS.light,
        `linear-gradient(${GRADIENT_ANGLE}, ${COLORS.light} 0%, ${COLORS.dark} 100%)`,
      ],

      borderStyle: `solid`,
      borderWidth: `4px`,
      borderRadius: getRadiusValue(`r8`),
      borderLeftColor: COLORS.borderLight,
      borderTopColor: COLORS.borderLight,
      borderRightColor: COLORS.borderDark,
      borderBottomColor: COLORS.borderDark,

      padding: `${getSpaceValue(`s16`)} ${getSpaceValue(`s24`)}`,
      cursor: `pointer`,
      transition: `all ${getDurationValue(`superFast`)}`,

      ':hover': {
        background: [
          COLORS.dark,
          `linear-gradient(${GRADIENT_ANGLE}, ${COLORS.dark} 0%, ${COLORS.dark} 100%)`,
        ],

        borderLeftColor: COLORS.borderMedium,
        borderTopColor: COLORS.borderMedium,

        boxShadow: getBoxShadowValue(`medium`),
      },
    },
  },
})

export const BUTTON_STYLES = {
  button: style([OUTLINE_STYLES, BUTTON_BASE_STYLES]),
}
