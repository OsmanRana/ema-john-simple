import React from 'react';
import { useHistory } from 'react-router';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    
    
    let totalQuantity = 0;
    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        if(!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const totalBeforeTax = total + shipping;
    const estimatedTax = totalBeforeTax * .10;
    const orderTotal = totalBeforeTax + estimatedTax;

    
    return (
        <div>
            <div className="cart-details">
                <h2>Order Summary</h2>
                <p>Items ordered: {totalQuantity}</p>
                <span className="total-calculation">
                    <p><small>Items: $ {total.toFixed(2)}</small></p>
                    <p><small>Shipping & Handling: $ {shipping.toFixed(2)}</small></p>
                    <p><small>Total before tax: $ {totalBeforeTax.toFixed(2)}</small></p>
                    <p><small>Estimated Tax: $ {estimatedTax.toFixed(2)}</small></p>
                    <h2>Order Total:$ {orderTotal.toFixed(2)}</h2>
                </span>
                {props.children}
            </div>
        </div>
    );
};

export default Cart;