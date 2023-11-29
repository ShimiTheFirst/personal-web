const FONT_WEIGHTS = {
  extraLight: 200,
  regular: 400,
  medium: 500,
  boldSemi: 600,
  bold: 700,
  boldExtra: 800,
} as const

/**
 * font weight name,
 * use wherever the font weight should be used or passed in via a prop
 */
export type TFontWeight = keyof typeof FONT_WEIGHTS

/**
 * transform font weight (prop) key to the value
 */
export const getFontWeightValue = (fontWeight: TFontWeight) => {
  return FONT_WEIGHTS[fontWeight]
}
