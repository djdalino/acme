import React from "react";
import "./insight.css";
import Card from "./Card";
import Icon1 from "../../images/acme/icon-01.png";
import Icon2 from "../../images/acme/icon-02.png";
import Icon3 from "../../images/acme/icon-03.png";
const Insight = () => {
  return (
    <div className="insight-container">
      <div className="container mx-auto">
        <h1 className="acme-insight">ACME Insights</h1>
        <p className="acme-factors">
          How are factors being used around the world?
        </p>
        <div className="insight-flex">
          <Card
            image={Icon1}
            text="Global Factor"
            text2="Investing Study"
            border="insight-blue"
          />
          <Card
            style={{ whiteSpace: "pre-line" }}
            image={Icon2}
            text="2019"
            text2="Outlook"
            border="insight-bluegreen"
          />
          <Card
            image={Icon3}
            text="Capital Market"
            text2="Assumptions"
            border="insight-lightblue"
          />
        </div>
      </div>
    </div>
  );
};

export default Insight;
