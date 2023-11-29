// values here reflect speedlo Design System
// for fonts we have a following system:
//  - each target device (mobile/desktop/kiosk) has a set of BASE_SIZE and STEP_SIZE values
//  - based on those values and SIZE_TEMPLATE (common for all device sizes) we can generate font size scale for that specific target device

// generic template for generating font size scale
// keys are used as names for generated values
// offsets are multiplied by the STEP_SIZE variable and added to the BASE_SIZE
// positiveOffsets are here just for type generation (can be solved in a better way?)
const SIZE_TEMPLATE = {
  sm2: { offset: -2, positiveOffset: 2 },
  sm1: { offset: -1, positiveOffset: 1 },
  s0: { offset: 0, positiveOffset: 0 },
  sp1: { offset: 1, positiveOffset: 1 },
  sp2: { offset: 2, positiveOffset: 2 },
  sp4: { offset: 4, positiveOffset: 4 },
  sp6: { offset: 6, positiveOffset: 6 },
  sp10: { offset: 10, positiveOffset: 10 },
  sp14: { offset: 14, positiveOffset: 14 },
  sp20: { offset: 20, positiveOffset: 20 },
  sp36: { offset: 36, positiveOffset: 36 },
} as const

// size of the `s0`
// and size of each step (gets multiplied by the `offset` property when generating final value)
const BASE_SIZE_DESKTOP = 16
const STEP_SIZE_DESKTOP = 2

const BASE_SIZE_MOBILE = 14
const STEP_SIZE_MOBILE = 1

// generated final/actual font size values
// for each key of the `SIZE_TEMPLATE` there is a value calculated based on `baseSize`, `stepSize` and `offset`
const getFontSizes = (baseSize: number, stepSize: number) => {
  const entries = Object.entries(SIZE_TEMPLATE)

  return entries.reduce((acc, [key, { offset }]) => {
    acc[key] = baseSize + offset * stepSize

    return acc
  }, {} as any)
}

/* eslint-disable @typescript-eslint/no-unused-vars */

const FONT_SIZES_DESKTOP = getFontSizes(BASE_SIZE_DESKTOP, STEP_SIZE_DESKTOP)
const FONT_SIZES_MOBILE = getFontSizes(BASE_SIZE_MOBILE, STEP_SIZE_MOBILE)

/* eslint-enable @typescript-eslint/no-unused-vars */
