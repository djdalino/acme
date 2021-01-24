import React from "react";
import "./event.css";
const EventBox = ({ month, date, event, line, location }) => {
  return (
    <div className="event-box">
      <div className="event-box-date">
        <p>{month}</p>
        <p>{date}</p>
      </div>

      <p className="line-1">{event}</p>
      <p className="line-2">{line}</p>
      <p className="line-3">{location}</p>
      <button className="get-more">Get More Insight</button>
      <div className="event-location"></div>
    </div>
  );
};

export default EventBox;
