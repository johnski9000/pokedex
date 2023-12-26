"use client";
import { Flex } from "@radix-ui/themes";
import Pokedex from "./Components/Pokedex/Pokedex";
import PokemonList from "./Components/PokemonList/PokemonList";
import SearchBar from "./Components/SearchBar/SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [initialData, setInitialData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonSearch = (pokemonData) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonData}`)
      .then((res) => {
        setSelectedPokemon(res.data);
      })
      .catch((err) => {
        alert("Pokemon not found");
      });
  };
  const handlePokemonSelection = (pokemonData) => {
    setSelectedPokemon(pokemonData);
  };
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12`).then((res) => {
      setInitialData(res.data.results);
    });
  }, []);

  return (
    <Flex direction={"column"} className="w-screen h-screen items-center">
      <SearchBar onPokemonSelect={handlePokemonSearch} />
      <Pokedex selectedPokemon={selectedPokemon} />
      {initialData.length === 0 ? (
        <div>loading</div>
      ) : (
        <PokemonList
          onPokemonSelect={handlePokemonSelection}
          initialData={initialData}
        />
      )}
    </Flex>
  );
}
