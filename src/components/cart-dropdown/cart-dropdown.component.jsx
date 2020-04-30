import React from 'react';

//connect to store
import { connect } from 'react-redux'

//components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../../components/cart-item/cart-item.component'

//styles
import './cart-dropdown.styles.scss'

//actions

const CartDropdown = ({ cartItems }) => (

    <div className="cart-dropdown">
        <div className="cart-items" >

            {
                cartItems.map(
                    cartItem => (<CartItem key={cartItem.id} item={cartItem}></CartItem>)
                )
            }

        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>

);

//connect to store -- redux - store.js and get the state and put to props in CartDropDown 
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);