
import React from "react";
import CustomizedBody from "../../components/CustomizedBody";
import NavBar from "../../components/NavBar/NavBar";

import Hero from "../../components/Hero";
import NailStyles from "../../components/NailStyles";
import Reviews from "../../components/Reviews";
function HomePage() {

  return (
    <CustomizedBody>
      <NavBar></NavBar>
        <Hero></Hero>
        <NailStyles></NailStyles>
        <Reviews></Reviews>
    </CustomizedBody>
  );
}

export default HomePage;
