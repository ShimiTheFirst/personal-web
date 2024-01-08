import {
  getBoxShadowValue,
  getFontSizeValue,
  getFontWeightValue,
  getRadiusValue,
  getSpaceValue,
} from '-designSystem'
import { style } from '-libs/vanilla-extract'

// TODO extract colors

// slightly tweaked to fit exactly 1 page in print mode
const A4 = {
  width: `210mm`,
  height: `306mm`,
}

const PAGE_PADDING = getSpaceValue(`s32`)
const PROFILE_PICTURE_SIZE = `38mm`

export const CV_COMPACT_PAGE_STYLES = {
  page: style({
    background: `#FFF`,
    color: `#000`,

    width: `calc(${A4.width} + ${PAGE_PADDING} * 2)`,
    height: `calc(${A4.height} + ${PAGE_PADDING} * 2)`,
    padding: PAGE_PADDING,
    margin: `${getSpaceValue(`s20`)} auto`,

    boxShadow: getBoxShadowValue(`medium`),
    borderRadius: getRadiusValue(`r4`),

    display: `flex`,
    flexDirection: `column`,
    gap: getSpaceValue(`s24`),

    [`@media`]: {
      [`print`]: {
        margin: `0 auto`,
        boxShadow: `none`,
        borderRadius: `0`,

        // when printing the page padding is set by the browser
        width: A4.width,
        height: A4.height,
        padding: 0,
      },
    },
  }),

  header: style({
    display: `grid`,
    alignItems: `flex-start`,
    gridTemplateColumns: `1fr auto`,
  }),

  headerContent: style({
    display: `flex`,
    flexDirection: `column`,
    height: `100%`,
    gap: getSpaceValue(`s4`),
  }),

  h1: style({
    margin: 0,
    marginBottom: getSpaceValue(`s4`),
    lineHeight: 1.2,
    fontSize: getFontSizeValue(`sp14`),
  }),
  h2: style({
    fontSize: getFontSizeValue(`sp2`),
    lineHeight: 1.2,
    margin: 0,
  }),

  infoContainer: style({
    display: `grid`,
    gridTemplateColumns: `1fr 1fr`,
    gridTemplateRows: `auto auto`,
    gridAutoFlow: `column`,
    gap: getSpaceValue(`s8`),
    marginTop: getSpaceValue(`s16`),
  }),

  link: style({
    textDecoration: `underline`,
  }),

  remoteLabel: style({
    color: `#666666`,
  }),

  profilePicture: style({
    width: PROFILE_PICTURE_SIZE,
    height: PROFILE_PICTURE_SIZE,
    borderRadius: getRadiusValue(`r4`),
    border: `2px solid #000`,
    marginRight: `1px`, // fix for right border getting cropped in print mode
  }),

  content: style({
    flexGrow: 1,

    display: `grid`,
    gridTemplateColumns: `1fr 1fr`,
    gridTemplateRows: `auto auto auto 1fr`,
    gap: getSpaceValue(`s24`),
  }),

  summary: style({
    gridColumn: `1 / -1`,
    margin: `${getSpaceValue(`s8`)} 0`,

    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-evenly`,
  }),

  summaryItemYears: style({
    border: `2px dashed #ADADAD`,
    borderRadius: getRadiusValue(`r4`),
    padding: `${getSpaceValue(`s8`)} ${getSpaceValue(`s16`)}`,

    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    gap: getSpaceValue(`s4`),
  }),

  yearCount: style({
    fontSize: `2.3rem`, // custom to make it fit with the icons
    fontWeight: getFontWeightValue(`boldExtra`),
    lineHeight: 1,
  }),

  summaryItemText: style({
    fontWeight: getFontWeightValue(`medium`),
  }),

  timelineSection: style({
    gridRow: `2 / span 3`,
    gridColumn: `2`,
  }),

  timeline: style({
    display: `flex`,
    flexDirection: `column`,
    gap: getSpaceValue(`s16`),
  }),

  separator: style({
    width: `100%`,
    border: `none`,
    borderBottom: `2px dashed #ADADAD`,
  }),

  footer: style({
    display: `flex`,
    justifyContent: `space-between`,
    padding: `0 ${getSpaceValue(`s60`)}`,
  }),
}
