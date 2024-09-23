import React from 'react';
import Lottie from 'lottie-react';


const tabs= [
    {
        icon: '/assets/lottie/vroom.lottie',
        title: 'User Friendly Dashdoard',
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
        icon: '/assets/lottie/vroom.lottie',
        title: 'Smart Keyword Generator',
        isNew: true,
        backgroundPositionX: 100,
        backgroundPositionY: 27,
        backgroundSizeX: 177,
    }
];
const Features = () => {
    return (
        <section>
            <div className="container">
                <h2>Elevate youe SEO efforts.</h2>
                <p>From small startups to large enterprises,
                     our AI-driven tool has revolutionalized the way businesses approach SEO</p>
                     {tabs.map((tab) =>(
                        <div key={tab.title}>
                            <Lottie
                                loop
                                src={tab.icon}
                                autoplay
                                className='h-5 w-5' 
                            ></Lottie>
                        </div>
                     ))}
            </div>
        </section>
    );
};

export default Features;