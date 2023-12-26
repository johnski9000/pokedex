import { Box, Text } from "@radix-ui/themes";
import Image from "next/image";

function PokemonImage({ pokemonData }) {
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
        />
      )}
    </Box>
  );
}

export default PokemonImage;
