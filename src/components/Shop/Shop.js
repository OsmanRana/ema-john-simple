import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    useEffect(() => {
        const savedCart = getStoredCart();
        if (products.length) {
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }

            }
            setCart(storedCart);
        }

    }, [products])
    const handleAddToCart = (product) => {
        const newCount = [...cart, product]
        setCart(newCount);
        addToDb(product.key);

    }
    const handleChange = event => {
        console.log(event.target.value)

    }

    return (
        <>
        <input onChange = {handleChange} type = "text" placeholder ="Please search your product"/>
        <div className="shop-container">
            
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>

        </div>
        </>
    );
};

export default Shop;