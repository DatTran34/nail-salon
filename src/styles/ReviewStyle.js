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
    width: "24rem",
    height: "35rem",
    backgroundColor: "#F87A13",
    borderRadius: "50px",

  },
  grid:{
    display: "flex",
    justifyContent: "center"
  }
}));

export default NailStyle;
