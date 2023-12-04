import { getSpaceValue, getTypographyProperties } from '-designSystem'
import { style } from '-libs/vanilla-extract'

const COLUMN_BREAKPOINT = `800px`

const displayTypography = getTypographyProperties(`display1`)
const displaySubTypography = getTypographyProperties(`display1Sub`)
const bodyTypography = getTypographyProperties(`buttonLg`)

// new CSS properties that are not supported by vanilla-extract
const UNSUPPORTED_PROPERTIES = {
  textWrap: `balance`,
}

export const HOME_PAGE_STYLES = {
  content: style({
    display: `grid`,
    gap: getSpaceValue(`s32`),
    alignItems: `center`,
    width: `100%`,
    gridTemplateColumns: `1fr auto`,

    position: `relative`,
    top: `-15vh`, // TODO solve this in a better way

    '@media': {
      [`(max-width: ${COLUMN_BREAKPOINT})`]: {
        gridTemplateColumns: `1fr`,
        top: 0,
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
    ...UNSUPPORTED_PROPERTIES,

    '@media': {
      [`(max-width: ${COLUMN_BREAKPOINT})`]: {
        fontSize: bodyTypography.fontSizeMobile,
      },
    },
  }),
}
