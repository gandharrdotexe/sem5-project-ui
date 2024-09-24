'use client';
import React, { useEffect, useRef } from 'react';
import '@lottiefiles/dotlottie-web';
// Import the library to make the custom element available
import ProductImage from '../assets/product-image.png'

const tabs = [
    {
        icon: '/assets/lottie/vroom.lottie',
        title: 'User Friendly Dashboard',
        isNew: false,
        backgroundPositionX: 0,
        backgroundPositionY: 0,
        backgroundSizeX: 150,
    },
    {
        icon: '/assets/lottie/click.lottie',
        title: 'One-click Optimization',
        isNew: false,
        backgroundPositionX: 98,
        backgroundPositionY: 100,
        backgroundSizeX: 135,
    },
    {
        icon: '/assets/lottie/stars.lottie',
        title: 'Smart Keyword Generator',
        isNew: true,
        backgroundPositionX: 100,
        backgroundPositionY: 27,
        backgroundSizeX: 177,
    }
];

const Features = () => {
    const lottieRefs = useRef([]);

    useEffect(() => {
        // No need for loadAnimation, <dotlottie-player> will handle it
    }, []);

    return (
        <section className='py-20 md:py-24 flex flex-col items-center justify-center'>
            <div className="container">
                <h2 className='text-5xl md:text-6xl font-medium text-center tracking-tighter'>Elevate your SEO efforts.</h2>
                <p className='text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5 py-2'>
                    From small startups to large enterprises,
                    our AI-driven tool has revolutionized the way businesses approach SEO.
                </p>
                <div className='mt-10 flex flex-col lg:flex-row gap-3'>
                {tabs.map((tab) => (
                    <div key={tab.title} className='border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center m-3 lg:flex-1'>
                        <div className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center'>
                            {/* Using the dotlottie-player directly */}
                            <dotlottie-player
                                // ref={el => lottieRefs.current[index] = el}
                                src={tab.icon}
                                autoplay
                                loop
                                      
                            />
                        </div>
                        
                        
                        <div>{tab.title}</div>
                        {tab.isNew && <div className='text-xs rounded-full px-2 py-0.5 bg-[#8c44ff]'>new</div>}
                        
                    </div>
                    
                ))}
                </div>
                <div className='border border-white/20 p-2.5 rounded-xl mt-3 mx-2.5'>
                <div className='aspect-video bg-cover border border-white/20 p-2.5' 
                    style={{
                        backgroundImage: `url(${ProductImage})`
                    }}
                ></div>
                {/* <img src={ProductImage} alt="productImage" /> */}
                </div>
                
            </div>
        </section>
    );
};

export default Features;
