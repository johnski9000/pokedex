"use client";
import { Box } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

function MainScreen({ selectedPokemon }) {
  return (
    <Box className="w-[80%] h-[80%] flex justify-center items-center bg-blue-300 border-black border-[2px] rounded-lg">
      {selectedPokemon && (
        <Image
          src={selectedPokemon.sprites.front_default}
          alt={selectedPokemon.name}
          width={120}
          height={200}
        />
      )}
    </Box>
  );
}

export default MainScreen;
