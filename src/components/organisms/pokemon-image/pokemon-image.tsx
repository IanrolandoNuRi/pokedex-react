import React from 'react';
import style from "./pokemon-image.module.css";

interface ImageComponentProps {
  pokemonId: number;
  alt?: string;
  height?: string;
  width?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ pokemonId, alt, height, width }) => {
  return <img
    src={"http://localhost:5173/pokemon-images/" + pokemonId + ".png"}
    alt={alt}
    className={style.img}
    draggable="false"
    style={{
      height: height || 'auto',  // Use provided height or default to 'auto'
      width: width || 'auto',    // Use provided width or default to 'auto'
    }}
  />;
};

export default ImageComponent;
