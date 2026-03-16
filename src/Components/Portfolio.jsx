/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import "../Component.css";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design_desk2.webp";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Building a Real-Time Virtual Calculator🎉",
    description: "Developed a user-friendly command-line interface that accepts input expressions and evaluatesthem using advanced mathematical functions and operators.",
    url: "https://shash319.github.io/The-Virtual-Calculator/",
  },
  {
    title: "Desiging Greating Card App 🎀",
    description: "Build a Greating card app that used to create Memorable cards.Utilized the deleting property and timer feature to delete the existing cards.Designed the system to create unlimited cards and delete them in a single click",
    url: "https://shash319.github.io/Greeting-App/",
  },
  {
    title: "Heliverse Backend Interaction 💡",
    description: "Implementing the pagination property and each page containing 20 items. We utilizing Backend algorithms to fetch items and display in client-side.",
    url: "https://shash319.github.io/Haliverse_Shasawatpal/",
  },
  {
    title: "Landing page of AMAZON website 📐 ",
    description:"this is cloning of Amazon landing-page that specifies the user-friendly design. It containing all the major components for a Amazon website requires like Search-bar, carousel, item templets, footer section , etc.",
    url: "https://shash319.github.io/Amazon_SimpleC/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem", marginLeft: "8rem", gap: "6rem" }}>
        {/* <div style={{ maxWidth: "40%", alignSelf: "center" }} className="portfolio-img">
          
          <div class="card-container1">
            <div class="card1">
              <div class="front1">
                <img
                  src={image}
                  style={{ height: "60vh", width: "100%", objectFit: "cover", borderRadius: "0.5rem", boxShadow: "20px 20px 10px lightblue" }}
                  alt={imageAltText}
                />
              </div>
              </div>
              <div class="back1">
                <img
                  src={image}
                  style={{ height: "60vh", width: "100%", objectFit: "cover", borderRadius: "0.5rem", boxShadow: "20px 20px 10px lightblue" }}
                  alt={imageAltText}
                />
              </div>
            </div>
          </div> */}

          <div style={{ maxWidth: "40%", alignSelf: "center" }} className="portfolio-img">

              <div className="card-container1">
                <div className="card1">

                  <div className="front1">
                    <img
                      src={image}
                      alt={imageAltText}
                    />
                  </div>

                  <div className="back1">
                    <img
                      src={image}
                      alt={imageAltText}
                    />
                  </div>

                </div>
              </div>

          </div>
          
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
