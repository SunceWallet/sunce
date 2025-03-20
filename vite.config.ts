import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

const __dirname = join(dirname(fileURLToPath(import.meta.url)), "")

const platform = process.env.VITE_PLATFORM

const getBundleName = (isProd) => {
  if (platform === 'android' || platform === 'ios') {
    return isProd ? `entries/prod/${platform}/index.html` : `entries/dev/${platform}/index.html`
  }

  return 'index.html'
}

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const env = isProd ? 'prod' : 'dev';
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
          if (bundleName !== '/index.html') {
            bundle[bundleName].fileName = bundle[bundleName].fileName.replace(bundleName, `index.${env}-${platform}.html`);
          }
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
          web: "/index.html"
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
  };
});