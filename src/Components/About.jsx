/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/** Background image */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Short description that expands on your professional focus.
 */
const description =
  "I'm a computer science student with a passion for full-stack development, AI, and cloud technologies. I enjoy solving complex problems and continually expanding my skills.";

/**
 * List of the most important skills and technologies.
 */
const skillsList = [
  "JavaScript, Python, SQL",
  "React JS, React Native",
  "REST API",
  "AWS Cloud",
  "Linux",
  "GitHub, Docker",
  "AI & Machine Learning",
  "Problem Solving,",
  
];

/**
 * A quote or personal statement to provide more context about your passion or work style.
 */
const detailOrQuote =
  "I am passionate about leveraging cutting-edge technologies to solve real-world problems, and I'm driven by the constant desire to learn and improve my skill set.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
