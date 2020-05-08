import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../src/components/header/header.component";
import HomePage from "../src/pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import SignInAndSignUpPage from "../src/pages/signInAndSignUp/signInAndSignUp.component";
import "./App.css";

import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
