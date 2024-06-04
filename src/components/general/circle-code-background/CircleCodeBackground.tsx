import React from "react";

import "./style/circle-code.css";
import CodeComp from "./components/CodeComp";
import ProfileImage from "../../../assets/likedin-image-transparent.png";

function CircleCodeBackground() {
  return (
    <div className="circle-code">
      <CodeComp />
      <div className="image-circle">
        <img className="image-elm" src={ProfileImage} alt="Profile Enrique" />
      </div>
    </div>
  );
}

export default CircleCodeBackground;
