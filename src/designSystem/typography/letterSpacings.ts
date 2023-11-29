export const LETTER_SPACINGS = {
  negativeSm: `-0.01em`,
  negativeMd: `-0.02em`,
  positiveLg: `0.05em`,
} as const

/**
 * key that can be used as letter spacing
 */
export type TLetterSpacing = keyof typeof LETTER_SPACINGS

/**
 * returns a value for provided letter spacing key
 */
export const getLetterSpacingValue = (letterSpacing: TLetterSpacing) => {
  return LETTER_SPACINGS[letterSpacing]
}
