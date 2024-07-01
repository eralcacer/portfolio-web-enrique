import React, { useEffect, useState } from "react";

import ImageService from "../../../services/images-service/ImageService";

interface ImageLogoProps {
  technology: string;
}

function ImageLogo({ technology }: ImageLogoProps) {
  const [logoPath, setLogoPath] = useState<string>("");
  useEffect(() => {
    if (technology) {
      loadImage();
    }
  });

  const loadImage = async (): Promise<void> => {
    const imagePath = await ImageService.getImagePath(technology);
    setLogoPath(imagePath);
  };
  return (
    <>
      {logoPath ? (
        <div>
          <img className="img-logo" src={logoPath} alt={`${technology} logo`} />
        </div>
      ) : null}
    </>
  );
}

export default ImageLogo;
