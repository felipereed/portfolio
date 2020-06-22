import React from 'react'
import "./Project.css"

export default function Project(props) {
  return (
    <div className="project-image-container">
      <img className="project-image" src={props.src} alt={props.alt}></img>
    </div>
  )
}
