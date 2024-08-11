import React from "react";
import TextCard from "../../atoms/text-card/text-card";
import ColorCircles from "../../atoms/pokemon-types-circles/pokemon-types-circles";
import styles from "./title-pokemon-card.module.css"

interface TitlePokemonCardProps{
  primaryText?: React.ReactNode[];
  secondaryText?: string;
  pokemonTypes?: string[];
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  flexDirection?: 'column'
}

const TitlePokemonCard: React.FC<TitlePokemonCardProps> = ({
  primaryText,
  secondaryText,
  pokemonTypes,
  justifyContent,
  flexDirection,
})  => {
    return(
        <div className={styles.container} style={{ justifyContent, flexDirection }}>
        {primaryText && primaryText}
        {secondaryText && (
          <TextCard
            content={secondaryText}
            alignment="left"
            headingLevel="h6"
          />
        )}
        {pokemonTypes && (
          <ColorCircles
            circles={pokemonTypes}
          />
        )}
      </div>
    )
}

export default TitlePokemonCard;
