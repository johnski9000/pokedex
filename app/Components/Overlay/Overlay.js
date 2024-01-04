import { Box, Flex, Slider, Tabs, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import Description from "../Description/Description";

function Overlay({ selectedPokemon, setSelectedPokemon }) {
  return (
    <Flex
      direction={"column"}
      id={selectedPokemon ? "open" : "closed"}
      className="absolute top-4 left-4 right-4 bottom-4 sm:top-10 sm:left-10 sm:right-10 sm:bottom-10 bg-white  z-10 transition-all rounded-[20px] p-4 sm:p-10"
    >
      <Box className="flex-1 flex justify-center items-center relative">
        <Image
          src={"/cancel.png"}
          width={30}
          height={30}
          alt={"close"}
          className="absolute top-0 right-0 hover:cursor-pointer"
          onClick={() => setSelectedPokemon(null)}
        />
        <Image
          src={selectedPokemon?.sprites.other["official-artwork"].front_default}
          width={200}
          height={400}
          alt={selectedPokemon?.name}
        />
      </Box>
      <Box className="flex-1 overflow-y-scroll">
        <Tabs.Root defaultValue="moves">
          <Tabs.List px="4">
            <Tabs.Trigger value="info" style={{ flex: 1 }}>
              Info
            </Tabs.Trigger>
            <Tabs.Trigger value="description" style={{ flex: 1 }}>
              Description
            </Tabs.Trigger>
            <Tabs.Trigger value="moves" style={{ flex: 1 }}>
              Abilities
            </Tabs.Trigger>
            <Tabs.Trigger value="stats" style={{ flex: 1 }}>
              Stats
            </Tabs.Trigger>
          </Tabs.List>

          <Box px="4" pt="3" pb="2">
            <Tabs.Content value="info">
              <Box className="flex flex-col gap-3">
                <Box className="w-full py-2">
                  <Text className="font-bold">Base Experiance&nbsp;</Text>
                  <Text className="text-black text-m capitalize mt-4">
                    - {selectedPokemon?.base_experience}
                  </Text>
                </Box>
                <Box className="w-full py-2">
                  <Text className="font-bold">Height&nbsp;</Text>
                  <Text className="text-black text-m capitalize mt-4">
                    - {selectedPokemon?.height}
                  </Text>
                </Box>
                <Box className="w-full py-2">
                  <Text className="font-bold">Weight&nbsp;</Text>
                  <Text className="text-black text-m capitalize mt-4">
                    - {selectedPokemon?.weight}
                  </Text>
                </Box>
              </Box>
            </Tabs.Content>
            <Tabs.Content value="moves">
              {selectedPokemon &&
                selectedPokemon.moves.map((move, index) => (
                  <Box key={index}>
                    <Text size="1">{move.move.name}</Text>
                  </Box>
                ))}
            </Tabs.Content>
            <Tabs.Content value="description">
              <Description pokemonData={selectedPokemon} />
            </Tabs.Content>
            <Tabs.Content value="moves">
              {selectedPokemon &&
                selectedPokemon.moves.map((move, index) => (
                  <Box key={index}>
                    <Text size="1">{move.move.name}</Text>
                  </Box>
                ))}
            </Tabs.Content>

            <Tabs.Content value="stats" className="flex flex-col gap-3">
              {selectedPokemon &&
                selectedPokemon.stats.map((stat, index) => (
                  <Box key={index} className="flex gap-4">
                    <Text size="3" className="font-bold">
                      {stat.stat.name} : {stat.base_stat}
                    </Text>
                    <Slider
                      defaultValue={[stat.base_stat]}
                      size="1"
                      className="mt-1 flex-1"
                      disabled
                    />
                  </Box>
                ))}
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Box>
    </Flex>
  );
}

export default Overlay;
