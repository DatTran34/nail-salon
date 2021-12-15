import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Box ,Tab} from "@mui/material";
import {TabContext, TabList,TabPanel} from '@mui/lab';
import CustomizedTabContext from "../../components/Tab/CustomizedTabContext";
import CustomizedButtons from "../../components/CustomizedButtons";
import CustomizedTabList from "../../components/Tab/CustomizedTabList";
import CustomizedTab from "../../components/Tab/CustomizedTab";

function ServicePage() {
    const [value, setValue] = React.useState('1');

    const handleChange = (newValue) => {
      setValue(newValue);
      
    };
  return (
    <div>
     <Box sx={{ padding:"10px", width: "100%", typography: "body1" }}>
     <CustomizedTabContext value = {value}>
          <CustomizedTabList onChange={handleChange}>
            <CustomizedTab title="Item One" value="1"></CustomizedTab>
            <CustomizedTab title="Item Two" value="2"></CustomizedTab>
            <CustomizedTab title="Item Three" value="3"></CustomizedTab>
          </CustomizedTabList>
         <CustomizedButtons value = "1">Item One</CustomizedButtons>
         <CustomizedButtons value = "2">Item Two</CustomizedButtons>
         <CustomizedButtons value = "3">Item Three</CustomizedButtons>
     </CustomizedTabContext>
     </Box>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default ServicePage;
