import { getFontSizeValue, getFontWeightValue, getSpaceValue } from '-designSystem'
import { style } from '-libs/vanilla-extract'

// TODO extract colors

export const CV_TIMELINE_RECORD_STYLES = {
  title: style({
    fontSize: getFontSizeValue(`sp1`),
    fontWeight: getFontWeightValue(`medium`),
    margin: 0,
  }),

  subtitle: style({
    color: `#ADADAD`,
  }),

  interval: style({
    fontSize: getFontSizeValue(`sm2`),
    fontWeight: getFontWeightValue(`boldSemi`),
    color: `#444444`,

    // Poppins doesn't have tabular numbers,
    // more of an improvement so it’s ok it won’t work for everyone
    // and I don’t want to load another font just for this
    fontFamily: `Inter`,
    fontFeatureSettings: `"tnum"`, // double quotes are part of the value
    fontVariantNumeric: `tabular-nums`,

    marginTop: getSpaceValue(`s4`),
    marginBottom: getSpaceValue(`s8`),
  }),
}
