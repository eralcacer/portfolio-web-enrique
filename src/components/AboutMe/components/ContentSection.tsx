import React from "react";
import ProfilePicture from "./ProfilePicture";
import TextProfile from "./TextProfile";

function ContentSection() {
  return (
    <div className="about-top-section">
      <TextProfile />
      <ProfilePicture />
    </div>
  );
}

export default ContentSection;
