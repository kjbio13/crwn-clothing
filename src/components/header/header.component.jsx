import React from 'react';
// import { Link } from 'react-router-dom'

//connecto to store
import { connect } from 'react-redux'

//selectors
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

//assets
import { ReactComponent as Logo } from '../../assets/crwn.svg';

//styles
// import './header.styles.scss';

//styled-components
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

//utilities
// import { auth } from '../../firebase/firebase.utils';

//components
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { signOutStart } from '../../redux/user/user.actions'

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>

        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionLink as="div" onClick={signOutStart}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
            }
            <CartIcon />

        </OptionsContainer>
        {hidden ? null :
            <CartDropdown />
        }
    </HeaderContainer>
);

//mapping state as props to use in the app
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})
// you can now use the states as props =>  in const Header()

export default connect(mapStateToProps, mapDispatchToProps)(Header);