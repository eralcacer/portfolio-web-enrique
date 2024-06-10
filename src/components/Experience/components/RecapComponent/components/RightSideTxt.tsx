import React from "react";

import { content } from "../../../../../content-data/content";
import GradientButton from "../../../../general/buttons/GradientButton";
import CounterNumbers from "../../../../general/counter-numbers-animated/CounterNumbers";
import CounterType from "../../../../../types/CounterType";

function RightSideTxt() {
  return (
    <div className="right-recap-comp">
      <h1 className="gradient-txt-red-yellow">
        {content.ExperienceInformation.experienceTitle}
      </h1>
      <p className="desc-txt">
        {content.ExperienceInformation.experienceDescTxt}
      </p>
      <div className="btns-component">
        <div className="counter-container">
          {content.ExperienceInformation.counterComponet.map(
            (information: CounterType, index: number) => {
              return (
                <div className="counter-inside" key={index}>
                  <CounterNumbers numberCounter={information.number} />
                  <p className="counter-txt">{information.txt}</p>
                </div>
              );
            }
          )}
        </div>
        <GradientButton
          btnText={content.ExperienceInformation.downloadBtnTxt}
          urlLink={content.ExperienceInformation.downloadLinkExperience}
        />
      </div>
    </div>
  );
}

export default RightSideTxt;
