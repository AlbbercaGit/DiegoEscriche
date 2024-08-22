import React from "react";

function Hero() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center md:h-[92h] ">
      <div className="w-4/5 h-full  flex flex-col items-start justify-center gap-2 font-sans md:grid grid-cols-2 grid-rows-3 md:grid-areas-layout md:grid-rows-[auto_0.1fr_auto] md:grid-cols-[auto_auto]">
        {/* Texto arriba foto */}
        <div className=" font-bold h-[20%] flex flex-col justify-end md:col-start-1 md:h-full md:justify-center ">
          <h1 className="w-full flex items-start text-2xl md:text-8xl">Productor</h1>
          <h1 className="text-2xl flex items-start md:text-8xl md:text-left">Diego Escriche</h1>
        </div>
        {/* Foto */}
        <div className="w-full h-auto  flex justify-end items-end md:col-start-2  md:row-start-1 row-span-full md:h-full md:items-center md:justify-center">
          <img alt="Diego de espaldas" className="md:w-[80%]" src="https://raw.githubusercontent.com/AlbbercaGit/videos/269cb4a10f84385ab4189db40748bb3966c68440/img/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(3).png"></img>
        </div>
        {/* Texto debajo de foto */}
        <div className="md:col-start-2 flex justify-center md:row-start-1 md:items-center md:h-full row-span-full md:w-full ">
          <h1 className="text-xl font-semibold flex items-start md:row-start-2 md:text-4xl md:text-white md:h-[50%] md:w-[80%] md:items-end md:justify-center md:font-normal">Based on Valencia</h1>
        </div>
        {/* Datos/servicios */}
        <div className="flex flex-col justify-center items-end w-full h-[25%] md:col-start-1 md:row-start-3 md:justify-start md:items-start">
          <h1 className="flex text-xl font-semibold md:text-3xl">Producción</h1>
          <h1 className="flex text-xl font-semibold md:text-3xl">Mastering</h1>
          <h1 className="flex text-xl font-semibold md:text-3xl">Mezcla</h1>
          <h1 className="flex text-xl font-semibold md:text-3xl">Creativa</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
