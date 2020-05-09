import React from "react";
import CustomButton from "../cusomButton/customButton.component";
import "./cartDropDown.styles.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />

      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
};

export default CartDropDown;
