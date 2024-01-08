import { StaticImageData } from 'next/image'
import * as React from 'react'

import { Image } from '-ui/Image'

import { CV_HEADER_LINE_STYLES } from './HeaderLine.css'

type TProps = RequiredChildren & {
  icon: StaticImageData
  iconDescription: string
}

const STYLES = CV_HEADER_LINE_STYLES

/**
 * A header line in a compact version of a CV
 * with an icon and text.
 */
export const HeaderLine: React.FC<TProps> = ({ children, icon, iconDescription }) => {
  return (
    <div className={STYLES.headerLine}>
      <Image src={icon} alt={iconDescription} className={STYLES.icon} />
      <div>{children}</div>
    </div>
  )
}
