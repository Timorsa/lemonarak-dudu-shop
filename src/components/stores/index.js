import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";

//https://docs.google.com/spreadsheets/d/e/2PACX-1vSXrrfs1ZqQvWgFqUebSuU5yxA07T8_Ny2lyW7nN8tmPMz9lBcyYwC5-rJtWXnd9tPN90VVqDPkxo8o/pubhtml
//2PACX-1vSXrrfs1ZqQvWgFqUebSuU5yxA07T8_Ny2lyW7nN8tmPMz9lBcyYwC5-rJtWXnd9tPN90VVqDPkxo8o
const Stores = () => {
    const [loadingStores, setLoadingStores] = useState(true)
    const [stores, setStores] = useState({
        north: [],
        center: [],
        south: [],
        shfela: []
    })


    const setData = (data) => {
        let areaMap = {
            north: [], center: [], south: [], shfela: []
        }
        data.forEach(store => {
            switch (store.area) {
                case 'צפון':
                    areaMap.north.push(store);
                    break;
                case 'מרכז':
                    areaMap.center.push(store);
                    break;
                case 'שפלה':
                    areaMap.shfela.push(store);
                    break;
                case 'דרום':
                    areaMap.south.push(store);
                    break;
                default:
                    break;
            }
        });
        setStores(areaMap);
        console.log('stores state : ', stores)
    }



    useEffect(() => {
        setLoadingStores(true);
        Tabletop.init({
            key: "1qhNC-VMkSoHCZWKqBDOqQOhaRaFfLjhIW8ktCK9FTIQ",
            simpleSheet: true
        })
            .then((data) => data.length > 0 ? setData(data) : console.log('no stores in google sheets'))
            .catch((err) => console.warn(err));
        setLoadingStores(false)
    }, []);


    return (
        <section className='stores'>
            {
                !loadingStores && (
                    <div className="stores-row">
                        <div className="stores-area">
                            <h2>צפון</h2>
                            <ul>
                                {
                                    stores.north.map(store => (
                                        <li><a target="_blank" href={store.link === '' ? false : store.link}>{store.name}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="stores-area">
                            <h2>מרכז</h2>
                            <ul>
                                {
                                    stores.center.map(store => (
                                        <li><a target="_blank" href={store.link === '' ? false : store.link}>{store.name}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                )
            }

            <div className="alter-logo"></div>
            {
                !loadingStores && (
                    <div className="stores-row">
                        <div className="stores-area">
                            <h2>דרום</h2>
                            <ul>
                                {
                                    stores.south.map(store => (
                                        <li><a target="_blank" href={store.link === '' ? false : store.link}>{store.name}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="stores-area">
                            <h2>שפלה</h2>
                            <ul>
                                {
                                    stores.shfela.map(store => (
                                        <li><a target="_blank" href={store.link === '' ? false : store.link}>{store.name}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                )
            }

        </section>
    )
}

export default Stores
