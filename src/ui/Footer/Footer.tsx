import * as React from 'react'

import { FOOTER_STYLES } from './Footer.css'

type TProps = NoChildren

/**
 * footer section of the screen,
 * contains information about the author
 */
export const Footer: React.FC<TProps> = () => {
  return (
    <footer className={FOOTER_STYLES.footer}>
      <span className={FOOTER_STYLES.text}>Designed by Martin Stepanek</span>
      <span className={FOOTER_STYLES.separator}>|</span>
      <span className={FOOTER_STYLES.text}>Built by Martin Stepanek</span>
      <span className={FOOTER_STYLES.separator}>|</span>
      <span className={FOOTER_STYLES.text}>{new Date().getFullYear()}</span>
    </footer>
  )
}
