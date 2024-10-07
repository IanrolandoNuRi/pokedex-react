import React, { useEffect, useState, useMemo } from 'react';
import styles from './IndexPage.module.css';
import myImage from '../../../assets/img/pokedex-title.png';
import { getPokedex, getKantoPokedex, getAllPokemonDetails } from '../../../services/pokeapi';
import SearchBox from '../../organisms/search-box/search-box';
import PokedexDashboard from '../../organisms/pokedex-dashboard/pokedex-dashboard';

interface PokemonDetail {
  id: number;
  abilities: string[];
  height: number;
  name: string;
  types: string[];
  weight: number;
}

const IndexPage: React.FC = () => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<PokemonDetail[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
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
          const detailedPokemon = allPokemonDetails.map(({ pokemon }: any) => ({
            id: pokemon.id,
            abilities: pokemon.abilities.map((ability: { ability: { name: string } }) => ability.ability.name),
            height: pokemon.height,
            name: pokemon.name,
            types: pokemon.types.map((types: { type: { name: string } }) => types.type.name),
            weight: pokemon.weight,
          }));

          setPokemonDetails(detailedPokemon);
          setFilteredPokemon(detailedPokemon); // Initially set filtered list to full list
        } else {
          setError('Kanto Pokedex not found');
        }
      } catch (error) {
        setError('Failed to fetch Pokedex data');
      }
    };

    fetchPokedexData();
  }, []);

  useEffect(() => {
    const filtered = pokemonDetails.filter(pokemon =>
      pokemon.name.toLowerCase().startsWith(searchQuery)
    );
    setFilteredPokemon(filtered);
  }, [searchQuery, pokemonDetails]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const memoizedFilteredPokemon = useMemo(() => filteredPokemon, [filteredPokemon]);

  return (
    <div className={styles.indexPage}>
      <img src={myImage} alt="Description" />

      <SearchBox onSearch={handleSearch} />

      <PokedexDashboard pokemonDetails={memoizedFilteredPokemon} />
    </div>
  );
};

export default IndexPage;
