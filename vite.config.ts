import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

const __dirname = join(dirname(fileURLToPath(import.meta.url)), "")

const platform = process.env.VITE_PLATFORM

const getBundleName = (isProd) => {
  if (platform === 'android' || platform === 'ios') {
    return isProd ? `index.prod-${platform}.html` : `index.dev-${platform}.html`
  }

  return 'index.html'
}

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const bundleName = getBundleName(isProd)
  const inputFile = resolve(__dirname, bundleName);

  return { 
    plugins: [
      nodePolyfills(),
      react({
        jsxRuntime: 'classic',
      }),
      {
        name: 'rename',
        enforce: 'post',
        generateBundle(options, bundle) {
          bundle[bundleName].fileName = bundle[bundleName].fileName.replace(bundleName, 'index.html');
        }
      }
    ],
    resolve: {
      alias: [
        { find: /^~/, replacement: '/src/' },
        { find: /^\*/, replacement: 'shared/types/' }
      ],
    },
    build: {
      assetsDir: '',
      minify: false,
      sourcemap: true,
      rollupOptions: {
        input: {
          app: inputFile,
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true
    },
  };
});