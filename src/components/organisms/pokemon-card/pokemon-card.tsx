import React, { useEffect, useState, useMemo } from 'react';
import { getPokedex, getKantoPokedex, getPokemon, getPokemonSpecies } from '../../../services/pokeapi';
import styles from './pokemon-card.module.css';
import TitlePokemonCard from '../../molecules/title-pokemon-card/title-pokemon-card';
import { typeBackgroundColors } from '../../../types/typeColors';
import ImageWithBackground from '../../molecules/image-with-background/image-with-background';
import TextCard from '../../atoms/text-card/text-card';
import ColorCircles from '../../atoms/pokemon-types-circles/pokemon-types-circles';

interface PokemonDetail {
  id: number;
  abilities: string[];
  description: string;
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
        const kantoPokedex = pokedexData.results.find((pokedex: any) => pokedex.name === 'kanto');

        if (kantoPokedex) {
          const kantoData = await getKantoPokedex(kantoPokedex.url);
          const kantoEntries = kantoData.pokemon_entries;

          const detailsPromises = kantoEntries.map((entry: any) =>
            getPokemon(entry.entry_number)
          );
          const detailedData = await Promise.all(detailsPromises);

          const detailedPokemon = await Promise.all(
            detailedData.map(async (data: any) => {
              const speciesData = await getPokemonSpecies(data.id);
              const description = speciesData.flavor_text_entries
                .filter((entry: any) => entry.language.name === 'es')
                .map((entry: any) => entry.flavor_text)
                .join(' ');

              return {
                id: data.id,
                abilities: data.abilities.map((ability: any) => ability.ability.name),
                description,
                height: data.height,
                name: data.name,
                types: data.types.map((types: any) => types.type.name),
                weight: data.weight,
              };
            })
          );

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
            <p><strong>Description:</strong> {pokemon.description}</p>
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