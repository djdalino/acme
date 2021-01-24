import React from "react";
import "./event.css";
import logoImage from "../../images/acme/Mobile/mobile-logo-img.png";
import EventBox from "./eventBox";

const Events = () => {
  const eventsArr = [
    {
      month: "Jan",
      date: 28,
      event: "Insight Exchange Network",
      line: "Join us for this conference showcasing innovation",
      location: "Chicago, IL"
    },
    {
      month: "Feb",
      date: 12,
      event: "Citywide Buyer's Retreat",
      line:
        "Find out how banks are responding to the changing future of interest...",
      location: "The Wagner, New York"
    },
    {
      month: "May",
      date: "6",
      event: "Research Exchange",
      line:
        "Find out the best online resources to help with your Investment...",
      location: "London England"
    }
  ];
  return (
    <div className="event-container">
      <div className="container mx-auto">
        <h1 className="upcoming-event">Upcoming Events</h1>
        <p className="tagline">
          This needs a great tagline, but I'll fill it later
        </p>
        <div className="event-box-container">
          {eventsArr.map(item => {
            const { month, date, event, line, location } = item;
            return (
              <EventBox
                month={month}
                date={date}
                event={event}
                line={line}
                location={location}
              />
            );
          })}
        </div>
        {/* <EventBox
          month="Jan"
          date="28"
          event="Insight Exchange Network"
          line="Join us for this conference showcasing innovation"
          localtion="Chicago, IL"
        />
        <EventBox
          month="Feb"
          date="12"
          event="Citywide Buyer's Retreat"
          line="Find out how banks are responding to the changing future of interest..."
          localtion="The Wagner, New York"
        />
        <EventBox
          month="May"
          date="6"
          event="Research Exchange"
          line="Find out the best online resources to help with your Investment..."
          localtion="London England"
        /> */}
      </div>
      <div className="logoImg">
      <img src={logoImage} alt="logo" />
      </div>
    </div>
  );
};

export default Events;
