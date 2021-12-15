import React from "react";
import ServiceTabStyle from "../../styles/ServiceTabStyle";
function CustomizedTabList({ onChange, children }) {
  const serviceTabStyle = ServiceTabStyle();
  return (
    <div className={serviceTabStyle.tabList}>
      {React.Children.map(children, (child) => {
        if (child.type.displayName || child.type.name === "CustomizedTab") {
          return React.cloneElement(child, { onChange });
        }
      })}
    </div>
  );
}

export default CustomizedTabList;
