import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css'
import useAuth from '../../Hooks/useAuth/useAuth';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts/useProducts';
import useCart from '../../Hooks/useProducts/useCart';
import { clearTheCart } from '../../utilities/fakedb';

const Shipping = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const handleClick = () => {
        setCart([])
        clearTheCart();
    }



    const onSubmit = data => console.log(data);
 
    return (
        <div className="shipping-form">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />

                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone Number" defaultValue="" {...register("phone Number")} />

                <Link to="/placeorder"><input onClick={handleClick} type="submit" /></Link>
            </form>
        </div>
    );
};

export default Shipping;