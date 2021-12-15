import { AppBar, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import NavBarStyle from "../../styles/NavBarStyle";
import { whiteColor } from "../../styles/Style";
import CustomizedButtons from "../CustomizedButtons";


function NavBar() {
  
  const [navBackground, setNavBackground] = useState('appBarTransparent')
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
      const handleScroll = () => {
          const show = window.scrollY > 20
          if (show) {
              setNavBackground('appBarSolid')
          } else {
              setNavBackground('appBar')
          }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
          document.removeEventListener('scroll', handleScroll)
      }
  }, [])
  const nav = NavBarStyle();
  return (
    <div className={nav.root}>
      <AppBar
        className={nav[navRef.current]}
      >
        <CustomizedButtons type1>Hello</CustomizedButtons>
        <Stack
          direction="row" justifyContent="space-between" minWidth="20rem"
        >
          <div className={nav.link}>Home</div>
          <div className={nav.link}>Service</div>
          <div className={nav.link}>About Us</div>
        </Stack>
        <CustomizedButtons type2>Call now</CustomizedButtons>
      </AppBar>
    </div>
  );
}

export default NavBar;
