import { getSpaceValue } from '-designSystem'
import { style } from '-libs/vanilla-extract'

const ICON_SIZE = `1rem`

export const CV_HEADER_LINE_STYLES = {
  headerLine: style({
    display: `flex`,
    alignItems: `center`,
    gap: getSpaceValue(`s8`),
  }),

  icon: style({
    width: ICON_SIZE,
    height: ICON_SIZE,
  }),
}
