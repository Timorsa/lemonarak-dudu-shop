import React , {useEffect }from 'react'
import gsap from 'gsap'

import ListedItem from './ListedItem';

const lemonarakData = [
    {
        name: 'ערק לימונים דודו 750מ"ל',
        nameEng: 'Lemon Arak Dudu 750ml',
        desc: 'בקבוק לימוערק דודו',
        price: 75,
        imgClass: 'lemonarak-bottle'
    },
    {
        name: 'ערק לימונים דודו 750מ"ל',
        nameEng: 'Lemon Arak Dudu 750ml 12 unit Box',
        desc: "ארגז 12 יח' לימונערק דודו",
        price: 828,
        imgClass: 'lemonarak-box'
    }
]

const Shop = ({ cartItems, setCartItems, setOpenCart, setCartMode }) => {

       useEffect(() => {
        gsap.to('.shop-item', .4, {
             delay: 1.5,
             y: '-25px',
            opacity: 1,
            ease: 'Expo.easeIn',
        });
     
    }, []);

        const openCart = () => {
        gsap.to('.cart', 1, {
            right: '0',
            opacity: 1,
            ease: 'Expo.easeInOut'
        })
        setCartMode('CART')
        setOpenCart(true)
        
    }


    const addToCart = (item) => {

        if (cartItems.length === 0) {
            setCartItems([{ ...item, qty: 1 }]);
        } else {
            let inCart = false;
            const updatedCart = cartItems.map(prod => {
                if (prod.desc === item.desc) {
                    inCart = true
                    return { ...prod, qty: prod.qty + 1 }
                } else return prod;
            })
            inCart ? setCartItems(updatedCart) : setCartItems([...cartItems, { ...item, qty: 1 }]);
        }
        openCart();
    }

    return (
        <div className='shop-cont'>
            <div className="shop-header">
                <h1>רשימת מוצרים</h1>
                <div className="devider"></div>
            </div>
            <div className="shop-body">
                {
                    lemonarakData.map((item, index) => <ListedItem key={index} listItem={item} addToCart={addToCart} />)
                }

            </div>
        </div>
    )
}

export default Shop
