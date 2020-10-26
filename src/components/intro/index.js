import React, {useEffect} from 'react';
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
                <div className="img-l"></div>
                <div className="img-c"></div>
                <div className="img-r"></div>
            </div>
            <div className="logo"></div>
            <h1 className="logo-desc">
                לימונערק דודו
            </h1>
        </section>
    )
}

export default Intro
