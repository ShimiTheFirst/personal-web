import { getTextShadowValue } from '../'
import { getFontSizeValue } from './fontSizes'
import { getFontWeightValue } from './fontWeights'
import { getLetterSpacingValue } from './letterSpacings'
import { getLineHeightValue } from './lineHeights'

/**
 * CSS properties related to typography
 */
export type TTypographyProperties = {
  fontSize: string
  fontSizeMobile: string
  fontWeight?: number
  letterSpacing?: string
  lineHeight?: number
  textTransform?: string
  textShadow?: string
}

const TYPOGRAPHY_VALUES = {
  buttonSm: {
    fontSize: getFontSizeValue(`sm1`),
    fontSizeMobile: getFontSizeValue(`sm1`, { isMobile: true }),
  },
  buttonMd: {
    fontSize: getFontSizeValue(`s0`),
    fontSizeMobile: getFontSizeValue(`s0`, { isMobile: true }),
  },
  buttonLg: {
    fontSize: getFontSizeValue(`sp1`),
    fontSizeMobile: getFontSizeValue(`sp1`, { isMobile: true }),
  },

  inputSm: {
    fontSize: getFontSizeValue(`sm1`),
    fontSizeMobile: getFontSizeValue(`sm1`, { isMobile: true }),
  },
  inputMd: {
    fontSize: getFontSizeValue(`s0`),
    fontSizeMobile: getFontSizeValue(`s0`, { isMobile: true }),
  },
  formLabel: {
    fontSize: getFontSizeValue(`s0`),
    fontSizeMobile: getFontSizeValue(`s0`, { isMobile: true }),
  },
  formMessage: {
    fontSize: getFontSizeValue(`sm1`),
    fontSizeMobile: getFontSizeValue(`sm1`, { isMobile: true }),
  },

  display1: {
    fontSize: getFontSizeValue(`sp36`),
    fontSizeMobile: getFontSizeValue(`sp36`, { isMobile: true }),
    fontWeight: getFontWeightValue(`bold`),
    lineHeight: getLineHeightValue(`lh120`),
    textShadow: getTextShadowValue(`medium`),
  },
  display1Sub: {
    fontSize: getFontSizeValue(`sp14`),
    fontSizeMobile: getFontSizeValue(`sp14`, { isMobile: true }),
    fontWeight: getFontWeightValue(`medium`),
    lineHeight: getLineHeightValue(`lh120`),
  },
  display2: {
    fontSize: getFontSizeValue(`sp20`),
    fontSizeMobile: getFontSizeValue(`sp20`, { isMobile: true }),
    fontWeight: getFontWeightValue(`boldSemi`),
    lineHeight: getLineHeightValue(`lh120`),
    textShadow: getTextShadowValue(`medium`),
  },
  display2Sub: {
    fontSize: getFontSizeValue(`sp6`),
    fontSizeMobile: getFontSizeValue(`sp6`, { isMobile: true }),
    fontWeight: getFontWeightValue(`medium`),
    lineHeight: getLineHeightValue(`lh120`),
  },
  display3: {
    fontSize: getFontSizeValue(`sp10`),
    fontSizeMobile: getFontSizeValue(`sp10`, { isMobile: true }),
    fontWeight: getFontWeightValue(`medium`),
    lineHeight: getLineHeightValue(`lh120`),
    textShadow: getTextShadowValue(`medium`),
  },
  display3Sub: {
    fontSize: getFontSizeValue(`sp4`),
    fontSizeMobile: getFontSizeValue(`sp4`, { isMobile: true }),
    fontWeight: getFontWeightValue(`regular`),
    lineHeight: getLineHeightValue(`lh120`),
  },

  title1: {
    fontSize: getFontSizeValue(`sp20`),
    fontSizeMobile: getFontSizeValue(`sp20`, { isMobile: true }),
    fontWeight: getFontWeightValue(`bold`),
    lineHeight: getLineHeightValue(`lh120`),
    letterSpacing: getLetterSpacingValue(`negativeMd`),
    textShadow: getTextShadowValue(`medium`),
  },
  title2: {
    fontSize: getFontSizeValue(`sp14`),
    fontSizeMobile: getFontSizeValue(`sp14`, { isMobile: true }),
    fontWeight: getFontWeightValue(`boldSemi`),
    lineHeight: getLineHeightValue(`lh120`),
    letterSpacing: getLetterSpacingValue(`negativeMd`),
    textShadow: getTextShadowValue(`medium`),
  },
  title3: {
    fontSize: getFontSizeValue(`sp10`),
    fontSizeMobile: getFontSizeValue(`sp10`, { isMobile: true }),
    fontWeight: getFontWeightValue(`boldSemi`),
    lineHeight: getLineHeightValue(`lh120`),
    letterSpacing: getLetterSpacingValue(`negativeSm`),
    textShadow: getTextShadowValue(`medium`),
  },
  title4: {
    fontSize: getFontSizeValue(`sp6`),
    fontSizeMobile: getFontSizeValue(`sp6`, { isMobile: true }),
    fontWeight: getFontWeightValue(`medium`),
    lineHeight: getLineHeightValue(`lh120`),
    letterSpacing: getLetterSpacingValue(`negativeSm`),
  },
  title5: {
    fontSize: getFontSizeValue(`sp4`),
    fontSizeMobile: getFontSizeValue(`sp4`, { isMobile: true }),
    fontWeight: getFontWeightValue(`medium`),
    lineHeight: getLineHeightValue(`lh120`),
  },
  title6: {
    fontSize: getFontSizeValue(`sp2`),
    fontSizeMobile: getFontSizeValue(`sp2`, { isMobile: true }),
    fontWeight: getFontWeightValue(`medium`),
    lineHeight: getLineHeightValue(`lh120`),
  },

  messageSm: {
    fontSize: getFontSizeValue(`s0`),
    fontSizeMobile: getFontSizeValue(`s0`, { isMobile: true }),
  },
  messageMd: {
    fontSize: getFontSizeValue(`sp2`),
    fontSizeMobile: getFontSizeValue(`sp2`, { isMobile: true }),
  },
  messageLg: {
    fontSize: getFontSizeValue(`sp6`),
    fontSizeMobile: getFontSizeValue(`sp6`, { isMobile: true }),
  },

  highlightSm: {
    fontSize: getFontSizeValue(`sp1`),
    fontSizeMobile: getFontSizeValue(`sp1`, { isMobile: true }),
    fontWeight: getFontWeightValue(`medium`),
  },
  highlightMd: {
    fontSize: getFontSizeValue(`sp2`),
    fontSizeMobile: getFontSizeValue(`sp2`, { isMobile: true }),
    fontWeight: getFontWeightValue(`boldSemi`),
  },

  navItem: {
    fontSize: getFontSizeValue(`sp1`),
    fontSizeMobile: getFontSizeValue(`sp1`, { isMobile: true }),
    lineHeight: getLineHeightValue(`lh140`),
    fontWeight: getFontWeightValue(`medium`),
  },

  textXs: {
    fontSize: getFontSizeValue(`sm2`),
    fontSizeMobile: getFontSizeValue(`sm2`, { isMobile: true }),
    lineHeight: getLineHeightValue(`lh130`),
  },
  textSm: {
    fontSize: getFontSizeValue(`sm1`),
    fontSizeMobile: getFontSizeValue(`sm1`, { isMobile: true }),
    lineHeight: getLineHeightValue(`lh130`),
  },
  textMd: {
    fontSize: getFontSizeValue(`s0`),
    fontSizeMobile: getFontSizeValue(`s0`, { isMobile: true }),
    lineHeight: getLineHeightValue(`lh140`),
  },
  textLg: {
    fontSize: getFontSizeValue(`sp1`),
    fontSizeMobile: getFontSizeValue(`sp1`, { isMobile: true }),
    lineHeight: getLineHeightValue(`lh140`),
  },
  textXl: {
    fontSize: getFontSizeValue(`sp2`),
    fontSizeMobile: getFontSizeValue(`sp2`, { isMobile: true }),
    lineHeight: getLineHeightValue(`lh140`),
  },
} satisfies Record<string, TTypographyProperties>

/**
 * key of typography values, can be used as a prop type
 */
export type TTypography = keyof typeof TYPOGRAPHY_VALUES

/**
 * returns typography related CSS props for provided key
 */
export const getTypographyProperties = (typography: TTypography) => {
  return TYPOGRAPHY_VALUES[typography]
}
