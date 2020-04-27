import React from 'react';
import { Link } from 'react-router-dom'

//assets
import { ReactComponent as Logo } from '../../assets/crwn.svg';

//styles
import './header.styles.scss';

//utilities
import { auth } from '../../firebase/firebase.utils';

const Header = (props) => (
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
                props.currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
            }


        </div>

    </div>
)

export default Header;