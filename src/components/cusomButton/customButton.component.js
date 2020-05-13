import React from "react";
import { CustomButtonContainer } from "./customButton.styles";

const CustomButton = ({ children }, ...otherProps) => {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
