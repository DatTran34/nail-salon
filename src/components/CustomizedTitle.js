import { Stack } from '@mui/material';
import React from 'react'
import { makeStyles } from '@mui/styles';
import { orangeColor } from "./../styles/Style";
import classNames from "classnames";
const TitleStyle = makeStyles((theme) => ({
  root: {
    fontWeight:"600",
    fontSize:"4rem",
    overflowWrap: "break-word",
    textAlign: "center",
    alignItems: "center"
  },
  primaryColor:{
    color: orangeColor
   
  },

}));


const CustomizedTitle = React.forwardRef((props, ref) => {
    const {
      direction,
      reverse,
      children,
      marginBottom,
      ...rest
    } = props;
      const titleStyle = TitleStyle();
     var text = children.split(" ");
     var backText = text.pop();
     var frontText = text.join(" ");

    const frontStyle = classNames({
      [titleStyle.root]:true,
      [titleStyle.primaryColor]: reverse
    });

    const backStyle = classNames({
      [titleStyle.root]:true,
      [titleStyle.primaryColor]: !reverse
    });

     
    return (
        <Stack
            direction={direction}
            spacing={2}
            justifyContent="center"
            marginBottom= "3rem"
        >
            <div className={frontStyle}>{frontText}</div>
            <div className={backStyle}>{backText}</div>
        </Stack>
    )
  });
  CustomizedTitle.displayName = 'CustomizedTitle'
  export default CustomizedTitle;
