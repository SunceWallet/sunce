import type { VitePWAOptions } from 'vite-plugin-pwa'

export const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  manifest: {
    name: 'Sunce Wallet',
    short_name: 'Sunce',
    description: 'Wallet for the Stellar payment network',
    id: '/',
    theme_color: '#000000',
    background_color: '#d7b047',
    display: 'standalone',
    start_url: '/',
    scope: '/',
    display_override: ['standalone', 'minimal-ui', 'window-controls-overlay'],
    protocol_handlers: [
      {
        protocol: 'web+stellar',
        url: '/%s',
      },
    ],
    icons: [
      {
        src: 'favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: 'screenshots/screenshot-wide.png',
        sizes: '1280x800',
        type: 'image/png',
        form_factor: 'wide',
      },
      {
        src: 'screenshots/screenshot-narrow.png',
        sizes: '540x720',
        type: 'image/png',
      },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
    globIgnores: ['**/favicons/*', '**/screenshots/*'],
  },
}
