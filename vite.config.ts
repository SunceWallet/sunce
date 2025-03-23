import os from "os"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { nodePolyfills } from '@troggy/vite-plugin-node-polyfills'


const __dirname = join(dirname(fileURLToPath(import.meta.url)), "")

const platform = process.env.VITE_PLATFORM

const isCordova = platform === 'android' || platform === 'ios'
const isDesktop = ['darwin', 'linux', 'windows'].indexOf(platform || '') >= 0

const getBundleName = (isProd: boolean) => {
  if (isCordova) {
    return isProd ? `index.prod-${platform}.html` : `index.dev-${platform}.html`
  }

  return 'index.html'
}

const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    for (const net of interfaces[interfaceName]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return '127.0.0.1'; // Default fallback
}

const localIp = getLocalIP()
process.env.VITE_LOCAL_IP = localIp


export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const env = isProd ? 'prod' : 'dev';
  const bundleName = getBundleName(isProd)
  const inputFile = resolve(__dirname, bundleName);
  const distDir = resolve(__dirname, "dist");

  return {
    base: "./",
    plugins: [
      nodePolyfills(),
      react({
        jsxRuntime: 'classic',
      }),
      {
        name: 'rename',
        enforce: 'post',
        generateBundle(options, bundle) {
          if (bundleName !== '/index.html' && isCordova) {
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
      minify: true,
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