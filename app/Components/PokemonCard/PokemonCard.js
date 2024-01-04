import { Box, Flex, Text } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonImage from "./PokemonImage";
import Image from "next/image";
import Description from "../Description/Description";

function PokemonCard({ pokemon, onPokemonSelect }) {
  const [pokemonData, setPokemonData] = useState(null);
  const imageUrl = "/whosthat.png";
  useEffect(() => {
    axios.get(pokemon.url).then((res) => {
      setPokemonData(res.data);
    });
  }, [pokemon.url]);
  return (
    <Box className="h-[450px] p-6 bg-white/20 backdrop-blur-sm relative shadow-xl rounded-[20px] hover:-translate-y-1 transition-all hover:cursor-pointer">
      {pokemonData === null ? (
        <div className="absolute">
          <Image
            src={imageUrl}
            alt="whos that pokemon"
            width={100}
            height={100}
          />
        </div>
      ) : (
        <Flex
          direction={"column"}
          className="justify-center items-center relative"
          onClick={() => onPokemonSelect(pokemonData)}
        >
          <Box className="text-black text-xl capitalize mb-4">
            #{pokemonData.game_indices[3].game_index}
            &nbsp;{pokemonData.name}
          </Box>
          <PokemonImage pokemonData={pokemonData} />
          <Box className="w-full py-2">
            <Text className="font-bold">Base Experiance&nbsp;</Text>
            <Text className="text-black text-m capitalize mt-4">
              - {pokemonData.base_experience}
            </Text>
          </Box>
          <Box className="w-full py-2">
            <Text className="font-bold">Height&nbsp;</Text>
            <Text className="text-black text-m capitalize mt-4">
              - {pokemonData.height}
            </Text>
          </Box>
          <Box className="w-full py-2">
            <Text className="font-bold">Weight&nbsp;</Text>
            <Text className="text-black text-m capitalize mt-4">
              - {pokemonData.weight}
            </Text>
          </Box>
          <Description pokemonData={pokemonData} />
        </Flex>
      )}
    </Box>
  );
}

export default PokemonCard;
