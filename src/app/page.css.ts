import { getDropShadowValue, getSpaceValue, getTypographyProperties } from '-designSystem'
import { style } from '-libs/vanilla-extract'

const COLUMN_BREAKPOINT = `900px`
const ICON_SIZE = `20px`

const displayTypography = getTypographyProperties(`display1`)
const displaySubTypography = getTypographyProperties(`display1Sub`)
const bodyTypography = getTypographyProperties(`textLg`)

// new CSS properties that are not supported by vanilla-extract
const UNSUPPORTED_PROPERTIES = {
  textWrap: `balance`,
}

export const HOME_PAGE_STYLES = {
  content: style({
    display: `grid`,
    gap: getSpaceValue(`s32`),
    alignItems: `center`,
    gridTemplateColumns: `1fr auto`,
    marginTop: `10vh`,

    '@media': {
      // on shorter screens, try to prevent the unnecessary scroll
      [`(max-height: 1000px)`]: {
        marginTop: `0px`,
      },

      // on tablet and smaller, stack the content vertically
      [`(max-width: ${COLUMN_BREAKPOINT})`]: {
        marginTop: getSpaceValue(`s24`),
        gridTemplateColumns: `1fr`,
      },
    },
  }),

  display: style({
    ...displayTypography,
    margin: `0px`,
    marginBottom: getSpaceValue(`s12`),

    '@media': {
      [`(max-width: ${COLUMN_BREAKPOINT})`]: {
        fontSize: displayTypography.fontSizeMobile,
      },
    },
  }),

  subDisplay: style({
    ...displaySubTypography,
    margin: `0px`,
    whiteSpace: `nowrap`,
    marginBottom: getSpaceValue(`s36`),

    '@media': {
      [`(max-width: ${COLUMN_BREAKPOINT})`]: {
        fontSize: displaySubTypography.fontSizeMobile,
      },
    },
  }),

  body: style({
    ...bodyTypography,
    margin: `0px`,
    marginBottom: getSpaceValue(`s36`),
    ...UNSUPPORTED_PROPERTIES,

    '@media': {
      [`(max-width: ${COLUMN_BREAKPOINT})`]: {
        fontSize: bodyTypography.fontSizeMobile,
      },
    },
  }),

  buttonContainer: style({
    display: `flex`,
    gap: getSpaceValue(`s12`),
  }),

  icon: style({
    width: ICON_SIZE,
    height: ICON_SIZE,
    filter: `drop-shadow(${getDropShadowValue(`sharp`)})`,
  }),
}
