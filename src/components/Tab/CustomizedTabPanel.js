import React from 'react'
import CustomizedTab from "../../components/Tab/CustomizedTab";
import ServiceTabStyle from "../../styles/ServiceTabStyle";
function CustomizedTabPanel({children}) {
    const serviceTabStyle = ServiceTabStyle();
    return (
        <div className={serviceTabStyle.tabPanel}>
            {children}
        </div>
    )
}

export default CustomizedTabPanel
