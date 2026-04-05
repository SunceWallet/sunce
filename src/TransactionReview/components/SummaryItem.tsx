import React from "react"
import ListItem from "@material-ui/core/ListItem"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { HorizontalLayout } from "~Layout/components/Box"
import { ReadOnlyTextfield } from "~Generic/components/FormFields"

interface SummaryDetailsFieldProps {
  fullWidth?: boolean
  helperText?: React.ReactNode
  label: React.ReactNode
  style?: React.CSSProperties
  value: React.ReactNode
}

/** Based on TextField */
export const SummaryDetailsField = React.memo(function SummaryDetailsField(props: SummaryDetailsFieldProps) {
  const InputComponent = React.useCallback(() => <>{props.value}</>, [props.value])
  return (
    <ReadOnlyTextfield
      disableUnderline
      helperText={props.helperText}
      label={props.label}
      style={{ flex: props.fullWidth ? "0 0 100%" : "0 0 48%", marginBottom: "10px" }}
      InputProps={{
        inputComponent: InputComponent,
        style: {
          maxWidth: "100%",
          overflow: "hidden",
          wordBreak: "break-word",
          ...props.style
        }
      }}
      InputLabelProps={{
        style: {
          whiteSpace: "nowrap",
          textTransform: "none",
        }
      }}
    />
  )
})

const summaryDetailsLineStyle: React.CSSProperties = {
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginBottom: 8,
  width: "100%"
}

interface SummaryDetailsLineProps {
  children: React.ReactNode
}

function SummaryDetailsLine(props: SummaryDetailsLineProps) {
  return <HorizontalLayout style={summaryDetailsLineStyle}>{props.children}</HorizontalLayout>
}

const useSummaryItemStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "flex-start",
    borderBottom: "none",
    flexDirection: "column",
    padding: "1px 0"
  },
  heading: {
    display: "block",
    padding: "16px 0",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "18px",
    textAlign: "left"
  },
  noButton: {
    background: "transparent",
    boxShadow: "none !important"
  }
})

interface SummaryItemProps {
  children: React.ReactNode
  heading?: React.ReactNode
}

export function SummaryItem(props: SummaryItemProps) {
  const classes = useSummaryItemStyles()
  return (
    <ListItem className={classes.root} component="div" disableGutters>
      {props.heading ? (
        <Typography color="textSecondary" className={classes.heading} variant="subtitle1">
          {props.heading}
        </Typography>
      ) : null}
      <SummaryDetailsLine>{props.children}</SummaryDetailsLine>
    </ListItem>
  )
}
