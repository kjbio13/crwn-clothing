import React from 'react';
import {Link} from 'react-router-dom'

//assets
import {ReactComponent as Logo} from '../assets/crwn.svg';

//styles
import './header.styles.scss';

const Header =() => (
    <div className="header">

    <Link className="logo-container" to="/">
        <Logo className="logo"/>
    </Link>

<div className="options">
    <Link className="option" to="/shop">
        SHOP
    </Link>
    <Link className="option" to="/contact">
        CONTACT
    </Link>
</div>

    </div>
)

export default Header;