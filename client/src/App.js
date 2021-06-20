import './App.css';

import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import CheckOutPage from './pages/check-out/check-out.component';
import { createStructuredSelector } from 'reselect';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/checkout" component={CheckOutPage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route
          path="/signin"
          render={() =>
            currentUser ? (
              <Redirect to="/"></Redirect>
            ) : (
              <SignInAndSignUpPage></SignInAndSignUpPage>
            )
          }
        ></Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionForPreview,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
