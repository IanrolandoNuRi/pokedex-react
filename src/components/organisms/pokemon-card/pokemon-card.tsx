import React from 'react';
import { PokemonDetail } from '../../../types/pokemonTypes';
import styles from './pokemon-card.module.css';
import TitlePokemonCard from '../../molecules/title-pokemon-card/title-pokemon-card';
import ImageComponent from '../../atoms/pokemon-image/pokemon-image';

interface PokemonCardProps {
  pokemon: PokemonDetail;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className={styles.card}>
      <TitlePokemonCard
        pokemonId={pokemon.id}
        pokemonTypes={pokemon.types}
      />
      <h3>{pokemon.name}</h3>
      <ImageComponent
          src={pokemon.id}
      />
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
    </div>
  );
};

export default PokemonCard;