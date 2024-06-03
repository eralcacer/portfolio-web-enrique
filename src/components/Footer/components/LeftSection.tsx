import React from "react";

import { content } from "../../../content-data/content";

function LeftSection() {
  return (
    <div className="left-footer">
      <h2>{content.MainInformation.name}</h2>
      <p>{content.FooterSection.profileDescription}</p>
    </div>
  );
}

export default LeftSection;
