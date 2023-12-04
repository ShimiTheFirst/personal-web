'use client'

import * as React from 'react'
import { Link } from 'react-aria-components'

import { ROUTES } from '-routing'

import { NAVIGATION_STYLES } from './Navigation.css'

type TProps = RequiredChildren & {
  to: keyof typeof ROUTES
}

/**
 * Link component navigating the user to a specific route on click.
 */
export const NavItem: React.FC<TProps> = ({ children, to }) => {
  return (
    <Link href={ROUTES[to].path} className={NAVIGATION_STYLES.item}>
      {children}
    </Link>
  )
}
