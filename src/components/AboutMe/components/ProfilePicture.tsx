import React from "react";

import ProfileTransparentImg from "../../../assets/profile-pic-color-transparent.png";

function ProfilePicture() {
  return (
    <div className="profile-comp">
      {/* <div className="profile-img-comp"> */}
      <img
        className="profile-img"
        src={ProfileTransparentImg}
        alt="Enrique Profile"
      />
      {/* </div> */}
    </div>
  );
}

export default ProfilePicture;
