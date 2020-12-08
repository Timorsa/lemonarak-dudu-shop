import React, {useEffect} from 'react';
import gsap from 'gsap';

const ModalWarning = () => {

    
    useEffect(() => {
        gsap.from('.modal-warning', .5, {
            delay: 2, 
            opacity: 0,
        });
        gsap.from('.content', .8 , {
            delay: 2.3,
            opacity: 0  ,    
            y: 100,
            ease: 'Expo.easeInOut'
        });
        
        
    }, [])

    const closeDialog = () => {
        gsap.to('.content-mw', .8 , {
            opacity: 0  ,    
            y: 100,
            ease: 'Expo.easeInOut'
        });
        gsap.to('.modal-warning', .5, {
            delay: 1, 
            opacity: 0,
        });
        gsap.to('.modal-warning', .1, {
            delay: 1.6,
            display: 'none'
        });
        window.onscroll = function () {
        }
    }

    return (
        <div className='modal-warning' dir='rtl'>
            <div className='content-mw'>
                <h1>סבא דודו שואל אם עברת כבר ח"י שנים?</h1>
                {/* <h2>האם גילך הוא מעל 18 ?</h2> */}
                <div className='buttons'>
                    <a className='yes btn' onClick={()=> closeDialog()}>כן</a>
                    <a className='no btn' href='http://google.com/'>לא</a>
                </div>
                <h2>*ומזכיר שהמכירה היא לבני 18+ בלבד</h2>
            </div>   
        </div>
    )
}

export default ModalWarning
