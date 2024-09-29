import React, { useState } from 'react';
import styles from './pokemon-card.module.css';
import { cardTypesColors, PokemonType } from '../../../../types/typeColors';
import ImageWithBackground from '../../../molecules/image-with-background/image-with-background';
import TextCard from '../../text-card/text-card';
import ColorCircles from '../../pokemon-types-circles/pokemon-types-circles';
import { PokemonDetail } from '../../../../types/pokemonTypes';
import Tooltip from '../../../molecules/tooltip-pokemon-types/tooltip-pokemon-types';


const PokemonAttribute = ({ label, value }: { label: string, value: string }) => (
  <div className={styles.attribute}>
    <TextCard content={label} fontWeight="bold" headingLevel='h6' />
    <TextCard content={value} headingLevel='h6' />
  </div>
);

const PokemonAttributesList = ({ label, values }: { label: string, values: string[] }) => (
  <div >
    <TextCard content={label} fontWeight="bold" />
    {values.map((value, index) => (
      <TextCard key={index} content={value} textTransform='capitalize' />
    ))}
  </div>
);
interface PokemonCardProps {
  pokemon: PokemonDetail;
  onClick?: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onClick }) => {

  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnterToolTip = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeaveToolTip = () => {
    setTooltipVisible(false);
  };

  const pokemonType: PokemonType = pokemon.name === 'jigglypuff' ? 'fairy' : pokemon.types[0] as PokemonType;

  const cardStyle = {
    borderColor: cardTypesColors[pokemonType]?.pokemon_type || '#FFF',
    backgroundColor: cardTypesColors[pokemonType]?.background || '#FFF',
    // pointerEvents: 'none'
  };
  const attributeStyle = {
    backgroundColor: cardTypesColors[pokemonType]?.background_attribute || '#FFF',
    color: cardTypesColors[pokemonType]?.attribute_color || '#FFF',
  };
  const attributesStyle = {
    // backgroundColor: cardTypesColors[pokemonType]?.background_attribute || '#FFF',
    background: `linear-gradient(
                  135deg,
                  ${cardTypesColors[pokemonType]?.primary_background_attributes_list || '#FFF'} 0%,
                  ${cardTypesColors[pokemonType]?.secondary_background_attributes_list || '#FFF'} 100%)`,
    color: cardTypesColors[pokemonType]?.attributes_color || '#FFF',
  };

  return (
    <div className={styles.card} style={cardStyle} onClick={onClick}>
      <div className={styles.pokemonCardGrid}>
        <div className={styles.headerCardGrid}>
          <TextCard content={`#${pokemon.id}`} headingLevel="h5" />
          <div
            onMouseEnter={handleMouseEnterToolTip}
            onMouseLeave={handleMouseLeaveToolTip}
          >
            <ColorCircles circles={pokemon.types} />
          </div>
          {isTooltipVisible && (
            <Tooltip circles={pokemon.types} />
          )}
        </div>
        <TextCard content={pokemon.name} headingLevel="h3" alignment="center" textTransform="capitalize" />
        <div className={styles.imageContainer}>
          <ImageWithBackground pokemonId={pokemon.id} />
        </div>
        <div className={styles.pokemonAttribute} style={attributeStyle}>
          <PokemonAttribute label="Height:" value={String(pokemon.height / 10) + " m."} />
          <PokemonAttribute label="Weight:" value={String(pokemon.weight / 10) + " kg."} />
        </div>
        <div className={styles.pokemonAttributesList} style={attributesStyle}>
          <PokemonAttributesList label="Abilities:" values={
            pokemon.abilities.map((ability: string) => ability)} />
          <PokemonAttributesList label="Types:" values={
            pokemon.types.map((type: string) => type)} />
        </div>
      </div>
    </div>
  );
};

// KF & IN
export default PokemonCard;