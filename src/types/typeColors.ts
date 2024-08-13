export type PokemonType = (
    'grass' |
    'fire' |
    'water' |
    'bug' |
    'normal' |
    'poison' |
    'electric' |
    'ground' |
    'fairy' |
    'fighting' |
    'psychic' |
    'rock' |
    'ghost' |
    'ice' |
    'dragon'
);

export const typeColors: { [key: string]: string } = {
    grass: "#78C850",
    poison: "#9141cb",
    fire: "#F08030",
    water: "#2980ef",
    bug: "#91a119",
    normal: "#9fa19f",
    electric: "#F8D030",
    ground: "#905120",
    fairy: "#ef70ef",
    fighting: "#C03028",
    psychic: "#f0417a",
    rock: "#afa982",
    ghost: "#705898",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    flying: "#81b9ef",
};

export const cardTypesColors: Record<PokemonType, { 
    pokemon_type: string;
    background: string;
    primary_background_attributes_list: string;
    secondary_background_attributes_list: string;
    attributes_color: string;
    attribute_color: string;
    background_attribute: string;
    header: string;
    highlight: string;
}> = {
    grass: {
        pokemon_type: "#78C850",
        background: "#DFEFDE",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#90C98D",
        attributes_color: "#387F39",
        attribute_color: "#FFFFFF",
        background_attribute: "#90C98D",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    fire: {
        pokemon_type: "#F08030",
        background: "#FBE3CD",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#FFB490",
        attributes_color: "#D5591D",
        attribute_color: "#FFFFFF",
        background_attribute: "#EE7D47",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    water: {
        pokemon_type: "#2980ef",
        background: "#a9ccf9",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#7FB0F0",
        attributes_color: "#154078",
        attribute_color: "#FFFFFF",
        background_attribute: "#5993DE",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    bug: {
        pokemon_type: "#91a119",
        background: "#d3daa3",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#AFB972",
        attributes_color: "#49510d",
        attribute_color: "#FFFFFF",
        background_attribute: "#909A4B",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    normal: {
        pokemon_type: "#9fa19f",
        background: "#d5d5d5",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#A9A9A9",
        attributes_color: "#4b4c4b",
        attribute_color: "#FFFFFF",
        background_attribute: "#7C7B7B",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    poison: {
        pokemon_type: "#9141cb",
        background: "#cbafdf",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#A780C3",
        attributes_color: "#3f1c58",
        attribute_color: "#FFFFFF",
        background_attribute: "#8154A2",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    electric: {
        pokemon_type: "#F8D030",
        background: "#fdecac",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#D6C170",
        attributes_color: "#7d6818",
        attribute_color: "#FFFFFF",
        background_attribute: "#AB943C",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    ground: {
        pokemon_type: "#905120",
        background: "#d3b9a6",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#B29179",
        attributes_color: "#482910",
        attribute_color: "#FFFFFF",
        background_attribute: "#926E53",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    fairy: {
        pokemon_type: "#ef70ef",
        background: "#f9c6f9",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#EB97EB",
        attributes_color: "#783878",
        attribute_color: "#FFFFFF",
        background_attribute: "#D36AD3",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    fighting: {
        pokemon_type: "#C03028",
        background: "#e6aca9",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#C37975",
        attributes_color: "#601814",
        attribute_color: "#FFFFFF",
        background_attribute: "#A24E4A",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    psychic: {
        pokemon_type: "#f0417a",
        background: "#f9b3ca",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#F28BAE",
        attributes_color: "#78213d",
        attribute_color: "#FFFFFF",
        background_attribute: "#E76691",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    rock: {
        pokemon_type: "#afa982",
        background: "#dfddcd",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#BBB89F",
        attributes_color: "#585541",
        attribute_color: "#FFFFFF",
        background_attribute: "#9B9775",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    ghost: {
        pokemon_type: "#705898",
        background: "#c6bcd6",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#9E8EB8",
        attributes_color: "#382c4c",
        attribute_color: "#FFFFFF",
        background_attribute: "#77619A",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    ice: {
        pokemon_type: "#98d8d8",
        background: "#d6efef",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#A8D5D5",
        attributes_color: "#4c6c6c",
        attribute_color: "#FFFFFF",
        background_attribute: "#72AFAF",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
    dragon: {
        pokemon_type: "#7038F8",
        background: "#c6affc",
        primary_background_attributes_list: "#FFFFFF",
        secondary_background_attributes_list: "#A985F6",
        attributes_color: "#381c7c",
        attribute_color: "#FFFFFF",
        background_attribute: "#8A60EA",
        header: "#4CAF50",
        highlight: "#FFD54F"
    },
};
