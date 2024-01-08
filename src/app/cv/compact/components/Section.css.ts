import { getFontSizeValue, getFontWeightValue, getSpaceValue } from '-designSystem'
import { style } from '-libs/vanilla-extract'

export const CV_SECTION_STYLES = {
  title: style({
    fontSize: getFontSizeValue(`sp4`),
    fontWeight: getFontWeightValue(`boldSemi`),
    lineHeight: 1.2,
    margin: 0,
    marginBottom: getSpaceValue(`s4`),
  }),

  section: style({}),
}
