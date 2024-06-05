import React from "react";

import { content } from "../../../../../content-data/content";
import GradientButton from "../../../../general/buttons/GradientButton";
import CounterNumbers from "../../../../general/counter-numbers-animated/CounterNumbers";

function RightSideTxt() {
  return (
    <div className="right-recap-comp">
      <h2 className="gradient-txt-red-yellow">
        {content.ExperienceInformation.experienceTitle}
      </h2>
      <p className="desc-txt">
        {content.ExperienceInformation.experienceDescTxt}
      </p>
      <div className="btns-component">
        <div className="counter-container">
          <div className="counter-inside">
            <CounterNumbers
              numberCounter={
                content.ExperienceInformation.counterComponet.firstCounterComp
                  .number
              }
            />
            <p className="counter-txt">
              {
                content.ExperienceInformation.counterComponet.firstCounterComp
                  .txt
              }
            </p>
          </div>
          <div className="counter-inside">
            <CounterNumbers
              numberCounter={
                content.ExperienceInformation.counterComponet.secondCounterComp
                  .number
              }
            />
            <p className="counter-txt">
              {
                content.ExperienceInformation.counterComponet.secondCounterComp
                  .txt
              }
            </p>
          </div>
          <div className="counter-inside">
            <CounterNumbers
              numberCounter={
                content.ExperienceInformation.counterComponet.thirdCounterComp
                  .number
              }
            />
            <p className="counter-txt">
              {
                content.ExperienceInformation.counterComponet.thirdCounterComp
                  .txt
              }
            </p>
          </div>
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
