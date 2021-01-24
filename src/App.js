import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Insights from "./components/insights/insight";
import Contact from "./components/contact/contactUs";
import Event from "./components/events/events";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Insights />
      <Contact />
      <Event />
    </React.Fragment>
  );
}

export default App;
