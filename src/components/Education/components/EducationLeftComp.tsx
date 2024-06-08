import React from "react";

import { content } from "../../../content-data/content";
import TextInformation from "./TextInformation";
import TextInformationType from "../../../types/TextInformationType";

function EducationLeftComp() {
  return (
    <div className="education-left">
      <h1 className="gradient-txt-red-yellow">Education</h1>
      <TextInformation txtInformation={content.EducationComp.educationArr} />
    </div>
  );
}

export default EducationLeftComp;
