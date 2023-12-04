import * as React from 'react'

import { HEADER_STYLES } from './Header.css'

type TProps = RequiredChildren

/**
 * header section of the screen
 */
export const Header: React.FC<TProps> = ({ children }) => {
  return (
    <header className={HEADER_STYLES.container}>
      <div className={HEADER_STYLES.header}>{children}</div>
    </header>
  )
}
