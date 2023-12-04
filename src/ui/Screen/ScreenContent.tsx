import * as React from 'react'

import { cn } from '-libs/cn'

import { SCREEN_STYLES } from './Screen.css'

type TProps = RequiredChildren & {
  className?: string
}

/**
 * main content of the screen setting the max width of the content,
 * should be used only once per screen
 */
export const ScreenContent: React.FC<TProps> = ({ children, className }) => {
  return <main className={cn(SCREEN_STYLES.content, className)}>{children}</main>
}
