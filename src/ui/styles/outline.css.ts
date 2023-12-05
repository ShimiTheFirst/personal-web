import { style } from '-libs/vanilla-extract'

/**
 * CSS styles adding custom outline
 * when the element is focused using keyboard.
 * References RA custom data attribute.
 */
export const OUTLINE_STYLES = style({
  outline: `none`,
  selectors: {
    // RA data attribute: https://react-spectrum.adobe.com/react-aria/Link.html#styling
    '&[data-focus-visible=true]': {
      outlineColor: `#08B2E3`,
      outlineStyle: `outset`,
      outlineOffset: `3px`,
      outlineWidth: `3px`,
    },
  },
})
