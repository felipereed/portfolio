import React from "react";
import Layout from "./shared/Layout";
import data from "../data.json";
import Project from "./Project";
import "./ProjectDetails.css";

export default function ProjectDetails(props) {
  const project = data.find((i) => i.key == props.id);
  return (
    <div>
      <Layout>
        <div className="project-detail-desktop-media-query-container">
          <div>
            <a href={project.href} target="_blank">
              <Project src={project.src} alt={project.alt} />
            </a>
          </div>
          <div>
            <div className="project-details-title">
              <a
                className="project-details-title-link"
                href={project.href}
                target="_blank"
              >
                <h1>{project.name}</h1>
              </a>
            </div>
            <div className="project-details-info">
              <h5>{project.type}</h5>
              <p>{project.description}</p>
              <p>Technologies used:</p>
            </div>
            <div className="project-details-tech-images-container">
              {project.technologies.map((item, key) => (
                <img
                  className="project-details-tech-images"
                  key={key}
                  src={item}
                ></img>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
