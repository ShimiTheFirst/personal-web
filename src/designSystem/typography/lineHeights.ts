export const LINE_HEIGHTS_VALUES = {
  lh140: 1.4,
  lh130: 1.3,
  lh120: 1.2,
  lh100: 1,
} as const

/**
 * key of line height values, can be used as a prop type
 */
export type TLineHeight = keyof typeof LINE_HEIGHTS_VALUES

/**
 * returns value for provided line height key
 */
export const getLineHeightValue = (lineHeight: TLineHeight) => {
  return LINE_HEIGHTS_VALUES[lineHeight]
}
