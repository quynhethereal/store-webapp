import React from 'react'
import {ReactComponent as ShopIcon} from '../../assets/cart.svg'

import '../cart-icon/cart-icon.styles.scss'

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShopIcon className="shopping-icon">

        </ShopIcon>
        <span className="item-count"></span>
    </div>
)


const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}
    
)

export default connect(null,mapDispatchToProps)(CartIcon);