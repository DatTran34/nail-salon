import { makeStyles } from "@mui/styles";
const NavBarStyle = makeStyles((theme) => ({
  root: {
    flexGrow: "1"
  },
  appBar: {
    fontSize: "1rem",
    fontWeight: "500",
    display: "flex",
    flexDirection: "row",
    border: "0",
    borderRadius: "3px",
    padding: "0 3rem",
    color: "#383632",
    width: "100%",
    marginBottom: "20px",
    height: "80px",
    backgroundColor: "transparent",
    boxShadow: "none",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "collumn nowrap",
    justifyContent: "space-between",
    position: "fixed",
    zIndex: "1",
  },
  appBarSolid: {
    backgroundColor: '#ffffff',
    fontSize: "1rem",
    fontWeight: "500",
    display: "flex",
    flexDirection: "row",
    border: "0",
    borderRadius: "3px",
    padding: "0 3rem",
    color: "#383632",
    width: "100%",
    marginBottom: "20px",
    height: "80px",
    boxShadow: "none",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "collumn nowrap",
    justifyContent: "space-between",
    position: "fixed",
    zIndex: "1",
  },
  logo: {
    cursor: "pointer",
    userSelect: "none",
    width: "7em",
  },
  link: {
    cursor: "pointer",
  }
}));

export default NavBarStyle;