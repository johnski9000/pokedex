"use client";
import { Box, Flex, Slider, Tabs, Text } from "@radix-ui/themes";
import React from "react";

function SideScreen({ selectedPokemon }) {
  return (
    <Flex
      direction={"column"}
      className="p-1 w-[90%] h-[90%] bg-white border-black border-[3px] rounded-lg overflow-y-scroll"
    >
      <Tabs.Root defaultValue="account">
        <Tabs.List px="4">
          <Tabs.Trigger value="moves" style={{ flex: 1 }}>
            Abilities
          </Tabs.Trigger>
          <Tabs.Trigger value="stats" style={{ flex: 1 }}>
            Stats
          </Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
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
                <Box key={index}>
                  <Text size="1">
                    {stat.stat.name} : {stat.base_stat}
                  </Text>
                  <Slider
                    defaultValue={[stat.base_stat]}
                    size="1"
                    className="mt-1"
                    disabled
                  />
                </Box>
              ))}
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Flex>
  );
}

export default SideScreen;
