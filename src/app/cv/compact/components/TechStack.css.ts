import { getFontSizeValue, getFontWeightValue, getRadiusValue, getSpaceValue } from '-designSystem'
import { style } from '-libs/vanilla-extract'

// TODO extract colors

const LABEL_WIDTH = `3.8rem`
const ICON_SIZE = `1.6rem`

export const CV_TECH_STACK_STYLES = {
  line: style({
    display: `grid`,
    gridAutoFlow: `column`,
    gridTemplateColumns: `${LABEL_WIDTH} auto`,
    justifyContent: `start`,
    alignItems: `center`,
    gap: getSpaceValue(`s8`),

    // inline label styles
    fontSize: getFontSizeValue(`sm1`),
    fontWeight: getFontWeightValue(`medium`),
    color: `#666666`,

    selectors: {
      // put some space between the consecutive lines
      '& + &': {
        marginTop: getSpaceValue(`s8`),
      },
      // put some space between the first line and the title
      // because all other section start with a text that has some lin height
      // and this is full of icons so it looks like the space is smaller
      '&:first-of-type': {
        marginTop: getSpaceValue(`s8`),
      },
    },
  }),

  icon: style({
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: getRadiusValue(`r4`),
    display: `block`, // because of the anchor around the image: https://stackoverflow.com/a/54020931
  }),
}
