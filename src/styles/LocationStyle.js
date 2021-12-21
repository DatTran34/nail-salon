import { makeStyles } from "@mui/styles";
const LocationStyle = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
  locationHeader: {
    fontWeight:"600",
    fontSize:"4rem",
    overflowWrap: "break-word",
    textAlign: "center",
    alignItems: "center",
    marginBottom: "5rem"
    // overflow-wrap: break-word;
  }
}));

export default LocationStyle;
