/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";

import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import "../Component.css";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/professionals.jpg";

const imageAltText = "Adult coders in office setting learning web technologies in his pc";

const Home = ({ name, title }) => {

   const handleScrollDown = () => {
  document.getElementById("about")
    ?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:a256a0ee-1036-42d2-8d1f-773adc193a42"><h1>{name}</h1></a>
        <h2>{title}</h2>
      </div>
      <div className="home-arr">
        <img onClick={handleScrollDown} src={arrowSvg} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "Shasawat Pal",
  title: "Web developer",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
