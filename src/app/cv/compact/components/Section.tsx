import * as React from 'react'

import { cn } from '-libs/cn'

import { CV_SECTION_STYLES } from './Section.css'

type TProps = RequiredChildren & {
  title: string
  className?: string
}

const STYLES = CV_SECTION_STYLES

/**
 * A section in a compact version of a CV
 * with a title and content.
 */
export const Section: React.FC<TProps> = ({ children, title, className }) => {
  return (
    <section className={cn(STYLES.section, className)}>
      <h3 className={STYLES.title}>{title}</h3>
      {children}
    </section>
  )
}
