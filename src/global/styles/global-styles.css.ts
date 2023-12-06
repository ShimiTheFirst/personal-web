import { globalStyle } from '@vanilla-extract/css'

import { LAYERS } from '-styles/layers.css'

globalStyle('*, *::before, *::after', {
  '@layer': {
    [LAYERS.defaults]: {
      boxSizing: 'border-box',
    },
  },
})

globalStyle('body', {
  '@layer': {
    [LAYERS.defaults]: {
      backgroundColor: '#2E1C2B',
      color: '#EFE9F4',
      minHeight: ['100vh', '100dvh'],
    },
  },
})

// https://tailwindcss.com/docs/font-smoothing
globalStyle('h1, h2, h3, h4, h5, h6, p, span, a', {
  '@layer': {
    [LAYERS.defaults]: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
  },
})

globalStyle('a', {
  '@layer': {
    [LAYERS.defaults]: {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
})

// https://web.dev/articles/optimize-cls#modern_best_practice_for_setting_image_dimensions
globalStyle('img', {
  '@layer': {
    [LAYERS.defaults]: {
      width: '100%',
      height: 'auto',
    },
  },
})
