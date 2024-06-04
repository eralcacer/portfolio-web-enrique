import React from "react";

import { content } from "../../../../../content-data/content";

function RightSideTxt() {
  return (
    <div className="right-recap-comp">
      <h2 className="gradient-txt-red-yellow">
        {content.ExperienceInformation.experienceTitle}
      </h2>
      <p className="desc-txt">
        {content.ExperienceInformation.experienceDescTxt}
      </p>
    </div>
  );
}

export default RightSideTxt;
