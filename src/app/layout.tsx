/// <reference types="../global-types.ts" />

import '../global/styles/normalize.css'
import '../global/styles/global-styles.css'

import type { Metadata } from 'next'

import { RouterProvider } from '-routing'
import { Header } from '-ui/Header'
import { Navigation, NavItem } from '-ui/Navigation'

import { FONTS } from '../global/fonts'
import { ROOT_LAYOUT_STYLES } from './layout.css'

export const metadata: Metadata = {
  title: 'martinstepanek personal website',
  description: 'Personal website of web developer Martin Stepanek',
}

type TProps = RequiredChildren

const RootLayout: React.FC<TProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={FONTS.poppins.className}>
        <RouterProvider>
          <Header>
            <Navigation className={ROOT_LAYOUT_STYLES.nav}>
              <NavItem to={`home`}>HOME</NavItem>
              <NavItem to={`cv`}>CV</NavItem>
            </Navigation>
          </Header>
          {children}
        </RouterProvider>
      </body>
    </html>
  )
}

export default RootLayout
