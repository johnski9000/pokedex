import React from "react";
import SideScreen from "../SideScreen/SideScreen";
import MainScreen from "../MainScreen/MainScreen";
import { Box, Text } from "@radix-ui/themes";

function Pokedex({ selectedPokemon }) {
  return (
    <div class="h-96 flex max-w-md">
      <div class="min-w-42 max-w-[200px] sm:max-w-[225px] sm:min-w-56 bg-red-600 h-full w-1/2 grid box-border grid-rows-[23%,50%,27%] border-2 border-solid border-black rounded-l-lg rounded-tr-lg">
        <div className="relative">
          <div className="absolute flex">
            <div className="w-[50px] h-[50px] rounded-full bg-white border-[2px] border-black flex justify-center items-center m-[5px] mt-[2px] ml-[5px]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#3298cb] border-[2px] border-black flex justify-center items-center relative">
                <div className="w-[10px] h-[10px] rounded-full bg-white opacity-30 absolute top-[8px] left-[10px]"></div>
              </div>
            </div>
            <div className="flex justify-around items-center ml-3 mt-2 w-16 h-full">
              <div className="bg-red-500 w-3 h-3 relative border border-black rounded-full ">
                <div className="dot light-red w-1 h-1 rounded-full bg-white opacity-30 absolute top-0.5 left-0.5"></div>
              </div>
              <div className="bg-yellow-500 w-3 h-3 relative border border-black rounded-full ">
                <div className="dot light-red w-1 h-1 rounded-full bg-white opacity-30 absolute top-0.5 left-0.5"></div>
              </div>
              <div className="bg-green-500 w-3 h-3 relative border border-black rounded-full ">
                <div className="dot light-red w-1 h-1 rounded-full bg-white opacity-30 absolute top-0.5 left-0.5"></div>
              </div>
            </div>
          </div>
          <svg height="100" width="225" className="left-svg" class="absolute">
            <polyline
              points="0,75 70,75 90,38 224,38"
              style={{ fill: "none", stroke: "black", strokeWidth: 3 }}
            ></polyline>
          </svg>
        </div>
        <div className="w-[80%] sm:w-[100%] flex just items-center flex-col">
          <div className=" pokedex-main-screen h-[85%] w-[85%] border-[3px] border-black bg-white relative overflow-x-hidden overflow-y-scroll rounded-lg flex justify-center items-center">
            <MainScreen selectedPokemon={selectedPokemon} />
            <div className="bg-red-500 w-3 h-3 absolute border border-black rounded-full bottom-1 left-2 "></div>
          </div>
        </div>
        <Box className="w-[80%] sm:w-[100%] flex justify-center items-center">
          <Box className="h-[30px] w-[100px] bg-green-400 flex justify-center items-center border-black border-[2px] rounded-lg text-sm">
            {selectedPokemon && selectedPokemon.name}
          </Box>
        </Box>
      </div>
      <div class="min-w-40 max-w-[175px] sm:max-w-[225] sm:min-w-52 w-1/2 h-full grid grid-rows-[23%,40%,34%]">
        <div className="z-10">
          <div className=" bg-red-600 h-full mt-[17.5%] border-t-[3px] border-r-[3px] border-black rounded-tr-[10px] w-full"></div>
        </div>
        <div className="z-20 middle-right bg-red-600 border-r-[3px] border-black flex justify-center items-center">
          <SideScreen selectedPokemon={selectedPokemon} />
        </div>
        <div className=" bg-red-600 border-r-[3px] border-b-[3px] rounded-br-[10px] border-black relative">
          <Box className="absolute bottom-4 left-4 flex bg-gray-300 px-2 py-1 border-black border-2 rounded-lg">
            {selectedPokemon &&
              selectedPokemon.types.map((type, index) => (
                <Text key={index} className="text-xs sm:text-sm">
                  {type.type.name}
                  {index === 0 && <span>/</span>}
                </Text>
              ))}
          </Box>
          <Box className="absolute bottom-4 right-4 flex bg-gray-300 px-2 py-1 border-black border-2 rounded-lg">
            {selectedPokemon && (
              <Text className="text-xs sm:text-sm">
                #{selectedPokemon.game_indices[10].game_index}
              </Text>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
