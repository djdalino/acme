import React from "react";
import "./navbar.css";
import Logo from "../../images/acme/logo.png";
const Navbar = () => {
  return (
    <nav className="">
      <div className="container mx-auto d-flex">
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="logo-text">
          <div className="logo-text-container">
            <span className="research-text">Research Professional</span>
            <h1 className="platform">Platform</h1>
          </div>
        </div>
        <ul className="d-flex mx-10">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About us</a>
          </li>
          <li>
            <a href="/insights">Insights</a>
          </li>
          <li>
            <a href="/event">Events</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
