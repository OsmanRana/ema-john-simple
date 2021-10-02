import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            })


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
        const exists = cart.find(item => item.key === product.key)
        let newCart = []
        if (exists) {
            const rest = cart.filter(item => item.key !== product.key)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }

        setCart(newCart);
        addToDb(product.key);

    }
    const handleChange = event => {
        const searchedText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchedText.toLowerCase()));
        console.log(matchedProducts.length)
        setDisplayProducts(matchedProducts)
    }

    return (
        <>
            <div className="search-container">
                <input onChange={handleChange} type="text" placeholder="Please search your product" />
            </div>

            <div className="shop-container">

                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/OrderReview"><button className="btn-regular">Review Order</button></Link>
                    </Cart>
                </div>

            </div>
        </>
    );
};

export default Shop;