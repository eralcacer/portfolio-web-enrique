import React from "react";

import "../styles/App.css";
import AboutMeMain from "../components/AboutMe/AboutMeMain";
import ExperienceMain from "../components/Experience/ExperienceMain";

function MainPage() {
  return (
    <div className="main-component">
      <AboutMeMain />
      <ExperienceMain />
    </div>
  );
}

export default MainPage;
