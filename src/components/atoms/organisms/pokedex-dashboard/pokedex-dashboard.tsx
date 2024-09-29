import React from 'react';
import PokemonCard from '../pokemon-card/pokemon-card';
import styles from './pokedex-dashboard.module.css';

interface PokemonDetail {
  id: number;
  abilities: string[];
  height: number;
  name: string;
  types: string[];
  weight: number;
}

interface PokedexDashboardProps {
  pokemonDetails: PokemonDetail[];
}

const PokedexDashboard: React.FC<PokedexDashboardProps> = ({ pokemonDetails }) => {
  if (pokemonDetails.length === 0) {
    return <p>No Pokémon available to display.</p>;
  }

  return (
    <div className={styles.container}>
      {pokemonDetails.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokedexDashboard;
