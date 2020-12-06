import React from 'react';
import gsap from 'gsap';
import { GrPrevious as Prev, GrCart as Cart } from 'react-icons/gr'


const Header = ({ setOpenCart }) => {

    const openCart = () => {
        gsap.to('.cart', 1, {
            right: '0',
            opacity: 1,
            ease: 'Expo.easeInOut'
        })
        setOpenCart(true)
    }

    return (
        <div className="header">
            <div className="btn-icn btn-back">
                <Prev size={15} />
            </div>
            <div className="st-hd-logo"></div>
            <div className="btn-icn btn-crt" onClick={() => openCart()}>
                <Cart size={22} />
            </div>
        </div>
    )
}

export default Header
