'use client'

import * as React from 'react'
import { Link } from 'react-aria-components'

import { ROUTES } from '-routing'

import { BUTTON_STYLES } from './Button.css'

type TLinkProps = OmitSafe<PropsOf<typeof Link>, 'className' | 'href'>

type TRouteProps =
  | {
      to: keyof typeof ROUTES
      href?: never
    }
  | {
      to?: never
      href: string
    }

type TProps = RequiredChildren & TRouteProps & TLinkProps

/**
 * Link component styled as a Button, used to navigate a user to a specific route on click.
 * Supports both internal and external links.
 */
export const ButtonLink: React.FC<TProps> = ({ children, to, href, ...linkProps }) => {
  const url = to ? ROUTES[to].path : href

  return (
    <Link {...linkProps} href={url} className={BUTTON_STYLES.button}>
      {children}
    </Link>
  )
}
