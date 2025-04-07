import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import StarIcon from "@material-ui/icons/Star"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff"
import { useAssetSettings } from "~Generic/hooks/useAssetSettings"
import { Asset } from "@stellar/stellar-sdk"
import { stringifyAsset } from "~Generic/lib/stellar"

const useStyles = makeStyles({
  visibilityIcon: {
    color: "rgba(0, 0, 0, 0.54)",
    "&.favorite": {
      color: "#FFD700"
    },
    "&.hidden": {
      color: "rgba(0, 0, 0, 0.38)"
    }
  },
  visibilityIconContainer: {
    marginRight: 8,
    display: "inline-flex",
    alignItems: "center"
  }
})

interface Props {
  accountId: string
  asset: Asset
}

function VisibilityIconButton(props: Props) {
  const classes = useStyles()
  const { assetSettings, toggleVisibilityMode } = useAssetSettings(props.accountId)

  const visibilityMode = assetSettings[stringifyAsset(props.asset)]?.visibility

  const iconClass = `${classes.visibilityIcon} ${visibilityMode || ""}`
  let icon

  switch (visibilityMode) {
    case "favorite":
      icon = <StarIcon className={iconClass} />
      break
    case "hidden":
      icon = <VisibilityOffIcon className={iconClass} />
      break
    default:
      icon = <StarBorderIcon className={iconClass} />
  }

  return (
    <div className={classes.visibilityIconContainer}>
      <IconButton
        size="small"
        onClick={(e) => {
          e.stopPropagation()
          toggleVisibilityMode(props.asset)
        }}
      >
        {icon}
      </IconButton>
    </div>
  )
}

export default React.memo(VisibilityIconButton) 