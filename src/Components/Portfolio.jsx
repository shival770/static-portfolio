/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written, and more.
 */

import React from "react";

/** Desk image */
// import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects to display for your project links section.
 */
const projectList = [
  {
    title: "GPT-3 Frontend Application",
    description:
      "Built a frontend interface using React to interact with OpenAI's GPT-3 API. The app allows users to input custom prompts and view generated responses in real-time, providing a seamless user experience for experimenting with the model.",
    url: "https://github.com/shival770/GPT3-Front-End",
  },
  {
    title: "Real Estate Web App",
    description:
      "Created a responsive property management platform using the MERN stack. Integrated RESTful APIs for property listing, booking, and user management.",
    url: "https://github.com/shival770/Estate-managment-app-react-",
  },
  {
    title: "Binance Crypto Trading App",
    description:
      "Developed a frontend application using React that utilizes WebSocket to display live candlestick patterns for cryptocurrency trading, providing users with real-time market data.",
    url: "https://github.com/shival770/Binance-Market-App ",
  },
  {
    title: "Chat Application",
    description:
      "Developed a real-time chat application using React, Node.js, and WebSocket for seamless communication. Implemented message notifications and user authentication.",
    url: "https://github.com/shival770/React-Chat-APP",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={'https://static1.bigstockphoto.com/7/7/2/large1500/277893829.jpg'}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
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
