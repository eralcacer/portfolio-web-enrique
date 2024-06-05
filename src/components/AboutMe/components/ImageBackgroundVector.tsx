import React from "react";

import VectorBackground from "../../../assets/background-vector.png";

function ImageBackgroundVector() {
  return (
    <>
      <div className="vector-comp">
        <img
          className="img-elem"
          alt="Vector Background"
          src={VectorBackground}
        />
        <div className="box-card-animation"></div>
      </div>
    </>
  );
}

export default ImageBackgroundVector;
