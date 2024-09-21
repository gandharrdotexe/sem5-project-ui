import React from 'react';
import LogoIcon from '../assets/logo.svg';  // Import as image URL
import MenuIcon from '../assets/icon-menu.svg';  // Import as image URL

const Navbar = () => {
  return (
    <header className='py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur md:backdrop-blur-none'>
      <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
      <div className="container mx-auto px-4"> {/* Ensure the container is centered */}
        <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur relative'> {/* Fix mx-auto */}
          <div className='absolute inset-0 backdrop-blur -z-10 hidden md:block'></div>
          <div>
            <div className='h-10 w-10 ml-4 border rounded-lg flex items-center justify-center border-white/15'>
              <img src={LogoIcon} alt="Logo" className='h-8 w-8 invert' /> 
            </div>
          </div>

          <div className='hidden md:block'>
            <nav className='flex gap-8 text-sm'>
              <a href="" className='text-white/70 hover:text-white transition'>Features</a>
              <a href="" className='text-white/70 hover:text-white transition'>Developers</a>
              <a href="" className='text-white/70 hover:text-white transition'>Changelog</a>
              <a href="" className='text-white/70 hover:text-white transition'>Pricing</a>
            </nav>
          </div>

          <div className='flex gap-4 items-center mr-4'>
            <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a2058] shadow-[0_0_12px_#8c45ff]'>
              <div className='absolute inset-0'>
                <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]'></div>
                <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)]'></div>
                <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,60,255,.7)_inset] rounded-lg'></div>
              </div>
              <span>Get Started</span>
            </button>
            <img src={MenuIcon} alt="Menu" className='h-6 w-6 md:hidden' />  
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
