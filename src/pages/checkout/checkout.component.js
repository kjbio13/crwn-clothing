import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

//selectors
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

//components
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
            )
        }

        <div className="total">
            <span>TOTAL: £{total}</span>
        </div>

    </div>

);

const mapStatesToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStatesToProps)(CheckoutPage);