import { getSpaceValue, getTypographyProperties } from '-designSystem'
import { style } from '-libs/vanilla-extract'

const STACK_BREAKPOINT = `550px`
const bodyTypography = getTypographyProperties(`textSm`)

export const FOOTER_STYLES = {
  footer: style({
    ...bodyTypography,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    padding: getSpaceValue(`s16`),

    '@media': {
      [`(max-width: ${STACK_BREAKPOINT})`]: {
        flexDirection: `column`,
        fontSize: bodyTypography.fontSizeMobile,
      },

      [`print`]: {
        display: `none`,
      },
    },
  }),

  text: style({}),

  separator: style({
    margin: `0 ${getSpaceValue(`s8`)}`,

    '@media': {
      [`(max-width: ${STACK_BREAKPOINT})`]: {
        display: `none`,
        fontSize: bodyTypography.fontSizeMobile,
      },
    },
  }),
}
