import React, { useEffect } from 'react';
import gsap from 'gsap';

const OverLay = () => {
    useEffect(() => {
        gsap.to('.overlay', 2, {
            delay: 1,
            top: '-150%',
            ease: 'Expo.easeInOut',
        });
        gsap.to('.overlay', 0.2, {
            delay: 3,
            opacity: 0,
            display: 'none'
        })
    }, []);
    return (
        <div className='overlay'>
            <div className='overlay-logo'></div>
        </div>
    );
};

export default OverLay;