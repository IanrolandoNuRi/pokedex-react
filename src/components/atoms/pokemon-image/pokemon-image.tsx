import React from 'react';

interface ImageComponentProps {
    src: number;
    alt?: string;
    className?: string;
  }
  
  const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, className }) => {
    //   return <img src={process.env.PUBLIC_URL + src} alt={alt} className={className} />;
      return <img src={"http://localhost:5173/pokemon-images/"+ src + ".png"} alt={alt} className={className} />;
};
  
  export default ImageComponent;