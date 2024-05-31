import React from "react";

interface BracketButtonProps {
  btnText: string;
  urlLink: string;
}

function BracketButton({ btnText, urlLink }: BracketButtonProps) {
  return (
    <a className="bracket-secondary-btn" href={urlLink}>
      <span className="bracket-gradient">&#123;</span>
      <span>{btnText}</span>
      <span className="bracket-gradient">&#125;</span>
    </a>
  );
}

export default BracketButton;
