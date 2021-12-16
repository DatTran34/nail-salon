import { makeStyles } from "@mui/styles";
import { whiteColor } from "./Style";
const ServiceTabStyle = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
  serviceContainer:{
    padding:"5rem"
  },
  serviceHeader: {
    fontWeight:"600",
    fontSize:"4rem",
    overflowWrap: "break-word",
    textAlign: "center",
    alignItems: "center",
    marginBottom: "5rem"
    // overflow-wrap: break-word;
  },
  tabList: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "collumn nowrap",
    justifyContent: "center",
  },
  tab: {
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    width:"15rem",
    padding:"20px",
    "&:hover, &.Mui-focusVisible": { backgroundColor: whiteColor }
  },
  tabHeader: {
    fontWeight: "700",
    fontSize: "1.5rem"
  },
  tabPanel:{
    margin: "5rem 0",
    display:"flex",
    direction:"row",
    justifyContent:"space-between",
    alignItems:"center",
  }
}));

export default ServiceTabStyle;
