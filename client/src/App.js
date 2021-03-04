import React, { useEffect } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import Header from "./components/header/header.component";

//Higher order component HOC which gives superpowers to access the user slice of THE BIG STATE
import { connect } from "react-redux";

// import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

//we converted it class --> function due to useEffect hook
const App = ({ checkUserSession, currentUser }) => {
  // the below code is being handled in getCurrentUser in firebase.utils.js
  // unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  //the above code means that checkUserSession will be fired once as the other array in which we pass the checkUserSession means that only when there is a change there it will be called

  //this says that the user is still logged in and firebase knows that.. PERSISTENCE
  //so this is subscribed to our firebase db and whatever changes might occur here it gets reflected over there as well
  // //and this happens after componentDidMount
  // componentDidMount() {
  //   const { checkUserSession } = this.props;
  //   checkUserSession();
  // }

  // the below code is being handled in getCurrentUser in firebase.utils.js
  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  // render() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
  // }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

//here the dispatch automatically calls setCurrentUser which as action creator and returns a plain obj.
// and the  return value of mapDispatchtoProps is a object that gets added to the component props causing the react to rerender
// const mapDispatchToProps = dispatch => ({
//   setCurrentUser : user => dispatch(setCurrentUser(user))
// })

export default connect(mapStateToProps, { checkUserSession })(App);
// export default connect(mapStateToProps, mapDispatchToProps)(App);
