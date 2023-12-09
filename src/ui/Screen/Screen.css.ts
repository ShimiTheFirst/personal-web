import { getSpaceValue, MAX_CONTENT_WIDTH } from '-designSystem'
import { style } from '-libs/vanilla-extract'
import { LAYERS } from '-styles/layers.css'

export const SCREEN_STYLES = {
  content: style({
    '@layer': {
      [LAYERS.base]: {
        flexGrow: 1,
        margin: `0 auto`,
        width: `100%`,
        maxWidth: MAX_CONTENT_WIDTH,
        padding: `0 ${getSpaceValue(`s32`)}`,
      },
    },
  }),
}
