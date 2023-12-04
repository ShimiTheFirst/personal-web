import { style } from '-libs/vanilla-extract'
import { LAYERS } from '-styles/layers.css'

export const button = style({
  '@layer': {
    [LAYERS.base]: {
      padding: 20,
    },
  },
})
