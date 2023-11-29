const FONT_SIZES_DESKTOP = {
  sm2: 12,
  sm1: 14,
  s0: 16,
  sp1: 18,
  sp2: 20,
  sp4: 24,
  sp6: 28,
  sp10: 36,
  sp14: 44,
  sp20: 56,
  sp36: 88,
} as const

const FONT_SIZES_MOBILE = {
  sm2: 12,
  sm1: 13,
  s0: 14,
  sp1: 15,
  sp2: 16,
  sp4: 18,
  sp6: 20,
  sp10: 24,
  sp14: 28,
  sp20: 34,
  sp36: 50,
} as const

/**
 * font size name,
 * use wherever the font size should be used or passed in via a prop
 */
export type TFontSize = keyof typeof FONT_SIZES_DESKTOP & keyof typeof FONT_SIZES_MOBILE

// TODO this should be computed based on users’ setting
const PX_IN_REM = 16

type TOptions = {
  unit?: 'rem' | 'px' | 'em'
  isMobile?: boolean
}

/**
 * transform fontSize (prop) key to the value
 */
export const getFontSizeValue = (fontSize: TFontSize, options?: TOptions) => {
  const sizes = options?.isMobile ? FONT_SIZES_MOBILE : FONT_SIZES_DESKTOP
  const fontSizeValue = sizes[fontSize]
  const unit = options?.unit ?? 'rem'

  switch (unit) {
    case 'px':
      return `${fontSizeValue}px`
    case 'em':
      return `${fontSizeValue / PX_IN_REM}em`
    case 'rem':
    default:
      return `${fontSizeValue / PX_IN_REM}rem`
  }
}
