import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

import CartItem from './cartBodyComps/CartItem';


import CartHeader from './CartHeader';
import CartBody from './CartBody';










const Cart = ({ cartItems, setCartItems, setOpenCart, cartMode, setCartMode }) => {
   
    const [address, setAddress] = useState({});
    const [paymentDetails, setPaymentDetails] = useState();



    return (
        <div className='cart '>
            <CartHeader cartMode={cartMode}/>
            <CartBody 
                cartMode={cartMode}
                setCartMode={setCartMode}
                paymentDetails={paymentDetails} 
                address={address} 
                setPaymentDetails={setPaymentDetails} 
                setAddress={setAddress} 
                cartItems={cartItems}
                setCartItems={setCartItems}/>
        </div>
    )
}

export default Cart
