import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'block',
  weight: ['200', '400', '500', '600', '700', '800'],
})

/**
 * all fonts available in the project,
 * created with the help of the nextjs font loader
 */
export const FONTS = { poppins }
