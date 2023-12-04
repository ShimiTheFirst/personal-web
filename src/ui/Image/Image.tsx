import NextImage from 'next/image'
import * as React from 'react'

type TImageProps = PropsOf<typeof NextImage>

type TProps = TImageProps

export const Image: React.FC<TProps> = (props) => {
  return <NextImage {...props} />
}
