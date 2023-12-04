import { getSpaceValue, HEADER_HEIGHT, MAX_CONTENT_WIDTH } from '-designSystem'
import { style } from '-libs/vanilla-extract'
import { LAYERS } from '-styles/layers.css'

export const HEADER_STYLES = {
  container: style({
    '@layer': {
      [LAYERS.base]: {
        // TODO consider box shadow?
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
      },
    },
  }),
}
