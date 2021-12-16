import { Grid, Stack } from "@mui/material";
import React from "react";
import NailStyle from "../styles/NailStyle";
import {images} from "../database/images";
import CustomizedButtons from "./CustomizedButtons";

function NailStyles() {
  const nailStyle = NailStyle();
  return (
    <Stack
      direction="column"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
    >
      <div className={nailStyle.title}>Nail Styles</div>
      <Grid container spacing={10} mb={5} >
        {images.map(({ id, src }) => (
          (id === 5 ? (
            <Grid item xs={12} md={4} key={id} className={nailStyle.grid}>
              <div className={nailStyle.image}>Pretty nails make me smile</div>
            </Grid>
          ) : (
            <Grid item xs={12} md={4} key={id} className={nailStyle.grid}>
              <img className={nailStyle.image} src={src} />
            </Grid>
          ))
        ))}
      </Grid>
      <CustomizedButtons type2>See more</CustomizedButtons>
    </Stack>
  );
}

export default NailStyles;
