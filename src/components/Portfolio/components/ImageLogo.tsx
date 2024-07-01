import React, { useEffect, useState } from "react";

import ImageService from "../../../services/images-service/ImageService";

interface ImageLogoProps {
  technology: string;
  keyVal: string;
}

function ImageLogo({ technology, keyVal }: ImageLogoProps) {
  const [logoPath, setLogoPath] = useState<string>("");
  useEffect(() => {
    if (technology) {
      loadImage();
    }
  });

  console.log(keyVal);
  const loadImage = async (): Promise<void> => {
    const imagePath = await ImageService.getImagePath(technology);
    setLogoPath(imagePath);
  };

  return (
    <div key={keyVal}>
      {logoPath && (
        <img className="img-logo" src={logoPath} alt={`${technology} logo`} />
      )}
    </div>
  );
}

export default ImageLogo;
