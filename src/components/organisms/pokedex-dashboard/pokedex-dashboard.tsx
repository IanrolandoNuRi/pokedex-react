import React, { useEffect, useState, useMemo } from 'react';
import { getPokedex, getKantoPokedex, getAllPokemonDetails } from '../../../services/pokeapi';
import styles from './pokedex-dashboard.module.css';
import PokemonCard from '../pokemon-card/pokemon-card';
import TextCard from '../../atoms/text-card/text-card';

interface PokemonDetail {
  id: number;
  abilities: string[];
  height: number;
  name: string;
  types: string[];
  weight: number;
}

const Pokedex: React.FC = () => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokedexData = async () => {
      try {
        const pokedexData = await getPokedex();
        const kantoPokedex = pokedexData.results.find((pokedex: { name: string }) => pokedex.name === 'kanto');

        if (kantoPokedex) {
          const kantoData = await getKantoPokedex(kantoPokedex.url);
          const kantoEntries = kantoData.pokemon_entries;
          const pokemonIds = kantoEntries.map((entry: { entry_number: number }) => entry.entry_number);
          const allPokemonDetails = await getAllPokemonDetails(pokemonIds);
          const detailedPokemon = allPokemonDetails.map(({ pokemon }: any) => {
            return {
              id: pokemon.id,
              abilities: pokemon.abilities.map((ability: { ability: { name: string } }) => ability.ability.name),
              height: pokemon.height,
              name: pokemon.name,
              types: pokemon.types.map((types: { type: { name: string } }) => types.type.name),
              weight: pokemon.weight,
            };
          });

          setPokemonDetails(detailedPokemon);
        } else {
          setError('Kanto Pokedex not found');
        }
      } catch (error) {
        setError('Failed to fetch Pokedex data');
      }
    };

    fetchPokedexData();
  }, []);

  const memoizedPokemonDetails = useMemo(() => pokemonDetails, [pokemonDetails]);

  if (error) {
    return <div className={styles.pokedex}>Error: {error}</div>;
  }

  if (memoizedPokemonDetails.length === 0) {
    return <div className={styles.pokedex}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {/* 
      This should be move to another page or template
      <TextCard
        content={"kanto pokedex"}
        headingLevel='h2'
        alignment='center'
        textTransform='capitalize'
      /> */}
      {memoizedPokemonDetails.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
};

export default Pokedex;
