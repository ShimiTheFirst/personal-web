const DROP_SHADOWS = {
  none: `unset`,
  sharp: `1px 1px 0px rgba(0, 0, 0, 0.7)`,
} as const

/**
 * key that can be used as drop shadows
 */
export type TDropShadow = keyof typeof DROP_SHADOWS

/**
 * returns a value for provided drop shadow key
 */
export const getDropShadowValue = (shadow: TDropShadow) => DROP_SHADOWS[shadow]
