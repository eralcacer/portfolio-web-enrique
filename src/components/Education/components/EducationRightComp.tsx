import React from "react";

import { content } from "../../../content-data/content";
import TextInformation from "./TextInformation";

function EducationRightComp() {
  return (
    <div className="education-right">
      <h1 className="gradient-txt-red-yellow">Work Experience</h1>
      <TextInformation txtInformation={content.ExperienceComp.workArr} />
    </div>
  );
}

export default EducationRightComp;
