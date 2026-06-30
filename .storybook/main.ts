import { resolve } from "node:path"
import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.story.@(ts|tsx)"],
  addons: ["@storybook/addon-actions"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(config) {
    const optimizeDepsInclude = config.optimizeDeps?.include?.filter(
      dependency => dependency !== "react/jsx-runtime" && dependency !== "react/jsx-dev-runtime"
    )

    return {
      ...config,
      define: {
        ...config.define,
        global: "globalThis"
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: optimizeDepsInclude,
        exclude: [...(config.optimizeDeps?.exclude || []), "react/jsx-runtime", "react/jsx-dev-runtime"]
      },
      resolve: {
        ...config.resolve,
        alias: [
          ...(Array.isArray(config.resolve?.alias) ? config.resolve.alias : []),
          { find: "react/jsx-runtime", replacement: resolve(__dirname, "./react-jsx-runtime.ts") },
          { find: "react/jsx-dev-runtime", replacement: resolve(__dirname, "./react-jsx-dev-runtime.ts") },
          { find: "eventsource", replacement: resolve(__dirname, "../src/Platform/eventsource.cjs") },
          { find: /^~/, replacement: `${resolve(__dirname, "../src")}/` },
          { find: /^\*/, replacement: `${resolve(__dirname, "../shared/types")}/` }
        ]
      }
    }
  }
}

export default config
