import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../src/components/header/header.component";

import HomePage from "../src/pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import SignInAndSignUpPage from "../src/pages/signInAndSignUp/signInAndSignUp.component";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign-in" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
