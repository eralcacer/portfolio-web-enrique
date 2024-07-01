import { useRef } from "react";

import "./style/portfolio-style.css";
import { content } from "../../content-data/content";
import ProjectComponent from "./components/ProjectComponent";
import useLazyLoader from "../../hooks/useLazyLoader/useLazyLoader";
import ProjectInformation from "../../types/ProjectInformationType";

function PortfolioMain() {
  const portfolioRef = useRef(null);
  const isLazyLoaderInView = useLazyLoader({
    componentRef: portfolioRef,
    optionsMargin: { rootMargin: "100px" },
  });

  return (
    <div className="portfolio-comp">
      <h1 className="gradient-txt-red-yellow">Projects</h1>
      <div className="portfolio-grid-comp" ref={portfolioRef}>
        {isLazyLoaderInView &&
          content.ProjectsComp.projectsArr.map(
            (projectInformation: ProjectInformation, index: number) => {
              return (
                <ProjectComponent
                  projectInformation={projectInformation}
                  index={index}
                />
              );
            }
          )}
      </div>
    </div>
  );
}

export default PortfolioMain;
