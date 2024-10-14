import React from "react";
import LogoIcon from '../assets/logo.svg';
import InstaLogo from '../assets/social-instagram.svg';
import XLogo from '../assets/social-x.svg';
import YTLogo from '../assets/social-youtube.svg';
const Footer = () =>{
    return (
        <footer className="py-5 border-t border-white/15">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex gap-2 items-center lg:flex-1 lg:justify-start">
                    <img src={LogoIcon} alt="Logo" className='h-8 w-8 invert' /> 
                    <div className="font-medium">AI-SEO Tool</div>
                </div>
                
                    <nav className="flex flex-col lg:flex-row gap-5 lg:gap-8 lg:flex-1 lg:justify-center ">
                        <a href="" className="text-white/70 hover:text-white transition text-xs md:text-sm">Features</a>
                        <a href="" className="text-white/70 hover:text-white transition text-xs md:text-sm">Developers</a>
                        <a href="" className="text-white/70 hover:text-white transition text-xs md:text-sm">Changelog</a>
                        <a href="" className="text-white/70 hover:text-white transition text-xs md:text-sm">Pricing</a>
                        <a href="" className="text-white/70 hover:text-white transition text-xs md:text-sm">Blogs</a>
                    </nav>
                
                <div className="flex gap-5 lg:flex-1 lg:justify-end">
                    <img src={InstaLogo} alt="Logo" className='h-8 w-8 invert text-white/70 hover:text-white transition' /> 
                    <img src={XLogo} alt="Logo" className='h-8 w-8 invert text-white/70 hover:text-white transition' /> 
                    <img src={YTLogo} alt="Logo" className='h-8 w-8 invert text-white/70 hover:text-white transition' /> 

                </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;