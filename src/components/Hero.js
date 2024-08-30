import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      className="h-[100vh] w-full flex justify-center items-center lg:h-[92h]"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-4/5 h-full  md:justify-center md:items-center flex flex-col items-start justify-center gap-2 font-sans lg:grid grid-cols-2 grid-rows-3 lg:grid-areas-layout lg:grid-rows-[auto_0.1fr_auto] lg:grid-cols-[auto_auto]">
        {/* Texto arriba foto */}
        <motion.div
          className=" font-bold h-[20%] flex flex-col justify-end lg:col-start-1 lg:h-full lg:justify-center md:w-3/5 lg:w-full"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5}}
        >
          <h1 className="w-full flex items-start text-2xl lg:text-8xl">
            Productor
          </h1>
          <h1 className="text-2xl flex items-start lg:text-8xl lg:text-left">
            Diego Escriche
          </h1>
        </motion.div>
        {/* Foto */}
        <motion.div
          className="w-full h-auto  flex justify-end items-end lg:col-start-2  lg:row-start-1 row-span-full lg:h-full lg:items-center lg:justify-center md:w-3/5 lg:w-full"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            alt="Diego de espaldas"
            className="lg:w-[80%]"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/269cb4a10f84385ab4189db40748bb3966c68440/img/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(3).png"
          ></img>
        </motion.div>
        {/* Texto debajo de foto */}
        <motion.div
          className="lg:col-start-2 flex justify-center lg:row-start-1 lg:items-center lg:h-full row-span-full lg:w-full "
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h1 className="text-xl font-semibold flex items-start lg:row-start-2 lg:text-4xl lg:text-white lg:h-[50%] lg:w-[80%] lg:items-end lg:justify-center lg:font-normal z-10">
            Based on Valencia
          </h1>
        </motion.div>
        {/* Datos/servicios */}
        <motion.div
          className="flex flex-col justify-center items-end w-full h-[25%] lg:col-start-1 lg:row-start-3 lg:justify-start lg:items-start"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h1 className="flex text-xl font-semibold lg:text-3xl">Producción</h1>
          <h1 className="flex text-xl font-semibold lg:text-3xl">Mastering</h1>
          <h1 className="flex text-xl font-semibold lg:text-3xl">Mezcla</h1>
          <h1 className="flex text-xl font-semibold lg:text-3xl">Creativa</h1>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
