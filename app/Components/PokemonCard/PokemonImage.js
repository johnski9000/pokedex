import { Box, Text } from "@radix-ui/themes";
import Image from "next/image";

function PokemonImage({ pokemonData }) {
  const getFilterClass = (pokemonType) => {
    switch (pokemonType) {
      case "normal":
        return "normal";
      case "fighting":
        return "fighting";
      case "flying":
        return "flying";
      case "poison":
        return "poison";
      case "ground":
        return "ground";
      case "rock":
        return "rock";
      case "bug":
        return "bug";
      case "ghost":
        return "ghost";
      case "steel":
        return "steel";
      case "fire":
        return "fire";
      case "water":
        return "water";
      case "grass":
        return "grass";
      case "electric":
        return "electric";
      case "psychic":
        return "psychic";
      case "ice":
        return "ice";
      case "dragon":
        return "dragon";
      default:
        return ""; // Default or handle other types
    }
  };
  console.log(pokemonData);

  return (
    <Box>
      {pokemonData === null ? (
        <Text>loading</Text>
      ) : (
        <Image
          src={pokemonData.sprites.front_default}
          width={100}
          height={200}
          alt={pokemonData.name}
          className={`${getFilterClass(
            pokemonData.types[0].type.name
          )} drop-shadow-md`}
        />
      )}
    </Box>
  );
}

export default PokemonImage;
