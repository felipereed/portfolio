import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [dropdownMenu, updateDropdownMenu] = useState("header-hide-dropdown");
  useEffect(() => {}, []);
  const toggleHamburger = (e) => {
    document.querySelector(".hamburger").classList.toggle("is-active");
    toggleDropdown();
  };

  const toggleDropdown = () => {
    if (dropdownMenu == "") {
      closeDropdown();
    } else {
      updateDropdownMenu("");
    }
  };

  const closeDropdown = () => {
    updateDropdownMenu("header-hide-dropdown");
  }
  return (
    <div>
      <div className="header-container">
        <Link className="header-link" to="/home">
          <h1>Felipe Reed</h1>
        </Link>
        <button
          className="hamburger hamburger--spring"
          type="button"
          onClick={toggleHamburger}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className={`header-dropdown-menu ${dropdownMenu}`}>
          <Link className="header-dropdown-menu-links" to="/about-me">About Me</Link>
          <hr />
          <p>
            <em>Projects</em>
          </p>
          <hr />
          <Link className="header-dropdown-menu-links" to="/1/details" onClick={closeDropdown}>
            Artlist
          </Link>
          <hr />
          <Link className="header-dropdown-menu-links" to="/2/details" onClick={closeDropdown}>
            Shipt
          </Link>
          <hr />
          <Link className="header-dropdown-menu-links" to="/3/details" onClick={closeDropdown}>
            Mood 4
          </Link>
          <hr />
          <Link className="header-dropdown-menu-links" to="/4/details" onClick={closeDropdown}>
            Plan My Trip
          </Link>
        </div>
      </div>

      <h5 className="header-occupation">
        Software Engineer | Full stack web developer
      </h5>
    </div>
  );
}
