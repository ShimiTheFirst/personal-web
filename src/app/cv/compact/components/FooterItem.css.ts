import { getFontSizeValue, getFontWeightValue, getSpaceValue } from '-designSystem'
import { style } from '-libs/vanilla-extract'

const QR_SIZE = `5rem`

// TODO extract colors

export const CV_FOOTER_ITEM_STYLES = {
  footerItem: style({
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    gap: getSpaceValue(`s4`),
  }),

  qr: style({
    width: QR_SIZE,
    height: QR_SIZE,
  }),

  label: style({
    fontWeight: getFontWeightValue(`boldSemi`),
    margin: 0,
    color: `#444444`,
  }),

  link: style({
    fontSize: getFontSizeValue(`sm1`),
    textDecoration: `underline`,
    color: `#989898`,
  }),
}
