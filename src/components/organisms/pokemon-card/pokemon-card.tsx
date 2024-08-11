import React from 'react';
import styles from './pokemon-card.module.css';
import { typeBackgroundColors } from '../../../types/typeColors';
import ImageWithBackground from '../../molecules/image-with-background/image-with-background';
import TextCard from '../../atoms/text-card/text-card';
import ColorCircles from '../../atoms/pokemon-types-circles/pokemon-types-circles';

// interface PokemonDetail {
//   id: number;
//   abilities: string[];
//   height: number;
//   name: string;
//   types: string[];
//   weight: number;
// }

const PokemonAttribute = ({ label, value }: { label: string, value: string }) => (
  <div className={styles.pokemonAttribute}>
    <TextCard content={label} fontWeight="bold"/>
    <TextCard content={value}/>
  </div>
);

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const cardStyle = {
    borderColor: typeBackgroundColors[pokemon.types[0]],
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.pokemonCardGrid}>
        <div className={styles.headerCardGrid}>
          <TextCard content={`#${pokemon.id}`} headingLevel="h5"/>
          <ColorCircles
            circles={pokemon.types}
          />
        </div>
        <TextCard content={pokemon.name} headingLevel="h3" alignment="center" textTransform="capitalize" />
        <div className={styles.imageContainer}>
          <ImageWithBackground pokemonId={pokemon.id} />
        </div>
        <div className={styles.attribute}>
          <PokemonAttribute label="Height:&nbsp;" value={String(pokemon.height/10) + " m."} />
          <PokemonAttribute label="Weight:&nbsp;" value={String(pokemon.weight/10) + " kg."} />
        </div>
        <div className={styles.example}>
          <PokemonAttribute label="Abilities:" value={
            pokemon.abilities.map((ability:string) => ability)} />
          <PokemonAttribute label="Types:" value={
            pokemon.types.map((type:string) => type)} />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;