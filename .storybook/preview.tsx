import React from "react"
import type { Preview } from "@storybook/react"
import { MemoryRouter } from "react-router-dom"
import { MuiThemeProvider } from "@material-ui/core/styles"
import theme from "../src/App/theme"
import "../src/App/i18n"
import "../src/App/css/fonts.css"
import "../src/App/css/base-styles.css"

const preview: Preview = {
  decorators: [
    Story => (
      <MemoryRouter>
        <MuiThemeProvider theme={theme}>
          <React.Suspense fallback={null}>
            <Story />
          </React.Suspense>
        </MuiThemeProvider>
      </MemoryRouter>
    )
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
