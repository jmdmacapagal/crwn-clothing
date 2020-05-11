import React from "react";
import "./checkoutItem.styles.scss";
import { connect } from "react-redux";
import { deleteItem, addItem, removeItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, deleteItem, addItem, removeItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#60;
        </div>
        <span>{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#62;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { deleteItem, addItem, removeItem })(CheckoutItem);
