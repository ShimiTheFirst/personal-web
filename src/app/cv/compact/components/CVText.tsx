import * as React from 'react'

import { CV_TEXT_STYLES } from './CVText.css'

type TProps = RequiredChildren

const STYLES = CV_TEXT_STYLES

/**
 * basic text component for compact CV
 */
export const CVText: React.FC<TProps> = ({ children }) => {
  return <p className={STYLES.text}>{children}</p>
}
