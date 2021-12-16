import React from "react";
const CustomizedBody = React.forwardRef((props, ref) => {
  const {
    bg,
    children,
    ...rest
  } = props

  return (
    <div {...rest} ref={ref} style={{
        // backgroundImage: `url(${bg})`,
        // backgroundSize: "cover",
        backgroundColor: "#F4EDE5",
        paddingTop: "120px",
        paddingBottom: "50px",
        minHeight: "80vh",
        padding: "10rem"
      }}>
      {children}
    </div>
  );
});
export default CustomizedBody;