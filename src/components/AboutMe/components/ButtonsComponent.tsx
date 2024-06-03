import React from "react";
import GradientButton from "../../general/buttons/GradientButton";
import BracketButton from "../../general/buttons/BracketButton";
import { content } from "../../../content-data/content";

function ButtonsComponent() {
  return (
    <div className="btns-component">
      <GradientButton
        btnText={content.AboutMeSection.primaryBtnGradientTxt}
        urlLink={content.AboutMeSection.primaryBtnUrl}
      />
      <BracketButton
        btnText={content.AboutMeSection.secondaryBtnBracketTxt}
        urlLink={content.AboutMeSection.secondaryBtnUrl}
      />
    </div>
  );
}

export default ButtonsComponent;
