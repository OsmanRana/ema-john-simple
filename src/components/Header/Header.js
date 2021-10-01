import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <header>
            <div className ="logo">
                <img src = {logo} alt = 'logo'/>
            </div>
            <nav className = "nav">
                <Link to = "/Shop">Shop</Link>
                <Link to = "/OrderReview">Order Review</Link>
                <Link to = "/ManageInventoryHere">Manage Inventory Here</Link>
            
            </nav>
        </header>
    );
};

export default Header;