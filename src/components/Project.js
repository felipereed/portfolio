import React from "react";
import "./Project.css";

export default function Project(props) {
  return (
    <div className="project-image-container">
      <img className="project-image" src={props.src} alt={props.alt}></img>
      {props.name ? (
        <div className="project-image-overlay">
          <div className="project-image-overlay-text">{props.name}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
