import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';

import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    const history = useHistory()
    const handleLogOut = () => {
        logOut();
        history.push('/shop')
    }
    return (
        <header>
            <div className="logo">
                <img src={logo} alt='logo' />
            </div>
            <nav className="nav">
                <Link to="/Shop">Shop</Link>
                <Link to="/OrderReview">Order Review</Link>
                <Link to="/ManageInventoryHere">Manage Inventory Here</Link>
                {
                    user.email && <span>{user.displayName}</span>
                }

                {
                    user.email ? <button onClick={handleLogOut}>Log Out</button>
                        :
                        <Link to="/login">Login</Link>
                }


            </nav>
        </header>
    );
};

export default Header;