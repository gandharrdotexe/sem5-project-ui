import React from 'react';
import Stars from '../assets/stars.png';

const Design = () => {
    return (
        <section
            className='h-[492px] md:h-[800px] flex justify-center items-center overflow-hidden relative -mt-[100px]'
            style={{
                backgroundImage: `url(${Stars})`,
                maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            }}
        >
            {/* Purple Radial Gradient Effect */}
            <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,_rgba(140,69,255,0.5)_15%,_rgba(14,0,36,0.5)_78%,_transparent)]'></div>

            {/* Central Div with Shadows and Border */}
            <div className='absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,_white,_rgba(184,148,255,0.5)_37.7%,_rgb(24,0,66))] shadow-[-20px_-20px_50px_rgba(255,255,255,0.5),-20px_-20px_80px_rgba(255,255,255,0.1),0_0_50px_rgba(140,69,255,0.7)]'></div>

            {/* Additional Circle Elements */}
            <div className='absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2'></div>
            </div>
            <div className='absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed'></div>
            <div className='absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>

            {/* Main Content */}
            <div className='container relative mt-16'>
                <h1 className='text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter text-transparent bg-clip-text text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,_white,_white,_rgba(74,32,138,0.53))]'>
                    AI SEO
                </h1>
                <p className='text-lg md:text-xl text-white/70 mt-5 text-center px-4 max-w-xl mx-auto'>
                    Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools
                </p>

                <div className='flex justify-center mt-8'>
                    <button className='relative py-3 px-4 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a2058] shadow-[0_0_12px_#8c45ff]'>
                        <div className='absolute inset-0'>
                            <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]'></div>
                            <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)]'></div>
                            <div className='absolute inset-0 shadow-[0_0_10px_rgba(140,60,255,0.7)_inset] rounded-lg'></div>
                        </div>
                        <span className='font-semibold text-lg'>Get Started</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Design;
