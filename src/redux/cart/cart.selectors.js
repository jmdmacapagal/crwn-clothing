import { createSelector } from "reselect";

const selectCard = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCard],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItem) =>
    cartItem.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);