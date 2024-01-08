import { StaticImageData } from 'next/image'
import * as React from 'react'

import { Image } from '-ui/Image'

import { CV_FOOTER_ITEM_STYLES } from './FooterItem.css'

type TProps = NoChildren & {
  label: string
  image: StaticImageData
  imageDescription: string
  link: string
}

const STYLES = CV_FOOTER_ITEM_STYLES

/**
 * an item in the footer of the compact version of CV,
 * contains a QR code, a link and a label
 */
export const FooterItem: React.FC<TProps> = ({ link, image, imageDescription, label }) => {
  return (
    <div className={STYLES.footerItem}>
      <p className={STYLES.label}>{label}</p>
      <Image src={image} alt={imageDescription} className={STYLES.qr} />
      <a target={`_blank`} href={link} className={STYLES.link}>
        {link}
      </a>
    </div>
  )
}
