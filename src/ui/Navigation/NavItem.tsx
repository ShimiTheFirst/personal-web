'use client'

import { usePathname } from 'next/navigation'
import * as React from 'react'
import { Link } from 'react-aria-components'

import { cn } from '-libs/cn'
import { ROUTES } from '-routing'

import { NAVIGATION_STYLES } from './Navigation.css'

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
 * Link component navigating the user to a specific route on click.
 * Supports both internal and external links.
 */
export const NavItem: React.FC<TProps> = ({ children, to, href, ...linkProps }) => {
  const pathname = usePathname()

  const url = to ? ROUTES[to].path : href
  const isCurrentPage = pathname === url

  return (
    <Link
      {...linkProps}
      href={url}
      className={cn(NAVIGATION_STYLES.item, { [NAVIGATION_STYLES.activeItem]: isCurrentPage })}
    >
      {children}
    </Link>
  )
}
