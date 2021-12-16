import React from 'react'
import ServiceTabStyle from "../../styles/ServiceTabStyle";
import a from "../../images/6.png"
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

function CustomizedTab({onChange, description, title, value}) {
    const serviceTabStyle = ServiceTabStyle();
    const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
    return (
        <div onClick={() => onChange(value)} className={serviceTabStyle.tab}>
            <img src={a}/>
            <div className={serviceTabStyle.tabHeader}>{title}</div>
            <div>{description}</div>
        </div>
    )
}

export default CustomizedTab
