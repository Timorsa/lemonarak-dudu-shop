import React, { useState } from 'react';

import Shop from './components/shop';
import Cart from './components/cart';
import Header from './components/header';
import Footer from './components/footer';
import ShopOverlay from './components/ShopOverlay'

import './styles/shop.scss';


// ! add overlay

const ShopAddon = () => {

  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
   // enum : CART , ADDRESS, PAYMENT, CONFORMATION
   const [cartMode, setCartMode] = useState('CART');

  return (
    <div >
    <ShopOverlay/>
      {
        <Cart cartItems={cartItems} setCartItems={setCartItems} setOpenCart={setOpenCart}  cartMode={cartMode} setCartMode={setCartMode}/>
      }
      <div 
      >

      <Header setOpenCart={setOpenCart} />
      <Shop cartItems={cartItems} setCartItems={setCartItems} setOpenCart={setOpenCart} setCartMode={setCartMode} />
      </div>
    </div>
  );
}

export default ShopAddon;
