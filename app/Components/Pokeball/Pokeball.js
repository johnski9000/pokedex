import React from "react";

function Pokeball() {
  return (
    <div class="overflow-hidden h-14 w-14 border-black border-2 rounded-full relative">
      <div className="absolute w-full h-[42%] bg-red-600"></div>
      <div className="bg-black w-full h-full"></div>
      <div className="bg-white w-[30%] h-[30%] border-black border-[3px] absolute top-[50%] left-[50%] rounded-full z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-full h-[42%] bg-white bottom-0"></div>
    </div>
  );
}

export default Pokeball;
