/// <reference types="../global-types.ts" />

import '../global/styles/normalize.css'
import '../global/styles/global-styles.css'

import type { Metadata } from 'next'

import { IOSStatusBarBackground } from '-components/IOSStatusBarBackground'
import { META } from '-config/metadata'
import { cn } from '-libs/cn'
import { RouterProvider } from '-routing'
import { Footer } from '-ui/Footer'
import { Header } from '-ui/Header'
import { Navigation, NavItem } from '-ui/Navigation'

import { FONTS } from '../global/fonts'
import { ROOT_LAYOUT_STYLES } from './layout.css'

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  appleWebApp: {
    capable: true,
    title: META.titleShort,
    statusBarStyle: 'black-translucent', // use with `IOSStatusBarBackground`
  },
}

type TProps = RequiredChildren

const RootLayout: React.FC<TProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(FONTS.poppins.className, ROOT_LAYOUT_STYLES.body)}>
        <RouterProvider>
          <IOSStatusBarBackground />
          <Header>
            <Navigation className={ROOT_LAYOUT_STYLES.nav}>
              <NavItem to={`home`}>HOME</NavItem>
              <NavItem to={`cv`}>CV</NavItem>
            </Navigation>
          </Header>

          {children}

          <Footer />
        </RouterProvider>
      </body>
    </html>
  )
}

export default RootLayout
