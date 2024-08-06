import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const getPokedex = async () => {
  try {
    const response = await apiClient.get('/pokedex/');
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokedex data:', error);
    throw error;
  }
};

export const getKantoPokedex = async (url: string) => {
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching Kanto Pokedex data:', error);
    throw error;
  }
};

export const getAllPokemonDetails = async (ids: number[]) => {
  try {
    // Hacer una llamada para obtener detalles de múltiples Pokémon
    const pokemonPromises = ids.map(id => apiClient.get(`/pokemon/${id}`));
    
    const pokemonResponses = await Promise.all(pokemonPromises);
    
    return ids.map((_id, index) => ({
      pokemon: pokemonResponses[index].data,
    }));
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
    throw error;
  }
};

export const getPokemonSpecies = async (id: number) => {
  try {
    const response = await apiClient.get(`/pokemon-species/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon species data:', error);
    throw error;
  }
};

export const getPokemon = async (id: number) => {
  try {
    const response = await apiClient.get(`/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};
