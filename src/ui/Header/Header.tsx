'use client'
import * as React from 'react'

import { HEADER_STYLES } from './Header.css'

type TProps = RequiredChildren

// has to be the same as in Header.css.ts
const STUCK_STATE_ATTRIBUTE = 'data-stuck'
const FULLY_VISIBLE = 1
const WHOLE_ELEMENT_VISIBLE = 1

/**
 * header section of the screen
 */
export const Header: React.FC<TProps> = ({ children }) => {
  const refHeader = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const headerElement = refHeader.current

    if (!headerElement) return

    const observer = new IntersectionObserver(
      ([{ target, intersectionRatio }]) => {
        target.toggleAttribute(STUCK_STATE_ATTRIBUTE, intersectionRatio < FULLY_VISIBLE)
      },
      { threshold: [WHOLE_ELEMENT_VISIBLE] },
    )

    observer.observe(headerElement)

    return () => observer.unobserve(headerElement)
  }, [])

  return (
    <header ref={refHeader} className={HEADER_STYLES.container}>
      <div className={HEADER_STYLES.header}>{children}</div>
    </header>
  )
}
