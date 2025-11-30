import React from "react"
import IconButton from "@material-ui/core/IconButton"
import Typography, { TypographyProps } from "@material-ui/core/Typography"
import ArrowBackIcon from "@material-ui/icons/KeyboardArrowLeft"
import { useIsMobile } from "../hooks/userinterface"
import { Box, HorizontalLayout, VerticalLayout } from "~Layout/components/Box"

interface BackButtonProps {
  onClick: () => void
  style?: React.CSSProperties
}

// React.memo()-ing, since for some reason re-rendering the KeyboardArrowLeft icon is slow
const BackButton = React.memo(function BackButton(props: BackButtonProps) {
  const style = {
    padding: 6,
    height: 48,
    fontSize: 32,
    ...props.style
  }
  return (
    <IconButton color="inherit" onClick={props.onClick} style={style}>
      <ArrowBackIcon style={{ fontSize: 32 }} />
    </IconButton>
  )
})

interface Props {
  actions?: React.ReactNode
  badges?: React.ReactNode
  hideBackButton?: boolean
  nowrap?: boolean
  onBack: () => void
  style?: React.CSSProperties
  title: React.ReactNode
  secondaryTitle?: React.ReactNode
  titleColor?: TypographyProps["color"]
  titleStyle?: React.CSSProperties
}

function MainTitle(props: Props) {
  const isSmallScreen = useIsMobile()

  const backButtonStyle = React.useMemo(
    () => ({
      fontSize: 28,
      flexGrow: 0,
      flexShrink: 0,
      marginLeft: isSmallScreen ? -12 : -4,
      marginRight: 6
    }),
    [isSmallScreen]
  )

  return (
    <HorizontalLayout
      alignItems="center"
      wrap={isSmallScreen && !props.nowrap ? (props.hideBackButton ? "wrap-reverse" : "wrap") : "nowrap"}
      style={{ minHeight: isSmallScreen ? undefined : 50, ...props.style }}
    >
      {props.hideBackButton ? null : <BackButton onClick={props.onBack} style={backButtonStyle} />}
      <HorizontalLayout
        alignItems="center"
        grow={1}
        maxWidth="100%"
      >
        <VerticalLayout style={{
          flexGrow: 1,
          flexShrink: 1,
          fontSize: isSmallScreen ? 20 : 24,
          height: 50,
          marginRight: 12,
          minWidth: "40%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          justifyContent: "center",
        }}>
          <Typography
            variant="h5"
            color={props.titleColor}
            style={{
              fontSize: "1.4rem",
              lineHeight: "1rem",
              ...props.titleStyle
            }}
          >
            {props.title}
          </Typography>
          {props.secondaryTitle && <Typography style={{ fontSize: "0.8.rem" }}>
            {props.secondaryTitle}
          </Typography>}
        </VerticalLayout>
        {props.badges}
      </HorizontalLayout>
      <Box style={{ textAlign: "right" }}>
        {props.actions}
      </Box>
    </HorizontalLayout>
  )
}

export default MainTitle
