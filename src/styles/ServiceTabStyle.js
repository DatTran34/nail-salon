import { makeStyles } from "@mui/styles";
const ServiceTabStyle = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
  tabList: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "collumn nowrap",
    justifyContent: "space-between",
  },
  tab: {
    display:"flex",
    border: "1px solid black",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    cursor: "pointer",
  },
  tabHeader: {
    fontWeight: "700",
    fontSize: "1.5rem"
  }
}));

export default ServiceTabStyle;
