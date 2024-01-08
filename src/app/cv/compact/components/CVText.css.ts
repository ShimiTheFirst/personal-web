import { getFontSizeValue, getSpaceValue } from '-designSystem'
import { style } from '-libs/vanilla-extract'

// properties or values that are not supported by vanilla-extract yet
const UNKNOWN_PROPERTIES = {
  textWrap: `pretty`, // might not work in all browsers but it’s an enhancement anyway
}

export const CV_TEXT_STYLES = {
  text: style({
    margin: 0,
    lineHeight: 1.4,
    fontSize: getFontSizeValue(`sm1`),
    ...UNKNOWN_PROPERTIES,

    selectors: {
      // put some space between two consecutive paragraphs
      '& + &': {
        marginTop: getSpaceValue(`s8`),
      },
    },
  }),
}
