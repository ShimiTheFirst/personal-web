import { getFontWeightValue, getSpaceValue } from '-designSystem'
import { style } from '-libs/vanilla-extract'

const ICON_SIZE = `2.5rem`

export const CV_SUMMARY_SKILL_STYLES = {
  container: style({
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    gap: getSpaceValue(`s8`),
  }),

  icon: style({
    width: ICON_SIZE,
    height: ICON_SIZE,
  }),

  label: style({
    fontWeight: getFontWeightValue(`medium`),
    margin: 0,
  }),
}
