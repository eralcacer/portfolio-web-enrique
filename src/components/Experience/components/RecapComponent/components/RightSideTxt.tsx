import React from "react";

import { content } from "../../../../../content-data/content";
import GradientButton from "../../../../general/buttons/GradientButton";

function RightSideTxt() {
  return (
    <div className="right-recap-comp">
      <h2 className="gradient-txt-red-yellow">
        {content.ExperienceInformation.experienceTitle}
      </h2>
      <p className="desc-txt">
        {content.ExperienceInformation.experienceDescTxt}
      </p>
      <GradientButton
        btnText={content.ExperienceInformation.downloadBtnTxt}
        urlLink={content.ExperienceInformation.downloadLinkExperience}
      />
    </div>
  );
}

export default RightSideTxt;
