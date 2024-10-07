import React from 'react';
import styles from './image-with-background.module.css';
import ImageComponent from '../../organisms/pokemon-image/pokemon-image';

interface ImageWithBackgroundComponentProps {
  pokemonId: number;
  marginTop?: string;
  marginBottom?: string;
}

const ImageWithBackground: React.FC<ImageWithBackgroundComponentProps> = (
  { pokemonId, marginTop, marginBottom }
) => {
  const cardStyle = {
    marginTop,
    marginBottom
  };
  return (
    <div className={styles.container} style={cardStyle}>
      <ImageComponent
        pokemonId={pokemonId}
        height='130px'
        width='130px'
      />
      <div className={styles.circle}></div>
    </div>

  )
};
export default ImageWithBackground;
