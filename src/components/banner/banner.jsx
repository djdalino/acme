import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <React.Fragment>
      <div className="banner-line"></div>
      <div className="banner-container">
        <div className="acme-container container mx-auto">
          <div className="acme-platform">ACME Wealth Management Platform</div>
          <div className="acme-text">
            <p>Investment excellence</p>
            <p>Diversity of thought</p>
            <p>Organizational strength</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
