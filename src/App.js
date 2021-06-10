import './App.css';

import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import React from 'react';
import { createUserProfileDoc } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import CheckOutPage from './pages/check-out/check-out.component';
import { createStructuredSelector } from 'reselect';
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snapshot) => {
          console.log(snapshot);
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  render() {
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
              this.props.currentUser ? (
                <Redirect to="/"></Redirect>
              ) : (
                <SignInAndSignUpPage></SignInAndSignUpPage>
              )
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
