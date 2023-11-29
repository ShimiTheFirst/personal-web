/**
 * all possible space (padding or margin) values in px,
 * basically multiplies of 4
 */
const SPACES_VALUES = {
  s0: 0,
  s4: 4,
  s8: 8,
  s12: 12,
  s16: 16,
  s20: 20,
  s24: 24,
  s28: 28,
  s32: 32,
  s36: 36,
  s40: 40,
  s44: 44,
  s48: 48,
  s52: 52,
  s56: 56,
  s60: 60,
  s64: 64,
  s68: 68,
  s72: 72,
  s76: 76,
  s80: 80,
  s84: 84,
  s88: 88,
  s92: 92,
  s96: 96,
  s100: 100,
  s104: 104,
  s108: 108,
  s112: 112,
  s116: 116,
  s120: 120,
  s124: 124,
  s128: 128,
  s132: 132,
  s136: 136,
  s140: 140,
  s144: 144,
  s148: 148,
  s152: 152,
  s156: 156,
  s160: 160,
  s164: 164,
  s168: 168,
} as const

// TODO this should be computed based on users’ setting
const PX_IN_REM = 16

/**
 * CSS unit in which the space can be returned
 */
export type TSpaceUnit = 'px' | 'rem' | 'em'
/**
 * key of space values, can be used as a prop type
 */
export type TSpace = keyof typeof SPACES_VALUES

/**
 * returns value for provided space key, with requested unit
 */
export const getSpaceValue = (space: TSpace, unit: TSpaceUnit = 'rem') => {
  const value = SPACES_VALUES[space]

  switch (unit) {
    case 'px':
      return `${value}px`
    case 'em':
      return `${value / PX_IN_REM}em`
    case 'rem':
    default:
      return `${value / PX_IN_REM}rem`
  }
}
