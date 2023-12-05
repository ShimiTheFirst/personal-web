// generated using https://www.joshwcomeau.com/shadow-palette/
const BOX_SHADOWS = {
  none: `unset`,
  medium: `
    0.3px 0.5px 0.7px hsl(310deg 41% 6% / 0.3),
    0.8px 1.7px 2.2px -0.8px hsl(310deg 41% 6% / 0.32),
    2px 4px 5.2px -1.5px hsl(310deg 41% 6% / 0.33),
    4.8px 9.6px 12.4px -2.3px hsl(310deg 41% 6% / 0.34)
  `,
} as const

/**
 * key that can be used as box shadows
 */
export type TBoxShadow = keyof typeof BOX_SHADOWS

/**
 * returns a value for provided box shadow key
 */
export const getBoxShadowValue = (shadow: TBoxShadow) => BOX_SHADOWS[shadow]
