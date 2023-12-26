import { Box, Flex } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonImage from "./PokemonImage";

function PokemonCard({ pokemon, onPokemonSelect }) {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    axios.get(pokemon.url).then((res) => {
      setPokemonData(res.data);
    });
  }, [pokemon.url]);
  console.log(pokemonData);
  return (
    <Box>
      {pokemonData === null ? (
        <div>loading</div>
      ) : (
        <Flex
          direction={"column"}
          className="justify-center items-center"
          onClick={() => onPokemonSelect(pokemonData)}
        >
          <PokemonImage pokemonData={pokemonData} />
        </Flex>
      )}
    </Box>
  );
}

export default PokemonCard;
