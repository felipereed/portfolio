import React from "react";
import Layout from "./shared/Layout";
import "./AboutMe.css"

export default function AboutMe() {
  return (
    <div>
      <Layout>
        <p className="about-me-text">
          Hi. My name is Felipe. I’m a Software Engineer and web developer based
          in New York City. I have a passion for front-end programming languages and UX/UI design. My focus
          is on writing clean, maintainable, efficient code and designing
          beautiful and functional user experiences.
        </p>
      </Layout>
    </div>
  );
}
