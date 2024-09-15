import React from 'react';
import LogoIcon from '../assets/logo.svg';  // Import as image URL
import MenuIcon from '../assets/icon-menu.svg';  // Import as image URL

const Navbar = () => {
  return (
    <header className='py-4 border-b borber-white/15'>
      <div className="container">
        <div className='flex justify-between'>
          <div>
            <img src={LogoIcon} alt="Logo" className='h-8 w-8' />  {/* Use <img> tag */}
          </div>
          <div className='flex gap-4 items-center'>
            <button>Get Started</button>
            <img src={MenuIcon} alt="Menu" className='h-6 w-6' />  {/* Use <img> tag */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
