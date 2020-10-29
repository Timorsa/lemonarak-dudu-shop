import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";

//https://docs.google.com/spreadsheets/d/e/2PACX-1vSXrrfs1ZqQvWgFqUebSuU5yxA07T8_Ny2lyW7nN8tmPMz9lBcyYwC5-rJtWXnd9tPN90VVqDPkxo8o/pubhtml
//2PACX-1vSXrrfs1ZqQvWgFqUebSuU5yxA07T8_Ny2lyW7nN8tmPMz9lBcyYwC5-rJtWXnd9tPN90VVqDPkxo8o
const Stores = () => {
    const [stores, setStores] = useState([])






    useEffect(() => {
        Tabletop.init({
            key: "1qhNC-VMkSoHCZWKqBDOqQOhaRaFfLjhIW8ktCK9FTIQ",
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
                    stores.map(store => <li key={store.name}>{store.name}</li>)
                }
            </ul>
        </section>
    )
}

export default Stores

