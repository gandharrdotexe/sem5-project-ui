import React, { useEffect, useRef } from 'react';
import '@lottiefiles/dotlottie-web';  // Import the library to make the custom element available

const tabs = [
    {
        icon: '/assets/lottie/vroom.lottie',
        title: 'User Friendly Dashboard',
        backgroundPositionX: 0,
        backgroundPositionY: 0,
        backgroundSizeX: 150,
    },
    {
        icon: '/assets/lottie/click.lottie',
        title: 'One-click Optimization',
        backgroundPositionX: 98,
        backgroundPositionY: 100,
        backgroundSizeX: 135,
    },
    {
        icon: '/assets/lottie/vroom.lottie',
        title: 'Smart Keyword Generator',
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
        <section>
            <div className="container">
                <h2>Elevate your SEO efforts.</h2>
                <p>
                    From small startups to large enterprises,
                    our AI-driven tool has revolutionized the way businesses approach SEO.
                </p>
                {tabs.map((tab) => (
                    <div key={tab.title}>
                        
                        {/* Using the dotlottie-player directly */}
                        <dotlottie-player
                            // ref={el => lottieRefs.current[index] = el}
                            src={tab.icon}
                            autoplay
                            loop
                            className='h-5 w-5'      
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
