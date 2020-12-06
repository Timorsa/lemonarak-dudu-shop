import React from 'react'



const ListedItem = ({ listItem, addToCart }) => {

    const { name, nameEng, desc, price, imgClass } = listItem;

    return (

        <div className='shop-item' dir='rtl'>
            <div className={`product-image ${imgClass}`}></div>
            <div className="item-body">
                <div>
                    <div className="name">{name}</div>
                    <div className="name-eng">{nameEng}</div>
                    <div className="desc">{desc}</div>
                    <div className="price">{`${price} ש''ח`}</div>
                </div>
                <div className="add-btn" role='button' onClick={() => addToCart(listItem)}> הוסף לסל <span>+</span></div>
            </div>

        </div>
    )
}

export default ListedItem
