import React , {useEffect} from 'react';

import CartItem from './cartBodyComps/CartItem'

const CartItems = ({cartItems, setCartItems, setCartMode}) => {

    const updateQty = (cartItem, addValue) => {
     
            const newCart = cartItems.map(item => {
                if(item.desc === cartItem.desc)
                    return {...item , qty: item.qty+addValue};
                else return item
            })
            setCartItems(newCart);
            
        
    }


    return (
        <div className='cart-body-items'>
            <div>
            {
                cartItems.map(item => item.qty!==0 &&
                    <CartItem key={item.desc} item={item} updateQty={updateQty}/>
                )
            }   
            </div>
            <button className="proceed-payment-btn" disabled={ cartItems.length === 0} onClick={() =>setCartMode('ADDRESS')}>
                המשך לפרטי משלוח
            </button>

        </div>
    )
}

export default CartItems
