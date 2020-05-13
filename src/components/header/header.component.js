import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/cartIcon.component";
import CartDropDown from "../cartDropDown/cartDropDown.component";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/sign-in">Sign In</OptionLink>
        )}

        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
