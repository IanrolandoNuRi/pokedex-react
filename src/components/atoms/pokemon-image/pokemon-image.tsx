import React from 'react';
interface ImageComponentProps {
  pokemonId: number;
    alt?: string;
    className?: string;
  }
  
const ImageComponent: React.FC<ImageComponentProps> = ({ pokemonId, alt, className }) => {
  //   return <img src={process.env.PUBLIC_URL + src} alt={alt} className={className} />;
  return <img
    src={"http://localhost:5173/pokemon-images/"+ pokemonId + ".png"}
    alt={alt} className={className}
  />;
};

export default ImageComponent;
