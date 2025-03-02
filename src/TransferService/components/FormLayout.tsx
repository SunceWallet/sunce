import React from "react"
import { VerticalLayout } from "~/src/Layout/components/Box"

interface FormLayoutProps {
  children: React.ReactNode
  wrap?: boolean
}

function FormLayout(props: FormLayoutProps) {
  return <VerticalLayout>{props.children}</VerticalLayout>
}

export default React.memo(FormLayout)
