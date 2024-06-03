import React from "react";

import "./style/about-me.css";
import ImageBackgroundVector from "./components/ImageBackgroundVector";
import ContentSection from "./components/ContentSection";

function AboutMeMain() {
  return (
    <div className="about-me-comp">
      <div className="image-vector">
        <ContentSection />
        <ImageBackgroundVector />
      </div>
    </div>
  );
}

export default AboutMeMain;
