import * as React from 'react'

type TProps = NoChildren

const STATUS_BAR_HEIGHT = `50px`

/**
 * renders a div with app background color that is positioned
 * just above the viewport to serve as a bg behind the iOS status bar
 * and prevent the app content from being visible through the status bar
 * when the app is used as a standalone bookmarked app on iOS
 */
export const IOSStatusBarBackground: React.FC<TProps> = () => {
  return (
    <div
      style={{
        background: `#2E1C2B`,
        position: `fixed`,
        width: `100%`,
        height: STATUS_BAR_HEIGHT,
        // the 1px top offset is to show at least a bit of the element in the viewport
        // because otherwise the browser seem to delay the render of it for couple of seconds
        top: `calc(-1 * ${STATUS_BAR_HEIGHT} + 1px)`,
      }}
    />
  )
}
