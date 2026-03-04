/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import "../Component.css";

const Header = () => {

  const scrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  return (
    <div className="header">
      
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#footer" onClick={scrollToFooter}>Contact</a>      
    </div>
  );
};

export default Header;
