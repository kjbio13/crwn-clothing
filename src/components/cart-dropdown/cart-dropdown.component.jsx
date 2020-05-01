import React from 'react';

//router
import { withRouter } from 'react-router-dom';

//connect to store
import { connect } from 'react-redux'

//actions
import { toggleCartHidden } from '../../redux/cart/cart.actions'

//components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../../components/cart-item/cart-item.component'

//selectors
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'

//styles
import './cart-dropdown.styles.scss'

//actions

const CartDropdown = ({ cartItems, history, dispatch }) => (

    <div className="cart-dropdown">
        <div className="cart-items" >

            {
                cartItems.length ? //0 is equal to false
                    cartItems.map(
                        cartItem => (<CartItem key={cartItem.id} item={cartItem}></CartItem>)
                    )
                    :
                    <span className="empty-message">Your cart is empty</span>
            }

        </div>
        <CustomButton onClick={
            () => {
                history.push("/checkout");
                dispatch(toggleCartHidden());
            }
        }>
            GO TO CHECKOUT
            </CustomButton>
    </div >

);

//connect to store -- redux - store.js and get the state and put to props in CartDropDown 
//use selector. cartItem object will now reference selector as value
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})



//mapDispatch to props -- already given by connect if there's only stateToProps argument
export default withRouter(connect(mapStateToProps)(CartDropdown));