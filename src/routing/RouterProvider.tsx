'use client'

import { useRouter } from 'next/navigation'
import { RouterProvider as RARouterProvider } from 'react-aria-components'

type TProps = RequiredChildren

/**
 * react-aria-components router provider
 * connected to the next.js router,
 * required for components like Link or Menu to work
 *
 * https://react-spectrum.adobe.com/react-aria/routing.html#nextjs
 */
export const RouterProvider: React.FC<TProps> = ({ children }) => {
  const router = useRouter()

  return <RARouterProvider navigate={router.push}>{children}</RARouterProvider>
}
