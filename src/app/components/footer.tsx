import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

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
          <img src="https://vercel.com/favicon.ico" alt="Vercel" style={{ width: "24px", height: "24px" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
