import { getDurationValue, getSpaceValue, getTypographyProperties } from '-designSystem'
import { style } from '-libs/vanilla-extract'
import { LAYERS } from '-styles/layers.css'

import { OUTLINE_STYLES } from '../styles/outline.css'

const linkTypography = getTypographyProperties(`textLg`)

const NAV_ITEM_BASE_STYLES = style({
  '@layer': {
    [LAYERS.base]: {
      ...linkTypography,
      padding: `${getSpaceValue(`s8`)} ${getSpaceValue(`s16`)}`,

      // outline related styles
      transition: `all ${getDurationValue(`superFast`)}`,
      borderRadius: `2px`,

      '@media': {
        [`(max-width: 600px)`]: {
          fontSize: linkTypography.fontSizeMobile,
        },
      },
    },
  },
})

export const NAVIGATION_STYLES = {
  container: style({
    '@layer': {
      [LAYERS.base]: {
        display: `flex`,
        alignItems: `center`,
        gap: getSpaceValue(`s8`),
      },
    },
  }),

  item: style([OUTLINE_STYLES, NAV_ITEM_BASE_STYLES]),
}
