import React from "react";
import GithubButton from "../../general/social-media-icons/GithubButton";
import LinkedinButton from "../../general/social-media-icons/LinkedinButton";

function SocialMediaComponent() {
  return (
    <>
      <h2 className="follow-title">Follow Me</h2>
      <div className="social-media-comp">
        <LinkedinButton />
        <GithubButton />
      </div>
    </>
  );
}

export default SocialMediaComponent;
