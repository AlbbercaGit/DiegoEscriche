import React from "react";
import { motion } from "framer-motion"


function Hero() {
  return (
    <div className="h-[210vh] w-full flex flex-col justify-center items-center md:h-[92h]  font-sans">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      className="h-full w-4/5 flex flex-col justify-center items-center">
        {/* Portada */}
        <div>
          <img
            alt="Diego de espaldas"
            className="w-[75%] shadow-lg md:w-[50%]"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/6ae1eba429a0f70c4be52cfa057dae20b79e50d2/454513556_857560969250007_7026347463685353994_n.jpg
"
          ></img>
        </div>
        {/* texto */}
        <div className="w-full flex flex-col items-end justify-end ">
          <h1 className="w-[75%] text-xl font-semibold    flex items-start md:text-8xl md:text-left">
            La paloma
          </h1>
          <h1 className="w-[75%] text-xl font-semibold flex items-start md:text-8xl md:text-left">
            Todavia no
          </h1>
        </div>
        {/* foto */}
        <div className="flex items-end justify-end ">
          <img
            alt="Diego de espaldas"
            className="w-[75%] shadow-lg md:w-[50%]"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/6ae1eba429a0f70c4be52cfa057dae20b79e50d2/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(5).png
"
          ></img>
        </div>
      </motion.div>
      {/* 3 Parte  */}
      <div className="h-full w-4/5 flex flex-col justify-center items-center">
        {/* Portada */}
        <div className="flex items-end justify-end ">
          <img
            alt="Diego de espaldas"
            className="w-[75%] shadow-lg md:w-[50%]"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/73b8616cba6890f7ceb78b38fa72691f0be584d6/440229246_620712956943862_5673504015020928749_n.jpg


"
          ></img>
        </div>
        {/* texto */}
        <div className="w-full h-[10%] flex flex-col justify-end items-end text-left">
          <h1 className="w-[75%] text-xl font-semibold flex items-start justify-start md:text-8xl md:text-left">
            Depresión Sonora
          </h1>
          <h1 className="w-[75%] text-xl font-semibold flex items-start justify-start md:text-8xl md:text-left">
            MAKINAVAJA
          </h1>
        </div>
        {/* foto */}
        <div>
          <img
            alt="Diego de espaldas"
            className="w-[75%] shadow-lg md:w-[50%]"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/73b8616cba6890f7ceb78b38fa72691f0be584d6/440201971_278410868660109_6163186613898693517_n.jpg

"
          ></img>
        </div>
      </div>
      {/* 2 Parte */}
      <div className="h-full w-4/5 flex flex-col justify-center items-center">
        {/* texto */}
        <div className="w-full h-[10%] flex flex-col justify-end items-start text-left">
          <h1 className="w-[75%] text-xl font-semibold flex items-start justify-start  text-left md:text-8xl md:text-left">
            La plata
          </h1>
        </div>
        {/* Foto Abajo */}
        <div className="flex w-full h-[45vh] overflow-hidden">


        <div className="relative w-full h-[45vh]">
          <img
            alt="Diego de espaldas"
            className="absolute w-[75%] shadow-lg md:w-[50%] z-20"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/73b8616cba6890f7ceb78b38fa72691f0be584d6/440201971_278410868660109_6163186613898693517_n.jpg"
          ></img>

          {/* Foto Arriba */}
          <div className=" flex justify-end items-end">
            <img
              alt="Diego de espaldas"
              className="absolute w-[75%] shadow-lg md:w-[50%] top-[40%] z-10 "
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/73b8616cba6890f7ceb78b38fa72691f0be584d6/440229246_620712956943862_5673504015020928749_n.jpg"
            ></img>
          </div>
        </div>
        </div>
        {/* texto 2*/}
        <div className="w-full  flex flex-col justify-end items-end text-left ">
          <h1 className="w-[75%] text-xl font-semibold flex items-end justify-end md:text-8xl md:text-left">
            Sueños
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
