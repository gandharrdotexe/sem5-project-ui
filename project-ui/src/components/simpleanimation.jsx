import React from 'react';
import '@lottiefiles/dotlottie-web';

const SimpleAnimation = () => {
    return (
        <dotlottie-player
            src="/assets/lottie/vroom.lottie"
            autoplay
            loop
            style={{ width: '200px', height: '200px' }}
        />
    );
};

export default SimpleAnimation;