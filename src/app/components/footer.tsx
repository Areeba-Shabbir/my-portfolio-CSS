import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image'; // Import Image from next/image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialLinks">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
          <FaFacebookF />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
          <FaLinkedinIn />
        </a>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="icon">
          {/* Use Next.js Image component for optimization */}
          <Image 
            src="https://vercel.com/favicon.ico" 
            alt="Vercel" 
            width={24} 
            height={24} 
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
