import { getFontSizeValue } from './fontSizes'
import { getFontWeightValue } from './fontWeights'
import { getLetterSpacingValue } from './letterSpacings'
import { getLineHeightValue } from './lineHeights'

/**
 * CSS properties related to typography
 */
export type TTypographyProperties = {
  fontSize: string
  fontWeight?: number
  letterSpacing?: string
  lineHeight?: number
  textTransform?: string
}

const TYPOGRAPHY_VALUES = {
  buttonSm: {
    fontSize: getFontSizeValue(`sm1`),
  },
  buttonMd: {
    fontSize: getFontSizeValue(`s0`),
  },
  buttonLg: {
    fontSize: getFontSizeValue(`sp1`),
  },

  inputSm: {
    fontSize: getFontSizeValue(`sm1`),
  },
  inputMd: {
    fontSize: getFontSizeValue(`s0`),
  },
  formLabel: {
    fontSize: getFontSizeValue(`s0`),
  },
  formMessage: {
    fontSize: getFontSizeValue(`sm1`),
  },

  display1: {
    fontSize: getFontSizeValue(`sp36`),
    fontWeight: getFontWeightValue(`bold`),
    lineHeight: getLineHeightValue(`lh120`),
  },
  display1Sub: {
    fontSize: getFontSizeValue(`sp14`),
    fontWeight: getFontWeightValue(`medium`),
    lineHeight: getLineHeightValue(`lh120`),
  },
  display2: {
    fontSize: getFontSizeValue(`sp20`),
    fontWeight: getFontWeightValue(`boldSemi`),
    lineHeight: getLineHeightValue(`lh120`),
  },
  display2Sub: {
    fontSize: getFontSizeValue(`sp6`),
    fontWeight: getFontWeightValue(`medium`),
    lineHeight: getLineHeightValue(`lh120`),
  },
  display3: {
    fontSize: getFontSizeValue(`sp10`),
    fontWeight: getFontWeightValue(`medium`),
    lineHeight: getLineHeightValue(`lh120`),
  },
  display3Sub: {
    fontSize: getFontSizeValue(`sp4`),
    fontWeight: getFontWeightValue(`regular`),
    lineHeight: getLineHeightValue(`lh120`),
  },

  title1: {
    fontSize: getFontSizeValue(`sp20`),
    fontWeight: getFontWeightValue(`bold`),
    lineHeight: getLineHeightValue(`lh120`),
    letterSpacing: getLetterSpacingValue(`negativeMd`),
  },
  title2: {
    fontSize: getFontSizeValue(`sp14`),
    fontWeight: getFontWeightValue(`boldSemi`),
    lineHeight: getLineHeightValue(`lh120`),
    letterSpacing: getLetterSpacingValue(`negativeMd`),
  },
  title3: {
    fontSize: getFontSizeValue(`sp10`),
    fontWeight: getFontWeightValue(`boldSemi`),
    lineHeight: getLineHeightValue(`lh120`),
    letterSpacing: getLetterSpacingValue(`negativeSm`),
  },
  title4: {
    fontSize: getFontSizeValue(`sp6`),
    fontWeight: getFontWeightValue(`medium`),
    lineHeight: getLineHeightValue(`lh120`),
    letterSpacing: getLetterSpacingValue(`negativeSm`),
  },
  title5: {
    fontSize: getFontSizeValue(`sp4`),
    fontWeight: getFontWeightValue(`medium`),
    lineHeight: getLineHeightValue(`lh120`),
  },
  title6: {
    fontSize: getFontSizeValue(`sp2`),
    fontWeight: getFontWeightValue(`medium`),
    lineHeight: getLineHeightValue(`lh120`),
  },

  messageSm: {
    fontSize: getFontSizeValue(`s0`),
  },
  messageMd: {
    fontSize: getFontSizeValue(`sp2`),
  },
  messageLg: {
    fontSize: getFontSizeValue(`sp6`),
  },

  highlightSm: {
    fontSize: getFontSizeValue(`sp1`),
    fontWeight: getFontWeightValue(`medium`),
  },
  highlightMd: {
    fontSize: getFontSizeValue(`sp2`),
    fontWeight: getFontWeightValue(`boldSemi`),
  },

  textXs: {
    fontSize: getFontSizeValue(`sm2`),
    lineHeight: getLineHeightValue(`lh130`),
  },
  textSm: {
    fontSize: getFontSizeValue(`sm1`),
    lineHeight: getLineHeightValue(`lh130`),
  },
  textMd: {
    fontSize: getFontSizeValue(`s0`),
    lineHeight: getLineHeightValue(`lh140`),
  },
  textLg: {
    fontSize: getFontSizeValue(`sp1`),
    lineHeight: getLineHeightValue(`lh140`),
  },
  textXl: {
    fontSize: getFontSizeValue(`sp2`),
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
