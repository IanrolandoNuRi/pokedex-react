import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokedex = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/pokedex/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokedex data:', error);
        throw error;
    }
};

export const getKantoPokedex = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching Kanto Pokedex data:', error);
        throw error;
    }
};

export const getPokemonSpecies = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon-species/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokémon species data:', error);
        throw error;
    }
};

export const getPokemon = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        throw error;
    }
};
