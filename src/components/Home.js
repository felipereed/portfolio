import React from "react";
import Layout from "./shared/Layout.js";
import Project from "./Project";
import { Link } from "react-router-dom";
import data from "../data.json";
import "./Home.css";
import ExternalLinks from "./shared/ExternalLinks.js";

export default function Home() {
  return (
    <Layout>
      <div className="home-media-query-desktop">
        <div className="home-desktop-links">
          <Link className="header-dropdown-menu-links" to="/about-me">
            About Me
          </Link>
          <hr />
          <p>
            <em>Projects</em>
          </p>
          <hr />
          <Link className="header-dropdown-menu-links" to="/1/details">
            Artlist
          </Link>
          <hr />
          <Link className="header-dropdown-menu-links" to="/2/details">
            Shipt
          </Link>
          <hr />
          <Link className="header-dropdown-menu-links" to="/3/details">
            Mood 4
          </Link>
          <hr />
          <Link className="header-dropdown-menu-links" to="/4/details">
            Plan My Trip
          </Link>
          <ExternalLinks />
        </div>

        <div className="home-projects-container">
          {data.map((item) => (
            <Link
              className="home-projects-links"
              to={`/${item.key}/details`}
              key={item.key}
            >
              <Project name={item.name} src={item.src} alt={item.alt} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
