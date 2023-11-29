const TEXT_SHADOWS = {
  none: `unset`,
  medium: `0 2px 5px rgba(0, 0, 0, 0.6)`,
} as const

/**
 * key that can be used as text shadows
 */
export type TTextShadow = keyof typeof TEXT_SHADOWS

/**
 * returns a value for provided text shadow key
 */
export const getTextShadowValue = (shadow: TTextShadow) => TEXT_SHADOWS[shadow]
