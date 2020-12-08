import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import DelayLink from 'react-delay-link'
import gsap from 'gsap';

const Intro = () => {

    useEffect(() => {
        gsap.from('.intro', 0.6, {
            delay: 1.8,
            opacity: 0,
            y: 25,
            ease: 'Expo.easeInOut'
        })
    }, [])

    return (
        <section className="intro">
            <div className="bottle-imgs">
                <div className="img-c"></div>
            </div>
            <span>
                <div className="logo"></div>
                <h1 className="logo-desc">
                    לימונערק דודו
                </h1>
                <Link to='/shop'  className='btn'>
                     לרכישה
                </Link>
            </span>
                
        </section>
    )
}

export default Intro
