import React , {useEffect} from 'react';
import gsap from 'gsap';

const ShopOverlay = () => {
   
         useEffect(() => {
        gsap.to('.overlay', 2, {
            delay: 1,
            left: '-150%',
            ease: 'Expo.easeInOut',
        });
        gsap.to('.overlay', 0.2, {
            delay: 3,
            opacity: 0,
            // display: 'none'
        })
    }, []);

    return (
        <div className='overlay'>
        </div>
    );
    
}

export default ShopOverlay;
