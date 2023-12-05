'use client'

import * as React from 'react'
import { Button as RAButton } from 'react-aria-components'

import { BUTTON_STYLES } from './Button.css'

type TProps = RequiredChildren

export const Button: React.FC<TProps> = ({ children }) => {
  return <RAButton className={BUTTON_STYLES.button}>{children}</RAButton>
}
