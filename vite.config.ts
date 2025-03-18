import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import nunjucks from 'vite-plugin-nunjucks'
import { nodeResolve } from '@rollup/plugin-node-resolve';

import { dirname, resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

const __dirname = join(dirname(fileURLToPath(import.meta.url)), "")
const __distdir = join(dirname(fileURLToPath(import.meta.url)), "dist")

const platform = process.env.VITE_PLATFORM

const variables = { 
  rootDir: __dirname,
}

const getBundleName = (isProd) => {
  if (platform === 'android' || platform === 'ios') {
    return isProd ? `index.prod-${platform}.njk.html` : `index.dev-${platform}.njk.html`
  }

  return isProd ? 'index.prod.njk.html' :'index.dev.njk.html'
}

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const bundleName = join("src", getBundleName(isProd))
  const inputFile = resolve(__dirname, bundleName);

  console.log(bundleName, inputFile)

  return { 
    root: __dirname,
    plugins: [
      nodePolyfills(),
      nunjucks({
        variables: {
          inputFile: variables
        }
      }) as PluginOption,
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
      outDir: __distdir,
      rollupOptions: {
        input: {
          app: inputFile,
        },
      },
    },
    esbuild: {
      supported: {
        'top-level-await': true
      },
    },
    server: {
      host: '0.0.0.0',
      port: 1234,
    },
  };
});