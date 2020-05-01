import React from 'react';
import { connect } from 'react-redux'

import './checkout-item.styles.scss'

//actions
import { clearItemFromCart, addItemAction, removeItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartItem, clearItemProp, addItemProp, removeItemProp }) => {

    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItemProp(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow"  onClick={() => addItemProp(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">£{price}</span>
            <div className="remove-button" onClick={() => clearItemProp(cartItem)}>&#10005;</div>
        </div>)
}

//  A variable mapDispatchToProps, 
// has a dispatch function inside
// that has an object with a property clearItemProp (with a parameter if item) 
// with a value of a function dispatch() -- dispatching it to action.js
// which takes a value of the action clearItemFromCart 
// with a value of the item

// clearItemProp is now a property that can be passed on to CheckoutItem

const mapDispatchToProps = dispatch => ({
    clearItemProp: item => dispatch(clearItemFromCart(item)),
    addItemProp: item => dispatch(addItemAction(item)),
    removeItemProp: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);