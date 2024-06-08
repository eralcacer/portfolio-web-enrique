import React from "react";

import ButtonsComponent from "./ButtonsComponent";
import { content } from "../../../content-data/content";
import SocialMediaComponent from "./SocialMediaComponent";

function TextProfile() {
  return (
    <div className="text-profile-comp">
      <h1 className="welcome-txt">
        {content.AboutMeSection.mainTitleTopWhite}
        <br />
        {content.AboutMeSection.mainTitleBottomWhite}
        <span className="gradient-txt-red-yellow">
          {content.AboutMeSection.mainTitleGradient}
        </span>
      </h1>
      <p className="desc-txt">{content.AboutMeSection.descriptionText}</p>
      <ButtonsComponent />
      <SocialMediaComponent />
    </div>
  );
}

export default TextProfile;
