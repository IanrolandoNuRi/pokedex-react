import React, { useEffect, useState, useMemo } from 'react';
import { getPokedex, getKantoPokedex, getAllPokemonDetails } from '../../../services/pokeapi';
import styles from './pokedex-dashboard.module.css';
import PokemonCard from '../pokemon-card/pokemon-card';
import ModalDetailed from '../modal-detail/modal-detail';

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

const Pokedex: React.FC<PokedexDashboardProps> = ({ pokemonDetails }) => {
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetail | null>(null); // State for selected Pokémon

  const openModal = (pokemon: PokemonDetail) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);


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
      {memoizedPokemonDetails.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={() => openModal(pokemon)} />
      ))}
      {isModalOpen && selectedPokemon && (
        <ModalDetailed
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedPokemon={selectedPokemon} // Pass selected Pokémon to modal
        />
      )}
    </div>
  );
};

export default Pokedex;
