import './App.css';

import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
