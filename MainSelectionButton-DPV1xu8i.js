import { R as React, Y as makeStyles, bK as Button, E as Typography, bC as theme, aa as primaryBackgroundColor } from "./app-DBEXmgIl.js";
import { N as RightIcon } from "./app-stage2-CwdMAbKU.js";
const useMainSelectionButtonStyles = makeStyles({
  root: {
    background: "white",
    maxWidth: 380,
    padding: "16px 24px",
    position: "relative",
    textAlign: "left",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.02)"
    },
    "&$primary:hover": {
      backgroundColor: theme.palette.primary.main
    }
  },
  primary: {
    backgroundColor: primaryBackgroundColor,
    borderColor: "rgba(255, 255, 255, 0.15)",
    color: "white"
  },
  dense: {
    // Only used in conjunction with other classes
  },
  buttonLabel: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    textTransform: "initial"
  },
  description: {
    fontSize: 16,
    marginTop: 4,
    paddingLeft: 48,
    "$dense &": {
      marginTop: 0
    },
    "$primary &": {
      color: "white",
      opacity: 0.95
    },
    "$root$primary:hover &": {
      textShadow: "0 0 0.05em rgba(0, 0, 0, 0.25)"
    }
  },
  gutterBottom: {
    marginBottom: 16
  },
  heading: {
    color: theme.palette.primary.dark,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.4,
    paddingLeft: 48,
    transition: `color ${theme.transitions.duration.short}ms`,
    "$primary &, $root$primary:hover &": {
      color: "white"
    },
    "$root$primary:hover &": {
      textShadow: "0 0 0.02em rgba(0, 0, 0, 0.5)"
    },
    "$root:hover &": {
      color: primaryBackgroundColor
    }
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: 16,
    color: "rgba(0, 0, 0, 0.5)",
    marginTop: -20,
    opacity: 0.8,
    transition: `color ${theme.transitions.duration.short}ms`,
    height: 40,
    width: 40,
    "$primary &, $root$primary:hover &": {
      background: "white",
      borderRadius: "50%",
      boxSizing: "border-box",
      color: primaryBackgroundColor,
      opacity: 1,
      padding: 6
    },
    "$root:hover &": {
      color: primaryBackgroundColor
    },
    "$root$primary:hover &": {
      color: theme.palette.primary.main
    }
  }
});
function MainSelectionButton(props) {
  const classes = useMainSelectionButtonStyles();
  const Icon = props.Icon || RightIcon;
  return /* @__PURE__ */ React.createElement(
    Button,
    {
      classes: {
        root: [
          classes.root,
          props.className,
          props.dense ? classes.dense : "",
          props.gutterBottom ? classes.gutterBottom : "",
          props.variant === "primary" ? classes.primary : ""
        ].join(" "),
        label: classes.buttonLabel
      },
      onClick: props.onClick,
      style: props.style,
      variant: "outlined"
    },
    /* @__PURE__ */ React.createElement(Icon, { className: classes.icon }),
    /* @__PURE__ */ React.createElement(Typography, { className: classes.heading, variant: "h6" }, props.label),
    /* @__PURE__ */ React.createElement(Typography, { className: classes.description, color: "textSecondary", variant: "body1" }, props.description)
  );
}
const MainSelectionButton$1 = React.memo(MainSelectionButton);
export {
  MainSelectionButton$1 as M
};
//# sourceMappingURL=MainSelectionButton-DPV1xu8i.js.map
