"use client";
import { Box, Flex, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import Pokeball from "../Pokeball/Pokeball";

function SearchBar({ onPokemonSelect }) {
  const [searchItem, setSearchItem] = useState("");
  return (
    <Flex className="items-center gap-4 mt-4 mb-20">
      <TextField.Root className="h-aut">
        <TextField.Input
          placeholder="Search the docs…"
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </TextField.Root>
      <Box onClick={(e) => onPokemonSelect(searchItem)}>
        <Pokeball />
      </Box>
    </Flex>
  );
}

export default SearchBar;
