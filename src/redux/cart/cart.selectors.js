import { createSelector } from 'reselect'

//input selector select***
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart], //first argument, the colelction the cart from store
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)