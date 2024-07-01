import React from "react";

interface GradientButtonProps {
  btnText: string;
  urlLink: string;
}

function GradientButton({ btnText, urlLink }: GradientButtonProps) {
  return (
    <a
      className="gradient-btn-primary"
      href={urlLink}
      target="_blank"
      rel="noopener noreferrer">
      {btnText}
    </a>
  );
}

export default GradientButton;
