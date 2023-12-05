const DURATIONS = {
  superFast: `0.1s`,
  fast: `0.2s`,
  medium: `0.4s`,
} as const

/**
 * key that can be used as duration
 */
export type TDuration = keyof typeof DURATIONS

/**
 * returns a value for provided duration key
 */
export const getDurationValue = (duration: TDuration) => DURATIONS[duration]
