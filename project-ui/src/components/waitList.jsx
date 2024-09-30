import React from 'react';
import Stars from '../assets/stars.png';
import GridLines from '../assets/grid-lines.png';


const waitList = () =>{
    return (
        <section className='py-20'>
            <div className='container mx-auto px-4'>
                <div className='border border-white/15 py-24 rounded-xl overflow-hidden relative' style={{
                    backgroundImage: `url(${Stars})`
                }}>
                    <div className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [masked-image:radial-gradient(50%_50%_at_50%_35%, black, transparent)]' style={{
                         backgroundImage: `url(${GridLines})`
                    }}></div>
                    <div className='relative'>
                    <h2 className='text-5xl tracking-tighter text-center font-medium'>AI-driven SEO for everyone</h2>
                    <p className='text-center text-lg text-white/70 px-4 mt-5 tracking-tighter'>Achieve clear, impactful results without the complexity.</p>
                    <div className='flex justify-center mt-8'>
                    <button className='relative py-3 px-4 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a2058] shadow-[0_0_12px_#8c45ff]'>
                                <div className='absolute inset-0'>
                                    <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]'></div>
                                    <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)]'></div>
                                    <div className='absolute inset-0 shadow-[0_0_10px_rgba(140,60,255,0.7)_inset] rounded-lg'></div>
                                </div>
                                <span className='font-semibold text-lg'>Join WaitList</span>
                    </button>
                    </div>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </section>
    );
};

export default waitList;