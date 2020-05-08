import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
