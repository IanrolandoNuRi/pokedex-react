import React from "react";
import TextCard from "../../atoms/text-card/text-card";
import ColorCircles from "../../atoms/pokemon-types-circles/pokemon-types-circles";
import styles from "./title-pokemon-card.module.css"

interface TitlePokemonCardProps{
    pokemonId: number,
    pokemonTypes: string[],
}

const TitlePokemonCard: React.FC<TitlePokemonCardProps> = ({pokemonId, pokemonTypes})  => {
    const pokemonStringId: string = "#" + pokemonId;
    return(
        <div className={styles.container}>
            <TextCard
                content={pokemonStringId}
                alignment="left"
                headingLevel="h5"
            />
            <ColorCircles
                circles={pokemonTypes}
            />
        </div>
    )
}

export default TitlePokemonCard;
