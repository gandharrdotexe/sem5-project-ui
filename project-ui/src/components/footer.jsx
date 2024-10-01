import React from "react";
import LogoIcon from '../assets/logo.svg';
const Footer = () =>{
    return (
        <footer>
            <div>
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
                <div></div>
            </div>
        </footer>
    );
};

export default Footer;