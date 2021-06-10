import React from 'react';
import '../header/header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CardDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo"></Logo>
    </Link>

    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>

      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon></CartIcon>
    </div>
    {hidden ? null : <CardDropdown></CardDropdown>}
  </div>
);
// state = root reducer (which will contact the store state for current)
const mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser,hidden:selectCartHidden})
export default connect(mapStateToProps)(Header);
