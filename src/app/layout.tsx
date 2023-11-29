/// <reference types="../global-types.ts" />

import '../global/styles/normalize.css'
import '../global/styles/global-styles.css'

import type { Metadata } from 'next'

import { FONTS } from '../global/fonts'

export const metadata: Metadata = {
  title: 'martinstepanek personal website',
  description: 'Personal website of web developer Martin Stepanek',
}

type TProps = RequiredChildren

const RootLayout: React.FC<TProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={FONTS.poppins.className}>{children}</body>
    </html>
  )
}

export default RootLayout
