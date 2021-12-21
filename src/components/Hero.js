import React from "react";
import { Grid, Stack } from "@mui/material";
import modelImage from "../images/model.png";
import CustomizedButtons from "../components/CustomizedButtons";
import HeroStyle from "../styles/HeroStyle";
import CustomizedTitle from './CustomizedTitle';
function Hero() {
    const heroStyle = HeroStyle();
  return (
    <div>
      <Grid container spacing={4} className={heroStyle.heroContainer}>
        <Grid item xs={7}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <CustomizedTitle direction="column">We are looking to make you beautiful</CustomizedTitle>
            <div className={heroStyle.heroContent}>
              If you’ve ever wondered what nailstyles suit you and how you
              should have gorgeous nails, here is a list of top styles for you.
            </div>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <div style={{ position: "relative" }}>
            <img className={heroStyle.image} src={`${modelImage}`} />
            <CustomizedButtons type3>Explore</CustomizedButtons>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
