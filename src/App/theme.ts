import { createMuiTheme } from "@material-ui/core/styles"
import createBreakpoints from "@material-ui/core/styles/createBreakpoints"
import Fade from "@material-ui/core/Fade"
import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import amber from "@material-ui/core/colors/amber"
import lightBlue from "@material-ui/core/colors/lightBlue"
import grey from "@material-ui/core/colors/grey"
import { SlideLeftTransition, SlideUpTransition } from "../Generic/components/Transitions"

// TODO: The dark and light derivation of the brand color have not been design-reviewed!
export const brandColor = {
  dark: "#d6a400",
  main: "#ebbe2c",
  main15: "#ebbe2c26",
  light: "#f8e091"
}

export const primaryBackground = "linear-gradient(to left bottom, #ebbe2c, #d6a400)"
export const primaryBackgroundColor = "#f8ab5e"

export const warningColor = amber["500"]

export const breakpoints = createBreakpoints({})

export const FullscreenDialogTransition = SlideLeftTransition
export const CompactDialogTransition = SlideUpTransition

const isSmallScreen = window.innerWidth <= 600

const theme = createMuiTheme({
  props: {
    MuiDialogActions: {
      // disableSpacing: true
    },
    MuiInputLabel: {
      required: false,
      shrink: true
    },
    MuiMenu: isSmallScreen
      ? {
          BackdropProps: {
            open: true
          },
          TransitionComponent: Fade,
          transitionDuration: 300,
          transformOrigin: {
            horizontal: "center",
            vertical: "center"
          }
        }
      : undefined,
    MuiSelect: {
      IconComponent: ArrowDownIcon
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
        boxShadow: "none",
        minHeight: 48,

        [breakpoints.down(600)]: {
          minHeight: 36
        }
      },
      contained: {
        backgroundColor: "white",
        boxShadow: "none",
        border: `none`,
        color: brandColor.dark,

        "&:hover": {
          backgroundColor: "#F8F8F8"
        },

        [breakpoints.down(600)]: {
          boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.1)"
        }
      },
      containedPrimary: {
        "&$disabled": {
          backgroundColor: brandColor.main,
          border: "none",
          boxShadow: "none",
          color: "rgba(255, 255, 255, 0.7)"
        },
        "&:hover": {
          backgroundColor: "#ebbe2c"
        }
      },
      textPrimary: {
        color: brandColor.dark
      },
      outlinedSecondary: {
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.87)",
        boxShadow: "none",
        color: "white",

        "&:disabled": {
          opacity: 0.5
        },
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.10)",
          borderColor: "white"
        }
      }
    },
    MuiCardContent: {
      root: {
        [breakpoints.down(600)]: {
          padding: 8
        }
      }
    },
    MuiDialog: {
      root: {
        WebkitOverflowScrolling: "touch"
      },
      paperFullScreen: {
        backgroundColor: "#fcfcfc",
        boxSizing: "border-box"
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: 12,
        fontWeight: 600,
        textTransform: "uppercase",
        "&$focused": {
          color: "inherit !important"
        }
      }
    },
    MuiInput: {
      root: {
        lineHeight: "27px"
      },
      formControl: {
        "label + &": {
          marginTop: 12
        }
      },
      inputMultiline: {
        lineHeight: "24px"
      }
    },
    MuiInputBase: {
      root: {
        fontSize: 18,
        fontWeight: 300,
        [breakpoints.down(400)]: {
          fontSize: 16
        }
      }
    },
    MuiInputLabel: {
      formControl: {
        [breakpoints.down(600)]: {
          fontSize: "0.85rem"
        },
        [breakpoints.down(400)]: {
          fontSize: "0.75rem"
        }
      }
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: lightBlue["100"]
      },
      barColorPrimary: {
        backgroundColor: lightBlue.A200
      }
    },
    MuiList: {
      root: {
        paddingLeft: 8,
        paddingRight: 8,
        [breakpoints.down(600)]: {
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    },
    MuiListItem: {
      root: {
        borderBottom: "1px solid rgba(0,0,0,0.04)",

        [breakpoints.down(600)]: {
          paddingLeft: 8,
          paddingRight: 8
        },
        "& + hr": {
          borderBottom: "none"
        }
      },
      button: {
        background: "#FFFFFF",
        boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.1)",

        "&:focus:not($selected)": {
          backgroundColor: "#FFFFFF"
        },
        "&:hover": {
          backgroundColor: "#F8F8F8",

          [breakpoints.down(600)]: {
            backgroundColor: "#FFFFFF"
          }
        },
        "&:first-child": {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8
        },
        "&:last-child": {
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8
        }
      }
    },
    MuiListItemText: {
      primary: {
        display: "block"
      }
    },
    MuiListSubheader: {
      root: {
        [breakpoints.down(600)]: {
          paddingLeft: 8,
          paddingRight: 8
        }
      },
      sticky: {
        background: "linear-gradient(to bottom, white 0%, white 70%, rgba(255, 255, 255, 0) 100%)"
      }
    },
    MuiMenu: {
      paper: {
        [breakpoints.down(600)]: {
          backgroundColor: "white",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          bottom: "0 !important",
          left: "0 !important",
          right: "0 !important",
          top: "initial !important",
          maxWidth: "100vw",
          position: "fixed",

          // declaring these here because passing a className into MuiMenu-props does not work as the styles of that class are overridden several times
          "&": {
            // iOS 11
            paddingBottom: "constant(safe-area-inset-bottom)"
          },
          // iOS 12
          paddingBottom: "env(safe-area-inset-bottom)"
        }
      },
      list: {
        padding: 0
      }
    } as any,
    MuiMenuItem: {
      root: {
        borderBottom: "none",
        [breakpoints.down(600)]: {
          fontSize: 20,
          padding: 16
        }
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 8
      }
    },
    MuiSwitch: {
      colorSecondary: {
        color: grey[50],
        "&$checked": {
          color: grey[50]
        },
        "&$checked + $track": {
          backgroundColor: grey[50]
        }
      }
    },
    MuiTab: {
      root: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.2s",
        "&$selected": {
          backgroundColor: brandColor.main,
          color: "white",
          "&:hover": {
            // Don't change color of already-selected tab
            backgroundColor: brandColor.main
          }
        },
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.15)"
        }
      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: "rgba(255, 255, 255, 0)"
      }
    },
    MuiTypography: {
      h6: {
        fontWeight: 400
      }
    }
  },
  palette: {
    primary: {
      contrastText: "black",
      dark: brandColor.dark,
      main: brandColor.main,
      light: brandColor.light
    }
  },
  shape: {
    borderRadius: 8
  }
})

export default theme

const initialScreenHeight = window.screen.height

// CSS media query selector to detect an open keyboard on iOS + Android
export const MobileKeyboardOpenedSelector =
  import.meta.env.VITE_PLATFORM === "ios" || import.meta.env.VITE_PLATFORM === "android"
    ? () => `@media (max-height: ${initialScreenHeight - 100}px)`
    : () => `:not(*)`
