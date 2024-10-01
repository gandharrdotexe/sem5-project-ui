import React from "react";
import LogoIcon from '../assets/logo.svg';
import InstaLogo from '../assets/social-instagram.svg';
import XLogo from '../assets/social-x.svg';
import YTLogo from '../assets/social-youtube.svg';
const Footer = () =>{
    return (
        <footer className="py-5 border-t border-white/15">
            <div className="container">
                <div className="flex flex-col">
                <div>
                    <img src={LogoIcon} alt="Logo" className='h-8 w-8 invert' /> 
                    <div>AI-SEO Tool</div>
                </div>
                <div>
                    <nav>
                        <a href="">Features</a>
                        <a href="">Developers</a>
                        <a href="">Changelog</a>
                        <a href="">Pricing</a>
                        <a href="">Blogs</a>
                    </nav>
                </div>
                <div>
                    <img src={InstaLogo} alt="Logo" className='h-8 w-8 invert' /> 
                    <img src={XLogo} alt="Logo" className='h-8 w-8 invert' /> 
                    <img src={YTLogo} alt="Logo" className='h-8 w-8 invert' /> 

                </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;