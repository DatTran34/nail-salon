import { Grid, Stack } from '@mui/material';
import React from 'react'
import LocationStyle from '../styles/LocationStyle'
import Geo from './Geo';
import {BsFillGeoAltFill} from "react-icons/bs"
import {ImPhone} from "react-icons/im"
import {data} from "../database/data"
import CustomizedTitle from './CustomizedTitle';
const StorePanel = ({name, address, phone}) => {
    return (
        <Stack direction="column" sx={{background: "#ffffff"}} p={2}>
            <div style={{fontWeight: "600", fontSize: "2rem"}}>{name}</div>
            <Stack direction="row" pt={1}>
                <BsFillGeoAltFill/>
                <div style={{fontWeight: "600", fontSize: "1rem", paddingLeft: "10px"}}>{address}</div>
            </Stack>
            <Stack direction="row" pt={1}>
                <ImPhone/>
                <div style={{fontWeight: "600", fontSize: "1rem", paddingLeft: "10px"}}>{phone}</div>
            </Stack>
        </Stack>
    )
}

const OpeningHourPanel = ({ }) => {
    return (<Stack direction="column" p={2}>
        <div style={{ fontWeight: "600", fontSize: "2rem" }}>Opening Hours</div>
        {data.openingHour.map((date, key) => {
            return (
                <Stack direction="row" pt={1}>
                     <div style={{ fontWeight: "700", fontSize: "1rem", paddingLeft: "10px" }}>{`${date.date} : `}</div>
                    <div style={{ fontWeight: "600", fontSize: "1rem", paddingLeft: "10px" }}>{date.time}</div>
                </Stack>)
        })}

    </Stack>)
}

function Location() {
    const locationStyle = LocationStyle()
    return (
        <div>
           <CustomizedTitle direction="row">Our Nail Stores</CustomizedTitle>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Stack direction="column">
                        <StorePanel name={"Nail Salon"} address={"sadasd"} phone={"15151313213"}/>
                        <OpeningHourPanel></OpeningHourPanel>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Geo/>
                </Grid>
            </Grid>

        </div>
    )
}

export default Location
