import { makeStyles } from "@mui/styles";
const HeroStyle = makeStyles((theme) => ({
  root: {
    
  },
  heroContainer: {
    padding:"0 20px"
  },
  heroHeader: {
    fontWeight:"600",
    fontSize:"4rem",
    overflowWrap: "break-word",
    textAlign: "center",
    alignItems: "center",
    padding: "5rem",
    margin: "auto"

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
    borderRadius: "50px"
  }
}));

export default HeroStyle;
