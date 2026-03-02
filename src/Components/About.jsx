/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import "../Component.css";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/background_intro2.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Web Developer student completed my graduation from Pranveer Singh Institution of Technology. I also earn and enhancing the industry based technologies skills by attending and completing the MERN stack training from Pregrad. I also doing some relevent projects using trending tech tools like JavaScript, Python and ReactJs etc. I enjoy creating unique and simplistic user interfaces in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Code debugging",
  "Video Editing",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am having keen interest about solving problems and creating web designs in new creative ways to drive innovation. By leveraging my Web Development experience I continually look for new and better ways to make tech accessible by all. I worked fine and in dedicated manner to realize my true potential.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div>
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
