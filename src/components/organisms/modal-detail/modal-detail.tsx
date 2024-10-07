import React, { useEffect, ReactNode, useState } from 'react';
import styles from './modal-detail.module.css';
import ImageComponent from '../pokemon-image/pokemon-image';
import { getPokemonSpecies } from '../../../services/pokeapi';

interface PokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: string[];
    types: string[];
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedPokemon: PokemonDetail;
}

const ModalDetailed: React.FC<ModalProps> = ({ isOpen, onClose, selectedPokemon }) => {
    const [error, setError] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    useEffect(() => {

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    useEffect(() => {
        const fetchPokedexData = async () => {
            try {
                const pokedexData = await getPokemonSpecies(selectedPokemon.id);
                const lang = "en"
                const flavorTextEntry = pokedexData.flavor_text_entries.find((entry: { language: { name: string; }; }) => entry.language.name === lang);
                if (flavorTextEntry) {
                    setDescription(flavorTextEntry.flavor_text);
                } else {
                    setDescription("No flavor text available in the specified language.");
                }
            } catch (error) {
                setError('Failed to fetch Pokedex data');
            }
        };

        fetchPokedexData();
    }, []);

    if (!isOpen || !selectedPokemon) return null;

    return (
        <div className={styles['modal-overlay']} onClick={onClose} role="dialog" aria-modal="true">
            <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
                <div className={styles['card-container']}>
                    <div className={styles["card"]}>
                        <div className={styles["card-image"]}>
                            <ImageComponent
                                pokemonId={selectedPokemon.id}
                            />
                        </div>
                        <div className={styles["card-info"]}>
                            <h1>{selectedPokemon.name}</h1>
                            <p>Description: {description}</p>
                            <p className={styles["attributes"]}>Height: {selectedPokemon.height}</p>
                            <p className={styles["attributes"]}>Weight: {selectedPokemon.weight}</p>
                            <p className={styles["attributes"]}>Abilities: {selectedPokemon.abilities}</p>
                            <p className={styles["attributes"]}>Type: {selectedPokemon.types}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ModalDetailed;
