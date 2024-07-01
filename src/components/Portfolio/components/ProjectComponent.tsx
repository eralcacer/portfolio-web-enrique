import React from "react";

import ProjectInformation from "../../../types/ProjectInformationType";
import { scaleUpAnimate } from "../../../services/animations-service/AnimationsService";
import BracketButton from "../../general/buttons/BracketButton";
import GradientButton from "../../general/buttons/GradientButton";
import ImageLogo from "./ImageLogo";

interface ProjectComponentProps {
  projectInformation: ProjectInformation;
  index: number;
}

function ProjectComponent({
  projectInformation,
  index,
}: ProjectComponentProps) {
  return (
    <div
      className="project-info-card"
      key={index}
      style={{ animation: scaleUpAnimate(index) }}>
      <div className="img-stack-component">
        {projectInformation.techStack &&
          projectInformation.techStack.map((technology, indexImg) => {
            const idVal =
              projectInformation.projectName +
              indexImg.toString() +
              index.toString();
            return <ImageLogo technology={technology} keyVal={idVal} />;
          })}
      </div>
      <h3 className="gradient-txt-red-yellow">
        {projectInformation.projectName}
      </h3>
      <p>Tech Stack: {projectInformation.techStack.join(", ")}</p>
      <div className="links-comp">
        <GradientButton
          btnText="View Live"
          urlLink={projectInformation.liveUrl}
        />
        <BracketButton
          btnText="Source"
          urlLink={projectInformation.sourceCodeUrl}
        />
      </div>
    </div>
  );
}

export default ProjectComponent;
