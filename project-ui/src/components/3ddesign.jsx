import React from 'react';
import Stars from '../assets/stars.png'

const Design = () =>{
    return(
        <section className='h-[492px] flex justify-center items-center' style={{
            backgroundImage: `url(${Stars})`,
        }}>
            <div className='absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,_white,_rgb(184,148,255)_37.7%,_rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] -mt-14'></div>

            <div className='container relative mt-16'>
            <h1 className='text-8xl font-semibold tracking-tighter text-transparent bg-clip-text text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,_white,_white,_rgba(74,32,138,0.53))] mt-18'>
                        AI SEO
            </h1>

                <p className='text-2xl text-white/70 mt-5 text-center px-4'>
                    Elevate your site's vosoblity effortlessly with AI, 
                    where smart technology meets user-friendly SEO tools
                </p>
                <div className='flex justify-center mt-5'>
                <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a2058] shadow-[0_0_12px_#8c45ff]'>
                    <div className='absolute inset-0'>
                        <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]'></div>
                        <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)]'></div>
                        <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,60,255,.7)_inset] rounded-lg'></div>
                    </div>
                    <span>Get Started</span>
            </button>
                </div>
            </div>
        </section>
    );
};

export default Design;