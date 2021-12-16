import { makeStyles } from "@mui/styles";
import { orangeColor, whiteColor ,grayColor} from "./Style";
const PriceTableStyle = makeStyles((theme) => ({
    root: {

    },
    priceTableContainer: {
        width: "20rem",
        background: whiteColor
    },
    priceTableHeader: {
        fontWeight:"700",
        padding: "20px",
        textAlign: "center",
        alignItems: "center",
        background: orangeColor,
        color: whiteColor
    },
    priceTableItem: {
        padding: "10px 20px",  
        borderBottom: `1px solid ${grayColor}`
    },
}));

export default PriceTableStyle;
