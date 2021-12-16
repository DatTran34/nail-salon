import React from 'react'

function CustomizedTabContext({value, children}) {   
    return (
        React.Children.map(children, child => {
            if (child.type.displayName || child.type.name  === "CustomizedTabPanel") {
              if (child.props.value === value) {
                return React.cloneElement(child);
              }
            }
            else{
                return React.cloneElement(child);
            }
        })
    )
    
}

export default CustomizedTabContext
