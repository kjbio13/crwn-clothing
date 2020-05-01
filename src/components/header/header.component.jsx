import React from 'react';
import { Link } from 'react-router-dom'

//connecto to store
import { connect } from 'react-redux'

//selectors
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

//assets
import { ReactComponent as Logo } from '../../assets/crwn.svg';

//styles
import './header.styles.scss';

//utilities
import { auth } from '../../firebase/firebase.utils';

//components
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'



const Header = ({ currentUser, hidden }) => (
    <div className="header">

        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>

        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
            }
            <CartIcon />

        </div>
        {hidden ? null :
            <CartDropdown />
        }
    </div>
);

//mapping state as props to use in the app
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
// you can now use the states as props =>  in const Header()

export default connect(mapStateToProps)(Header);