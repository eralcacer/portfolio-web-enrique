import React from "react";

import TextInformationType from "../../../types/TextInformationType";

interface TextInformationProps {
  txtInformation: TextInformationType[];
}

function TextInformation({ txtInformation }: TextInformationProps) {
  return (
    <>
      {txtInformation.map((information, index) => (
        <div className="txt-information">
          <div key={index}>
            <h3 className="headline-txt">{information.headline}</h3>
            <div className="information-comp">
              <p>{information.txt}</p>
              <p>{information.dates}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TextInformation;
