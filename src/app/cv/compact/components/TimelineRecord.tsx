import * as React from 'react'

import { CV_TIMELINE_RECORD_STYLES } from './TimelineRecord.css'

type TProps = RequiredChildren & {
  title: string
  subtitle?: string
  interval: string
}

const STYLES = CV_TIMELINE_RECORD_STYLES

/**
 * an item in the timeline of teh compact CV
 */
export const TimelineRecord: React.FC<TProps> = ({ children, title, interval, subtitle }) => {
  return (
    <div>
      <h4 className={STYLES.title}>
        {title}
        {subtitle && <span className={STYLES.subtitle}>{subtitle}</span>}
      </h4>
      <div className={STYLES.interval}>{interval}</div>
      {children}
    </div>
  )
}
