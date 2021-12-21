import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Box, Stack } from "@mui/material";
import CustomizedTabContext from "../../components/Tab/CustomizedTabContext";
import CustomizedTabList from "../../components/Tab/CustomizedTabList";
import CustomizedTab from "../../components/Tab/CustomizedTab";
import ServiceTabStyle from "../../styles/ServiceTabStyle";
import CustomizedPriceTable from "../../components/CustomizedPriceTable";
import CustomizedBody from "../../components/CustomizedBody";
import CustomizedTabPanel from "../../components/Tab/CustomizedTabPanel";
import {data} from "../../database/data"
import Location from "../../components/Location"
import CustomizedTitle from "../../components/CustomizedTitle";


const NUMBER_OF_ITEMS_IN_A_PRICE_TABLE = 7

const HandlePriceMenu = ({ service }) => {
  let tables = []
  for (let i = 0; i < service.menu.length;) {
    let table = []
    for (let j = 0; j < NUMBER_OF_ITEMS_IN_A_PRICE_TABLE && i < service.menu.length; j++) {
      table.push(service.menu[i])
      i++
    }
    tables.push(table)
  }
  return (<>
    {
      tables.map((table, key) => {
        return (<CustomizedPriceTable serviceName={service.name} table={table}></CustomizedPriceTable>)
      })
    }
  </>)
}

function ServicePage() {
  const [value, setValue] = React.useState(1);
  const handleChange = (newValue) => {
    setValue(newValue);

  };
  const serviceTabStyle = ServiceTabStyle();
  return (
    <CustomizedBody>
      <NavBar></NavBar>
      {/* {data.services.menu.map((item,key) => {
                console.log(item)
              })} */}
      <div className={serviceTabStyle.serviceContainer} >
      <CustomizedTitle direction="row" >Our Service</CustomizedTitle>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <CustomizedTabContext value={value}>
            <CustomizedTabList onChange={handleChange}>
              {data.services.map((service, key) => {
                return (<CustomizedTab title={service.name} description={service.description} value={key + 1} key={key} ></CustomizedTab>)
              })}
            </CustomizedTabList>
            {data.services.map((service, key) => {
              return (<CustomizedTabPanel key={key} value={key+1}>
                <HandlePriceMenu service = {service} key={key}></HandlePriceMenu>           
              </CustomizedTabPanel>)
            })}
          </CustomizedTabContext>
        </Box>
            <Location></Location>
      </div>

    </CustomizedBody>

  );
}

export default ServicePage;
