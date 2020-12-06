import React from 'react'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="warning" dir='rtl'>אזהרה: צריכה מופרזת של אלכוהול מסכנת חיים ומזיקה לבריאות!</div>
            <div className="end-footer">
                <div className='links'>
                   
                    <div className='terms'>תנאי שימוש | תקנון | פרטיות</div>
                    <div className='terms'>משלוחים </div>
                    <div className="tlh">ט.ל.ח</div>
                </div>
                <a href='https://www.isbeco.co.il/' target="_blank" rel="noreferrer" className="caspirits">by CASPIRITS 2020</a>
            </div>
        </section>
    )
}

export default Footer
