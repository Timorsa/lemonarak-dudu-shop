import React from 'react';
import gsap from 'gsap';
import { GrClose as Close } from 'react-icons/gr';

const cartHeading = (cartMode) => {
    switch (cartMode) {
        case 'CART':
            return 'סל קניות'
        case 'ADDRESS':
            return 'כתובת למשלוח'
        case 'PAYMENT':
            return 'פרטי אמצעי תשלום';
        case 'CONFORMATION':
            return 'אישור ביצוע ההזמנה';
        default:
            return '';
    }
}

  const closeCart = () => {
        gsap.to('.cart', 1, {
            right:'-100%',
            opacity: 0,
            ease: 'Expo.easeInOut',
        })
     
    }

const CartHeader = ({cartMode}) => {
    return (
        <div className='cart-heading' >

                <div className="close-crt-btn" onClick={() => closeCart()}>
                    <Close size={20} />
                </div>
                <div className="crt-heading">
                    <h1>{cartHeading(cartMode)}</h1>
                </div>  
        </div>
    )
}

export default CartHeader
