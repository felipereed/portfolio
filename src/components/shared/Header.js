import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [dropdownMenu, updateDropdownMenu] = useState([]);
  useEffect(() => {}, []);
  const toggleHamburger = (e) => {
    document.querySelector(".hamburger").classList.toggle("is-active");
    updateDropdownMenu();
  };
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
        <div
          className={`header-dropdown-menu ${dropdownMenu}`}
          onClick={updateDropdownMenu}
        ></div>
      </div>
      <div>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </div>
      <h5 className="header-occupation">
        Software Engineer | Full stack web developer
      </h5>
    </div>
  );
}
