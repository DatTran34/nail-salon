import { makeStyles } from "@mui/styles";
const NailStyle = makeStyles((theme) => ({
  heroContainer: {
    padding:"20px"
  },
  title: {
    fontWeight:"600",
    fontSize:"4rem",
    overflowWrap: "break-word",
    textAlign: "center",
    alignItems: "center",
    padding: "5rem 10rem",
    // overflow-wrap: break-word;
  },
  heroContent: {
    fontSize:"1.25rem",
    overflowWrap: "break-word",
    textAlign: "center",
    alignItems: "center",
    padding: "0 4rem",
    // overflow-wrap: break-word;
  },
  image: {
    width: "22rem",
    height: "22rem",
    backgroundColor: "#F87A13",
  },
  grid:{
    display: "flex",
    justifyContent: "center"
  }
}));

export default NailStyle;
