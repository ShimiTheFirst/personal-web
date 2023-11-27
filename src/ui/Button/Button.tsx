import * as React from 'react'

import { button } from './Button.css'

type TProps = RequiredChildren

export const Button: React.FC<TProps> = ({ children }) => {
  return <button className={button}>{children}</button>
}
