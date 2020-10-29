import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";


const Stores = () => {
    const [stores, setStores] = useState([])






    useEffect(() => {
        Tabletop.init({
            key: "1KnNwhfFuu37LPFP5q1ZHtK_Wwhqk_aS8jGwYC2SV3dA",
            simpleSheet: true
        })
            .then((data) => setStores(data))
            .catch((err) => console.warn(err));
    }, []);


    return (
        <section className='stores'>
            <div className="alter-logo"></div>
            <h2 dir='rtl'>
                ניתן להשיג בחנויות מובחרות ביניהן:
           </h2>
            <ul dir='rtl'>
                {
                    stores.map(store => <li key={store.Name}>{store.Name}</li>)
                }
            </ul>
        </section>
    )
}

export default Stores

