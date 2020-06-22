import React from "react";
import { Link } from "react-router-dom"
import "./Header.css"
export default function Header() {
  return (
    <div>
      <Link className="header-link" to="/home">
        <h1>Felipe Lins</h1>
        <h5>Software Engineer | Full stack web developer</h5>
      </Link>
    </div>
  );
}
