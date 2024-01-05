import { getSpaceValue, getTypographyProperties } from '-designSystem'
import { style } from '-libs/vanilla-extract'

const heading1Typography = getTypographyProperties(`title1`)
const heading2Typography = getTypographyProperties(`title2`)
const heading3Typography = getTypographyProperties(`title3`)
const heading4Typography = getTypographyProperties(`title4`)

const ICON_SIZE = `24px`

const COLORS = {
  light: `rgb(238, 99, 82)`,
  dark: `rgb(212, 28, 6)`,
  borderLight: `rgb(240, 163, 155)`,
  borderMedium: `rgb(220, 101, 86)`,
  borderDark: `rgb(123, 34, 23)`,
}

const BORDER_WIDTH = `1px`

export const CV_PAGE_STYLES = {
  h1: style({ ...heading1Typography }),
  h2: style({
    ...heading2Typography,
    color: COLORS.light,
    letterSpacing: `0.03em`,
    textShadow: `
      ${BORDER_WIDTH} ${BORDER_WIDTH} 0 ${COLORS.borderDark}, 
      -${BORDER_WIDTH} -${BORDER_WIDTH} 0 ${COLORS.borderLight}, 
      ${BORDER_WIDTH} 0 0 ${COLORS.borderDark}, 
      0 ${BORDER_WIDTH} 0 ${COLORS.borderDark}, 
      -${BORDER_WIDTH} 0 0 ${COLORS.borderLight}, 
      0 -${BORDER_WIDTH} 0 ${COLORS.borderLight}
    `,
  }),
  h3: style({ ...heading3Typography }),
  h4: style({ ...heading4Typography }),

  headingContainer: style({
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
    gap: getSpaceValue(`s12`),
  }),

  downloadIcon: style({
    width: ICON_SIZE,
    height: ICON_SIZE,
  }),

  skillsGrid: style({
    display: `grid`,
    gridTemplateColumns: `repeat(auto-fill, minmax(35ch, 1fr))`,
    gap: getSpaceValue(`s36`),
  }),
}
