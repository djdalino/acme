import React from "react";
import "./footer.css";
import Tweeter from "../../images/acme/soc-tweeter.png";
import Facebook from "../../images/acme/soc-facebook.png";
import LinkedIn from "../../images/acme/soc-linkedin.png";
import Email from "../../images/acme/soc-mail.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-flex container mx-auto">
        <div className="info">
          <p>Call us at 111-222-333</p>
          <p>for more information</p>
        </div>
        <div className="social-media">
          <p className="social-share">Social Share</p>
          <a href="/">
            <img src={Tweeter} alt="Tweeter" />
          </a>
          <a href="/">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="/">
            <img src={Email} alt="Email" />
          </a>
        </div>
      </div>


      <div className="footer-buttons">
        <div className="but">
          <div className="two-but">
            <a href="#">Privacy Policy</a>
            <a href="#">Term of Use</a>
            </div>
          <a href="#">Site Links</a>
        </div>
        <div className="full-but">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Insights</a>
        <a href="#">Events</a>
        <a href="#">Due Dilligence</a>
        <a href="#">Contact Us</a>
        </div>

      </div>

    </div>
  );
};

export default Footer;
