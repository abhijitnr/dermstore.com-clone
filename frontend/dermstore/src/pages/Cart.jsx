import React from 'react';
import { useSelector } from 'react-redux';
import "../css/Cart.module.css";

const Cart = () => {

    const cart = useSelector(store => store.cart);
    console.log(cart);
    return (
        <div id='cartItems'>

            <div className='cartLogs'>

            </div>


        </div>
    );
}

export default Cart;
