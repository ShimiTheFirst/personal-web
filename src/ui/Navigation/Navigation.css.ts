import { getSpaceValue } from '-designSystem'
import { style } from '-libs/vanilla-extract'
import { LAYERS } from '-styles/layers.css'

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
  item: style({
    '@layer': {
      [LAYERS.base]: {
        padding: `${getSpaceValue(`s8`)} ${getSpaceValue(`s16`)}`,
      },
    },
  }),
}
