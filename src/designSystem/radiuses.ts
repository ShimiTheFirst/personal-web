import { getSpaceValue, TSpace } from './spaces'

/**
 * all possible radius values in px (or as string),
 */
const RADIUSES_VALUES = {
  none: 2,
  r2: 2,
  r4: 4,
  r8: 8,
  r16: 16,
  r32: 32,
  r48: 48,
  r64: 64,
  pill: `50vh`,
  circle: `50%`,
} as const

/**
 * key of radius values, can be used as a prop type
 */
export type TRadius = keyof typeof RADIUSES_VALUES

/**
 * returns value for provided radius key in related unit (px, %, vh)
 */
export const getRadiusValue = (radius: TRadius) => {
  const radiusValue = RADIUSES_VALUES[radius]

  return typeof radiusValue === 'string' ? radiusValue : `${radiusValue}px`
}

type TRelationDirection = 'outer' | 'inner'

/**
 * returns related inner/outer radius based on initial radius and space between the two
 */
export const getRelatedRadius = (
  radius: TRadius,
  space: TSpace | number,
  direction: TRelationDirection = 'inner',
) => {
  const radiusValue = RADIUSES_VALUES[radius]

  // for non-px values, return the same value
  if (typeof radiusValue === 'string') return radiusValue

  // for px values, subtract/add spaceValue
  const spaceValue = typeof space === 'number' ? space : Number(getSpaceValue(space, 'px'))
  const relatedValue =
    direction === 'inner'
      ? Math.max(RADIUSES_VALUES.none, radiusValue - spaceValue)
      : radiusValue + spaceValue

  return `${relatedValue}px`
}
