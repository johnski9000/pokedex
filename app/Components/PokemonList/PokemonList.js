import { Box, Grid, Section } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";

function PokemonList({ onPokemonSelect, initialData }) {
  const [startIndex, setStartIndex] = useState(0);
  const [pokemonList, setPokemonList] = useState(initialData);
  const [loading, setLoading] = useState(false); // Added loading state
  const container = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = container.current.scrollTop;
      const scrollHeight = container.current.scrollHeight;
      const clientHeight = container.current.clientHeight;
      if (scrollTop + clientHeight === scrollHeight && !loading) {
        fetchMoreData();
      }
      if (scrollTop === 0 && !loading) {
        fetchMoreData();
      }
    };

    const fetchMoreData = async () => {
      setLoading(true); // Set loading to true to prevent concurrent requests

      const newStartIndex = startIndex + 10; // Assuming 10 items per page

      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${newStartIndex}&limit=24`
        );
        setStartIndex(newStartIndex);
        setPokemonList((prevList) => [...prevList, ...response.data.results]);
      } catch (error) {
        console.error("Error fetching more data:", error);
      } finally {
        setLoading(false); // Reset loading state after the request is complete
      }
    };

    container.current.addEventListener("scroll", handleScroll);
    return () => {
      container.current.removeEventListener("scroll", handleScroll);
    };
  }, [startIndex, loading]);

  return (
    <Box
      className="max-w-screen-xl w-[90%]  border-[1px]rounded-lg overflow-y-scroll overflow-hidden mt-6 mb-6 sm:mt-20 h-full flex-1"
      ref={container}
    >
      <Section size="0" py={"2"} px={"2"} className="opacity-100 h-full">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pokemonList.length === 0 ? (
            <div>loading...</div>
          ) : (
            pokemonList.map((pokemon, index) => (
              <PokemonCard
                pokemon={pokemon}
                key={index}
                onPokemonSelect={onPokemonSelect}
              />
            ))
          )}
        </div>
      </Section>
    </Box>
  );
}

export default PokemonList;
