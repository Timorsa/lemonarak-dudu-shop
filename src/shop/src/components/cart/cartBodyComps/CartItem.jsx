import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

import { GrFormSubtract as Minus, GrFormAdd as Plus } from 'react-icons/gr';




const CartItem = ({ item , updateQty}) => {
    

    return (
        <>

            <div className="cart-item">
                <div className={`item-img  ${item.imgClass}`}></div>
                <div className="cart-item-desc">
                    <div className="cart-item-heading">{item.name}</div>
                    <div className="cart-item-description">{item.desc}</div>
                    <h2 dir='rtl'>{` ${ item.price * item.qty}  ש''ח`}</h2>
                    <div className="cart-item-quantity">
                        <span className="cart-item-btn">
                            <Minus onClick={() => updateQty(item,-1)} />
                        </span>
                        <span className="cart-item-qty">{item.qty}</span>
                        <span className="cart-item-btn">
                            <Plus onClick={() =>{ 
                                updateQty(item, 1)
                                
                                }} />
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CartItem
