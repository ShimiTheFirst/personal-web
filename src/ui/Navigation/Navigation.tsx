import * as React from 'react'

import { cn } from '-libs/cn'

import { NAVIGATION_STYLES } from './Navigation.css'

type TProps = RequiredChildren & {
  className?: string
}

/**
 * nav element used as a container for navigation items
 */
export const Navigation: React.FC<TProps> = ({ children, className }) => {
  return <nav className={cn(NAVIGATION_STYLES.container, className)}>{children}</nav>
}
