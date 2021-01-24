import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../images/acme/logo.png";
import MobileLogo from "../../images/acme/Mobile/mobile-logo.png";
const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const onBurgerClick = () => {
    setBurger(!burger);
  };
  const onScrollToHome = () => {
    console.log("home");
  };
  return (
    <nav className={`navbar-wrapper`}>
      <div className="navbar">
        <div className="navbar-header">
          <div className="navbar-logo">
            <a to="#" onClick={onScrollToHome}>
              <img className="width1024" src={Logo} alt="Logo" />
              <img className="widthPhone" src={MobileLogo} alt="mobile logo" />
            </a>
          </div>
          <div className="logo-text width1024">
            <div className="logo-text-container">
              <span className="research-text">Research Professional</span>
              <h1 className="platform">Platform</h1>
            </div>
          </div>
          <div className="navbar-burger" onClick={() => onBurgerClick()}>
            <div className={`${burger ? "toggle" : ""} line1`}></div>
            <div className={`${burger ? "toggle" : ""} line2`}></div>
            <div className={`${burger ? "toggle" : ""} line3`}></div>
          </div>
        </div>

        <ul className={`navbar-ul ${burger ? "show-nav" : ""}`}>
          <li onClick={() => onBurgerClick()}>
            <a to="#" onClick={onScrollToHome}>
              Home
            </a>
          </li>
          <li onClick={() => onBurgerClick()}>
            <a to="#" onClick={onScrollToHome}>
              About Us
            </a>
          </li>
          <li onClick={() => onBurgerClick()}>
            <a to="#" onClick={onScrollToHome}>
              Insights
            </a>
          </li>
          <li onClick={() => onBurgerClick()}>
            <a to="#" onClick={onScrollToHome}>
              Events
            </a>
          </li>
          <li onClick={() => onBurgerClick()}>
            <a to="#" onClick={onScrollToHome}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>

    // <nav className="">
    //   <div className="container mx-auto d-flex">
    //     <div className="logo">
    //       <img src={Logo} />
    //     </div>
    // <div className="logo-text">
    //   <div className="logo-text-container">
    //     <span className="research-text">Research Professional</span>
    //     <h1 className="platform">Platform</h1>
    //   </div>
    // </div>
    //     <div className="navbar-burger" onClick={() => onBurgerClick()}>
    //       <div className={`${burger ? "toggle" : ""} line1`}></div>
    //       <div className={`${burger ? "toggle" : ""} line2`}></div>
    //       <div className={`${burger ? "toggle" : ""} line3`}></div>
    //     </div>
    //     <ul className=" d-flex mx-10">
    //       <li>
    //         <a href="/home">Home</a>
    //       </li>
    //       <li>
    //         <a href="/about">About us</a>
    //       </li>
    //       <li>
    //         <a href="/insights">Insights</a>
    //       </li>
    //       <li>
    //         <a href="/event">Events</a>
    //       </li>
    //       <li>
    //         <a href="/contact">Contact us</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;
