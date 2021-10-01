import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/Storage';


const Shop = () => {
    const [products, setProducts] = useState([])
    console.log(products)
    const [cart, setCart] = useState([])
    console.log(cart)
    
    useEffect (() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    const handleAddToCart = (product) => {
        const newCount = [...cart, product]
        console.log(newCount)
        setCart(newCount)
        addToDb(product.key)
    }
    
    return (
        <div className = "shop-container">
            <div className = "product-container">
                {
                    products.map(product => <Product
                        key = {product.key}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                    />)
                }
            </div>
            <div className = "cart-container">
                <Cart cart = {cart}/>
            </div>
            
        </div>
    );
};

export default Shop;