import React, { useEffect, useState, useMemo } from 'react';
import { getPokedex, getKantoPokedex, getAllPokemonDetails } from '../../../services/pokeapi';
import styles from './pokemon-card.module.css';
import TitlePokemonCard from '../../molecules/title-pokemon-card/title-pokemon-card';
import ImageComponent from '../../atoms/pokemon-image/pokemon-image';

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
          console.log("here ",allPokemonDetails)

          const detailedPokemon = allPokemonDetails.map(({ pokemon }: any) => {
            return {
              id: pokemon.id,
              abilities: pokemon.abilities.map((ability: { ability: { name: string } }) => ability.ability.name),
              height: pokemon.height,
              name: "pokemon.name",
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