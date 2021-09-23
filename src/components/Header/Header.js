import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <header>
            <div className ="logo">
                <img src = {logo} alt = 'logo'/>
            </div>
            <nav className = "nav">
                <a href = "/Shop">Shop</a>
                <a href = "/OrderReview">Order Review</a>
                <a href = "/ManageInventoryHere">Manage Inventory Here</a>
            
            </nav>
        </header>
    );
};

export default Header;