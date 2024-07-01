import React from "react";

import "../styles/App.css";
import AboutMeMain from "../components/AboutMe/AboutMeMain";
import ExperienceMain from "../components/Experience/ExperienceMain";
import EducationMain from "../components/Education/EducationMain";
import PortfolioMain from "../components/Portfolio/PortfolioMain";

function MainPage() {
  return (
    <div className="main-component">
      <AboutMeMain />
      <ExperienceMain />
      <EducationMain />
      <PortfolioMain />
    </div>
  );
}

export default MainPage;
