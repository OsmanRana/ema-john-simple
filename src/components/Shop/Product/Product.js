import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {name, img, category, price, seller, shipping, stock} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    
    return (
        <div className = "product">
            <div>
                <img src = {img} alt = "Product"/>
            </div>
            <div>
                <div className = "description">
                    <h4 className = "product-name">{name}</h4>
                    <div className = "details">
                        <div>
                            <p><small>by {seller}</small></p>
                            <p><small>Category: {category}</small></p>
                            <h5>Price: ${price}</h5>
                            <p><small>Shipping: ${shipping}</small></p>
                            <p><small>only {stock} left in stock - order soon</small></p>
                            <button onClick = {()=>props.handleAddToCart(props.product)} className ="btn-regular">{element} Add to Cart</button>
                        </div>
                        <div>
                            <h4>Features:</h4>
                            <ul>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;