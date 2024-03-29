import {
  getDurationValue,
  getRadiusValue,
  getSpaceValue,
  getTypographyProperties,
} from '-designSystem'
import { style } from '-libs/vanilla-extract'
import { LAYERS } from '-styles/layers.css'

import { OUTLINE_STYLES } from '../styles/outline.css'

const linkTypography = getTypographyProperties(`navItem`)

const NAV_ITEM_BASE_STYLES = style({
  '@layer': {
    [LAYERS.base]: {
      ...linkTypography,
      padding: `${getSpaceValue(`s8`)} ${getSpaceValue(`s16`)}`,
      position: `relative`,

      // outline related styles
      transition: `all ${getDurationValue(`superFast`)}`,
      borderRadius: getRadiusValue(`r2`),

      '::after': {
        content: ``,
        background: `#08B2E3`,

        position: `absolute`,
        left: 0,
        width: `100%`,

        bottom: getSpaceValue(`s4`),
        height: `2px`,

        transition: `all ${getDurationValue(`fast`)}`,
        borderRadius: getRadiusValue(`pill`),

        // hidden until hover
        transform: `scaleX(0)`,
      },

      selectors: {
        '&[data-hovered=true]::after': {
          transform: `scaleX(1)`,
        },
      },

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

        '@media': {
          [`print`]: {
            display: `none`,
          },
        },
      },
    },
  }),

  item: style([OUTLINE_STYLES, NAV_ITEM_BASE_STYLES]),

  activeItem: style({
    color: `#08B2E3`,
  }),
}
