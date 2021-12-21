import React from 'react'
import { makeStyles } from "@mui/styles";
function Marker({text, title}) {
    const markerStyle = MarkerStyle()
    return (
        <div className={markerStyle.circle}>
          {text}
      </div>
    )
}
const MarkerStyle = makeStyles((theme) => ({
    root: {
      flexGrow: "1",
    },
    circle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "600",
        fontSize: "1em",
        backgroundColor: "#d83b01",
        borderRadius: "50%",
        color: "#fff",
        height: "2.5em",
        position: "relative",
        width: "2.5em",
        border: "1px solid transparent",
    },
  }))
export default Marker
