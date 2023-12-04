import { getSpaceValue, getTypographyProperties } from '-designSystem'
import { style } from '-libs/vanilla-extract'

const displayTypography = getTypographyProperties(`display1`)
const displaySubTypography = getTypographyProperties(`display1Sub`)
const bodyTypography = getTypographyProperties(`buttonLg`)

const UNKNOWN_PROPERTIES = {
  textWrap: `balance`,
}

export const HOME_PAGE_STYLES = {
  content: style({
    display: `grid`,
    gap: getSpaceValue(`s32`),
    alignItems: `center`,
    marginTop: `10vh`,
    width: `100%`,
    gridTemplateColumns: `1fr auto`,

    '@media': {
      [`(max-width: 800px)`]: {
        gridTemplateColumns: `1fr`,
      },
    },
  }),
  display: style({
    ...displayTypography,
    margin: `0px`,
    marginBottom: getSpaceValue(`s12`),

    '@media': {
      [`(max-width: 800px)`]: {
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
      [`(max-width: 800px)`]: {
        fontSize: displaySubTypography.fontSizeMobile,
      },
    },
  }),
  body: style({
    ...bodyTypography,
    ...UNKNOWN_PROPERTIES,
    margin: `0px`,

    '@media': {
      [`(max-width: 800px)`]: {
        fontSize: bodyTypography.fontSizeMobile,
      },
    },
  }),
}
