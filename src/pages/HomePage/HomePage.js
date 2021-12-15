
import React from "react";
import CustomizedBody from "../../components/CustomizedBody";
import NavBar from "../../components/NavBar/NavBar";


import Hero from "../../components/Hero";
import NailStyles from "../../components/NailStyles";
function HomePage() {

  return (
    <CustomizedBody>
      <NavBar></NavBar>
        <Hero></Hero>
        <NailStyles></NailStyles>
    </CustomizedBody>
  );
}

export default HomePage;
