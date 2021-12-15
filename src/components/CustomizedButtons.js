import React from "react";

// nodejs library to set properties for components
import classNames from "classnames";

// @material-ui/core components
import Button from "@mui/material/Button";
// core components
import ButtonStyle from "../styles/ButtonStyle";

const CustomizedButtons = React.forwardRef((props, ref) => {
  
  const {
    model,
    fullwidth,
    type1,
    type2,
    type3,
    type4,
    height1,
    height2,
    children,
    setViewType,
    filterType,
    setFilterType,
    requestFilter,
    ...rest
  } = props;

  // Styles
  const classes = ButtonStyle();
  //const classes = makeComponentStyles();
  const btnClasses = classNames({
    [classes.fullwidth]: fullwidth,
    [classes.type1]: type1,
    [classes.type2]: type2,
    [classes.type3]: type3,
    [classes.type4]: type4,
    [classes.height1]: height1,
    [classes.height2]: height2,
    [classes.root]: true
  });

  return (
    <Button {...rest} ref={ref} className={btnClasses}>
      {children}
    </Button>
  );
});
CustomizedButtons.displayName = 'CustomizedButtons'
export default CustomizedButtons;