import React from 'react';
import { Player } from 'react-lottie-player';

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
                            <Player
                            autoplay
                            loop
                            src={tab.icon} // Path to your animation file
                            style={{ width: tab.backgroundSizeX, height: tab.backgroundSizeX }}
                        />
                        </div>
                     ))}
            </div>
        </section>
    );
};

export default Features;