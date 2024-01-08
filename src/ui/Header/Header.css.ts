import {
  getBoxShadowValue,
  getDurationValue,
  getSpaceValue,
  HEADER_HEIGHT,
  MAX_CONTENT_WIDTH,
} from '-designSystem'
import { style } from '-libs/vanilla-extract'
import { LAYERS } from '-styles/layers.css'

export const HEADER_STYLES = {
  container: style({
    '@layer': {
      [LAYERS.base]: {
        backgroundColor: '#2E1C2B',

        position: `sticky`,
        top: `-1px`, // needed for the intersection observer to register stuck state
        zIndex: 1,

        transition: `box-shadow ${getDurationValue(`fast`)}`,

        selectors: {
          // attribute toggled by the intersection observer
          '&[data-stuck]': {
            boxShadow: getBoxShadowValue(`medium`),
          },
        },
      },
    },
  }),
  header: style({
    '@layer': {
      [LAYERS.base]: {
        maxWidth: MAX_CONTENT_WIDTH,
        margin: `0 auto`,
        minHeight: HEADER_HEIGHT,
        display: `flex`,
        alignItems: `center`,
        padding: `0 ${getSpaceValue(`s32`)}`,

        '@media': {
          [`print`]: {
            minHeight: `0px`,
            padding: `0`,
          },
        },
      },
    },
  }),
}
