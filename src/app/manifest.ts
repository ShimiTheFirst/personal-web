import { MetadataRoute } from 'next'

import { META } from '-config/metadata'

// part of the app icon solution
// inspired by https://www.davegray.codes/posts/nextjs-favicon-svg-icon-apple-chrome

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: META.title,
    short_name: META.titleShort,
    description: META.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#2E1C2B',
    theme_color: '#2E1C2B',
    icons: [
      {
        src: '/appIcons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/appIcons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

export default manifest
