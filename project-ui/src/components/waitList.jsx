import React from 'react';


const waitList = () =>{
    return (
        <section className='py-20'>
            <div className='container'>
                <h2>AI-driven SEO for everyone</h2>
                <p>Achieve clear, impactful results without the complexity.</p>
                <button className='relative py-3 px-4 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a2058] shadow-[0_0_12px_#8c45ff]'>
                            <div className='absolute inset-0'>
                                <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]'></div>
                                <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)]'></div>
                                <div className='absolute inset-0 shadow-[0_0_10px_rgba(140,60,255,0.7)_inset] rounded-lg'></div>
                            </div>
                            <span className='font-semibold text-lg'>Get Started</span>
                </button>
            </div>
            
        </section>
    );
};

export default waitList;