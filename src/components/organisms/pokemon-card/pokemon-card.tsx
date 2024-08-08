import React, { useEffect, useState, useMemo } from 'react';
import { getPokedex, getKantoPokedex, getAllPokemonDetails } from '../../../services/pokeapi';
import styles from './pokemon-card.module.css';
import TitlePokemonCard from '../../molecules/title-pokemon-card/title-pokemon-card';
import {typeBackgroundColors} from '../../../types/typeColors';
import ImageWithBackground from '../../molecules/image-with-background/image-with-background';
import TextCard from '../../atoms/text-card/text-card';

interface PokemonDetail {
  id: number;
  abilities: string[];
  height: number;
  name: string;
  types: string[];
  weight: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const cardStyle = {
    borderColor: typeBackgroundColors[pokemon.types[0]],
  };
  return (
    <div className={styles.card} style={cardStyle}>
      <TitlePokemonCard
        pokemonId={pokemon.id}
        pokemonTypes={pokemon.types}
      />
      <TextCard
        content={pokemon.name}
        headingLevel='h3'
        alignment='center'
        textTransform='capitalize'
      />
      <ImageWithBackground
          pokemonId={pokemon.id}
      />
      <p><strong>Height:</strong> {pokemon.height}</p>
      <p><strong>Weight:</strong> {pokemon.weight}</p>
      <p><strong>Abilities:</strong></p>
      <ul>
        {memoizedPokemonDetails.map((pokemon) => (
          <li key={pokemon.id}>
            <h3>{pokemon.name}</h3>
            <p><strong>Height:</strong> {pokemon.height}</p>
            <p><strong>Weight:</strong> {pokemon.weight}</p>
            <p><strong>Abilities:</strong></p>
            <ul>
              {pokemon.abilities.map((ability) => (
                <li key={ability}>{ability}</li>
              ))}
            </ul>
            <p><strong>Types:</strong></p>
            <ul>
              {pokemon.types.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonCard;