import React from "react";

function Hero() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center ">
      <div className="w-4/5 h-full  flex flex-col items-start justify-center gap-2 font-sans">
        {/* Texto arriba foto */}
        <div className=" font-bold h-[20%] flex flex-col justify-end">
          <h1 className="w-full flex items-start text-2xl">Productor</h1>
          <h1 className="text-2xl">Diego Escriche</h1>
        </div>
        {/* Foto */}
        <div>
          <img alt="Diego de espaldas" src="https://raw.githubusercontent.com/AlbbercaGit/videos/269cb4a10f84385ab4189db40748bb3966c68440/img/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(3).png"></img>
        </div>
        {/* Texto debajo de foto */}
        <div>
          <h1 className="text-xl font-semibold flex items-start">Based on Valencia</h1>
        </div>
        {/* Datos/servicios */}
        <div className="flex flex-col justify-center items-end w-full h-[25%] ">
          <h1 className="flex text-xl font-semibold ">Producción</h1>
          <h1 className="flex text-xl font-semibold ">Mastering</h1>
          <h1 className="flex text-xl font-semibold">Mezcla</h1>
          <h1 className="flex text-xl font-semibold ">Creativa</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
