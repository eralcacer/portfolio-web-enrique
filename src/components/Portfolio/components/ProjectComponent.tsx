import React from "react";

import ProjectInformation from "../../../types/ProjectInformationType";
import { scaleUpAnimate } from "../../../services/animations-service/AnimationsService";
import BracketButton from "../../general/buttons/BracketButton";
import GradientButton from "../../general/buttons/GradientButton";
import ImageLogo from "./ImageLogo";
import GenerateIdService from "../../../services/id-generation/GenerateIdService";

interface ProjectComponentProps {
  projectInformation: ProjectInformation;
  index: number;
  uniqueKeyVal: string;
}

function ProjectComponent({
  projectInformation,
  index,
  uniqueKeyVal,
}: ProjectComponentProps) {
  const idService = GenerateIdService.getInstance();
  return (
    <div
      className="project-info-card"
      key={uniqueKeyVal}
      style={{ animation: scaleUpAnimate(index) }}>
      <div className="img-stack-component">
        {projectInformation.techStack &&
          projectInformation.techStack.map((technology, indexImg) => {
            const idVal = idService.generateUniqueId(
              uniqueKeyVal + indexImg.toString()
            );
            return <ImageLogo technology={technology} key={idVal} />;
          })}
      </div>
      <h3 className="gradient-txt-red-yellow">
        {projectInformation.projectName}
      </h3>
      <p>Technologies: {projectInformation.techStack.join(", ")}</p>
      <div className="links-comp">
        {projectInformation.liveUrl.trim() !== "" && (
          <GradientButton
            btnText="View Live"
            urlLink={projectInformation.liveUrl}
          />
        )}
        {projectInformation.sourceCodeUrl.trim() !== "" && (
          <BracketButton
            btnText="Source Code"
            urlLink={projectInformation.sourceCodeUrl}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectComponent;
