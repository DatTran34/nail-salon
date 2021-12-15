import React from 'react'
import ServiceTabStyle from "../../styles/ServiceTabStyle";
function CustomizedTab({onChange, title, value}) {
    const serviceTabStyle = ServiceTabStyle();
    return (
        <div onClick={() => onChange(value)} className={serviceTabStyle.tab}>
            <div>{title}</div>
            <div className={serviceTabStyle.tabHeader}>{title}</div>
            <div>{title}</div>
        </div>
    )
}

export default CustomizedTab
