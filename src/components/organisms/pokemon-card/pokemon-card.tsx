import React, { useEffect, useState, useMemo } from 'react';
import { getPokedex, getKantoPokedex, getAllPokemonDetails } from '../../../services/pokeapi';
import styles from './pokemon-card.module.css';
import TitlePokemonCard from '../../molecules/title-pokemon-card/title-pokemon-card';
import { typeBackgroundColors } from '../../../types/typeColors';
import ImageWithBackground from '../../molecules/image-with-background/image-with-background';
import TextCard from '../../atoms/text-card/text-card';
import ColorCircles from '../../atoms/pokemon-types-circles/pokemon-types-circles';

interface PokemonDetail {
  id: number;
  abilities: string[];
  height: number;
  name: string;
  types: string[];
  weight: number;
}

const PokemonAttribute = ({ label, value }: { label: string, value: string }) => (
  <div className={styles.pokemonAttribute}>
    <TextCard content={label} fontWeight="bold" color="blue" />
    <TextCard content={value} color="blue" />
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
          <PokemonAttribute label="Height:" value={String(pokemon.height)} />
          <PokemonAttribute label="Weight:" value={String(pokemon.weight)} />
        </div>


        <div className={styles.pokemonAttribute}>
          <TextCard content="Abilities:" fontWeight="bold" color="blue" />
          {pokemon.abilities.map((ability) => (
            <TextCard key={ability} content={ability} color="blue" />
          ))}
        </div>
        <div className={styles.pokemonAttribute}>
          <TextCard content="Types:" fontWeight="bold" color="blue" />
          {pokemon.types.map((type) => (
            <TextCard key={type} content={type} color="blue" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;