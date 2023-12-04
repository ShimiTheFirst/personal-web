import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('body', {
  backgroundColor: '#2E1C2B',
  color: '#EFE9F4',
  minHeight: ['100vh', '100dvh'],
})

// https://tailwindcss.com/docs/font-smoothing
globalStyle('h1, h2, h3, h4, h5, h6, p, span, a', {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

// https://web.dev/articles/optimize-cls#modern_best_practice_for_setting_image_dimensions
globalStyle('img', {
  width: '100%',
  height: 'auto',
})
