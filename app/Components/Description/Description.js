import { Box, Text } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Description({ pokemonData }) {
  const [description, setDescription] = useState(null);
  useEffect(() => {
    try {
      axios.get(pokemonData.species.url).then((res) => {
        setDescription(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Box className="w-full py-2">
      {description === null ? (
        <div>loading</div>
      ) : (
        <Text>{description.flavor_text_entries[8].flavor_text}</Text>
      )}
    </Box>
  );
}

export default Description;
