import { makeStyles } from '@mui/styles';
import {  whiteColor,  orangeColor } from "./Style";
const ButtonStyle = makeStyles((theme) => ({
  root: {
    minHeight: "auto",
    minWidth: "auto",
    textTransform: "unset",
    borderRadius: "0",
    fontWeight: "600",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
  },
  displayNone:{
    display : "none",
  },
  fullwidth: {
    width: "100%"
  },
  type1: { 
    color: 'black',
    // "&:hover, &.Mui-focusVisible": { backgroundColor: "#222" }
  },
  type2: {
    padding: "0.25rem 3rem",
    backgroundColor: orangeColor,
    color: whiteColor,
    fontSize: "1rem"
  },
  type3: {
    position: "absolute",
    padding: "0.75rem 3rem",
    left: "-5rem",
    top: "33rem",
    color: "#FFFFFF",
    fontSize: "1.5rem",
    background: "rgba(248, 122, 19, 0.15)",
    border: "3px solid #F87A13",
    boxSizing: "border-box",
    backdropFilter: "blur(50px)",
    borderRadius: "50px",
    mixBlendMode: "normal",
  },
  type4: {
    backgroundColor: "transparent",
    color: orangeColor,
  },
}));


export default ButtonStyle;

