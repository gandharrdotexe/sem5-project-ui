import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Stars from '../assets/stars.png';
import LogoIcon from '../assets/logo.svg';
const Get_Started = () => {
  return (
    <div>
        <Navbar />
        <section
            className='h-[492px] md:h-[800px] flex justify-center items-center overflow-hidden relative -mt-[100px]'
            style={{
                backgroundImage: `url(${Stars})`,
                maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            }}
        >
          <div className="container">
            <div className='flex items-center justify-center gap-2'>
              
              
                <input type="text" name="" id="" className='py-2 px-3 w-80 border border-[#4a2058]'/>
            
              
              <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a2058] shadow-[0_0_12px_#8c45ff] flex items-center space-x-2'>
                <div className='absolute inset-0'>
                  <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]'></div>
                  <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)]'></div>
                  <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,60,255,.7)_inset] rounded-lg'></div>
                </div>
                <span>Analyze</span>
                <img src={LogoIcon} alt="Logo" className='h-4 w-4 invert' />
              </button>

            </div>
            

          </div>
        </section>
        <Footer />
    </div>
  )
}

export default Get_Started
