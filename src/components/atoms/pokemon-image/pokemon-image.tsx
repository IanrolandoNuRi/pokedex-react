import React from 'react';
import style from "./pokemon-image.module.css";

interface ImageComponentProps {
  pokemonId: number;
    alt?: string;
  }
  
const ImageComponent: React.FC<ImageComponentProps> = ({ pokemonId, alt }) => {
  //   return <img src={process.env.PUBLIC_URL + src} alt={alt} className={className} />;
  return <img
    src={"http://localhost:5173/pokemon-images/"+ pokemonId + ".png"}
    alt={alt}
    className={style.img}
    draggable="false"
  />;
};

export default ImageComponent;
