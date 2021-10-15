import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../Hooks/useProducts/useCart';
import useProducts from '../../Hooks/useProducts/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
        console.log(key)
    }
    const handleClick = () => {
        history.push("/shipping");
        // setCart([])
        // clearTheCart();
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItems
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    />)
                }
            </div>
            <div className="cart-details cart-container">
                <Cart cart={cart}>
                    <button onClick ={handleClick} className="btn-regular">Procced to Shpping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;


