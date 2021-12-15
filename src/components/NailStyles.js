import { Grid } from "@mui/material";
import React from "react";
import NailStyle from "../styles/NailStyle";
function NailStyles() {
  const nailStyle = NailStyle();
  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <div className={nailStyle.title}>Nail Styles</div>
      <Grid container spacing={3} >
        <Grid item xs= {12} md= {4} className={nailStyle.grid}>
          <div className={nailStyle.image}>image</div>
        </Grid>
        <Grid item xs= {12} md= {4} className={nailStyle.grid}>
          <div className={nailStyle.image}>image</div>
        </Grid>
        <Grid item xs= {12} md= {4} className={nailStyle.grid}>
          <div className={nailStyle.image}>image</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default NailStyles;
