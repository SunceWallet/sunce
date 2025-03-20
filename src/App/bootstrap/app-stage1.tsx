import React from "react"
import { createRoot } from "react-dom/client"
import { HashRouter as Router } from "react-router-dom"
import { MuiThemeProvider } from "@material-ui/core/styles"
import ViewLoading from "~Generic/components/ViewLoading"
import { ContextProviders } from "./context"
import theme from "../theme"

 const Stage2 = React.lazy(() => import("./app-stage2"))

export const Providers = (props: { children: React.ReactNode }) => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <ContextProviders>{props.children}</ContextProviders>
    </MuiThemeProvider>
  </Router>
)

const App = () => (
  <Providers>
    <React.Suspense fallback={<ViewLoading />}>
      <Stage2 />
    </React.Suspense>
  </Providers>
)

createRoot(document.getElementById("app")).render(React.createElement(App))