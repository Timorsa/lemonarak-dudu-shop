import React from 'react'

import CartItems from './CartItems';
import AdressForm from './cartBodyComps/AdressForm';
import CreditCardForm from './cartBodyComps/CreditCardForm'
import Confermation from './cartBodyComps/Confermation';




const CartBody = ({paymentDetails, setPaymentDetails, address, setAddress, cartMode, setCartMode, cartItems, setCartItems}) => {

    return (
        <div className='cart-body'>
            {
                cartMode === 'CART' && <CartItems cartItems={cartItems} setCartItems={setCartItems} setCartMode={setCartMode}/>
            }
            {
                cartMode === 'ADDRESS' && <AdressForm address={address} setAddress={setAddress} setCartMode={setCartMode}/> 
            }
            {
                cartMode === 'PAYMENT' &&  <CreditCardForm cartItems={cartItems} paymentDetails={paymentDetails} setPaymentDetails={setPaymentDetails} setCartMode={setCartMode} /> 
            }
            {
                cartMode === 'CONFORMATION' && <Confermation address={address}/>
            }    
            

             
        </div> 
    )
}

export default CartBody
