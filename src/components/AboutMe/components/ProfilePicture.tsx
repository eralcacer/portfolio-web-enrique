import React from "react";

import ProfileTransparentImg from "../../../assets/profile-pic-color-transparent.png";
import CodeComp from "../../general/circle-code-background/components/CodeComp";

function ProfilePicture() {
  return (
    <div className="profile-comp">
      <div className="profile-img-comp">
        <div className="image-circle">
          <img
            className="profile-img"
            src={ProfileTransparentImg}
            alt="Enrique Profile"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePicture;
