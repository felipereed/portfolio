import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [dropdownMenu, updateDropdownMenu] = useState('header-hide-dropdown');
  useEffect(() => {}, []);
  const toggleHamburger = (e) => {
    document.querySelector(".hamburger").classList.toggle("is-active");
    toggleDropdown()
  };

  const toggleDropdown = () => {
    if (dropdownMenu == '') {
      updateDropdownMenu('header-hide-dropdown')
    } else {
      updateDropdownMenu('')
    }
  }
  return (
    <div>
      <div className="header-container">
        <Link className="header-link" to="/home">
          <h1>Felipe Lins</h1>
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
        <Link>About Me</Link>
        <hr />
        <p>Projects</p>
        <hr />
        <Link to="/1/details">Artlist</Link>
        <hr />
        <Link to="/2/details">Shipt</Link>
        <hr />
        <Link to="/3/details">Mood 4</Link>
        <hr />
        <Link to="/4/details">Plan My Trip</Link>
      </div>
      </div>
      
      <h5 className="header-occupation">
        Software Engineer | Full stack web developer
      </h5>
    </div>
  );
}
