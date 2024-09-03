import React, { useRef } from "react";
import { motion } from "framer-motion";
import useScrollTransforms from "./useScrollTransforms"; // Ensure correct path

export default function Component() {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const containerRef5 = useRef(null);

  const {
    x1: x1_1,
    x2: x2_1,
    opacity: opacity_1,
  } = useScrollTransforms(containerRef1, ["start end", "end start 0.8"]);

  const {
    x1: x1_2,
    x2: x2_2,
    opacity: opacity_2,
  } = useScrollTransforms(containerRef2, ["start end", "end start 20"]);

  const {
    x1: x1_3,
    x3: x2_3,
    opacity: opacity_3,
  } = useScrollTransforms(containerRef3, ["start end", "end start 20"]);

  const {
    x1: x1_4,
    x2: x2_4,
    opacity: opacity_4,
  } = useScrollTransforms(containerRef4, ["start end", "end start 20"]);

  const {
    x1: x1_5,
    x3: x2_5,
    opacity: opacity_5,
  } = useScrollTransforms(containerRef5);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="h-[235vh] max-w-[100vw] flex flex-col justify-center items-center md:h-[330vh] font-sans">
      {/* Titulo */}
      <div
        ref={containerRef1}
        id="container1"
        className="w-full flex items-center justify-center md:h-[15vh]"
      >
        <div className="w-full h-[15vh] flex justify-center items-center overflow-hidden md:h-full">
          <motion.h1
            className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-semibold text-right"
            style={{ x: x1_1, opacity: opacity_1 }}
          >
            Pro
          </motion.h1>
          <motion.h1
            className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-semibold text-left overflow-hidden"
            style={{ x: x2_1, opacity: opacity_1 }}
          >
            yectos
          </motion.h1>
        </div>
      </div>
      
      <div className="h-[85vh] w-4/5 flex flex-col md:h-[105vh] md:w-3/5">
        {/* Portada */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInRight}
          transition={{ duration: 0.5 }}
          className="h-[30vh] w-4/5 flex items-start justify-start md:h-[40vh]"
        >
          <img
            alt="Diego de espaldas"
            className="h-full shadow-lg"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/6ae1eba429a0f70c4be52cfa057dae20b79e50d2/454513556_857560969250007_7026347463685353994_n.jpg"
          />
        </motion.div>
        {/* texto */}
        <motion.div
          className="w-full h-[10vh] flex flex-col  justify-center md:h-[20vh]"
          ref={containerRef2}
        >
          <motion.h1
            className="h-full text-3xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-6xl font-semibold flex items-end md:items-start"
            style={{ x: x1_2, opacity: opacity_2 }}
          >
            La paloma
          </motion.h1>
          <motion.h1
            className="h-full text-3xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-6xl font-semibold overflow-hidden flex items-center justify-end md:w-full"
            style={{ x: x2_2, opacity: opacity_2 }}
          >
            Todavia no
          </motion.h1>
        </motion.div>
        {/* foto */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInLeft}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-end h-[30vh] w-full md:h-[40vh]"
        >
          <img
            alt="Diego de espaldas"
            className="h-full shadow-lg"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/6ae1eba429a0f70c4be52cfa057dae20b79e50d2/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(5).png"
          />
        </motion.div>
      </div>
      {/* 3 Parte */}
      <div className="h-[85vh] w-4/5 flex flex-col justify-center items-center md:h-[105vh] md:w-3/5">
        {/* Portada */}
        <motion.div
          className="flex items-end justify-end h-[30vh] w-full md:h-[40vh] md:relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInLeft}
          transition={{ duration: 0.5 }}
        >
          <img
            alt="Diego de espaldas"
            className="h-full shadow-lg"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/73b8616cba6890f7ceb78b38fa72691f0be584d6/440229246_620712956943862_5673504015020928749_n.jpg"
          />
        </motion.div>
        {/* texto */}
        <motion.div
          ref={containerRef3}
          className="w-full h-[10vh] flex flex-col justify-center  text-left md:h-[20vh]"
        >
          <motion.h1
            className="h-full text-3xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-semibold overflow-hidden flex items-center justify-end"
            style={{ x: x2_3, opacity: opacity_3 }}
          >
            Depresión Sonora
          </motion.h1>
          <motion.h1
            className="h-full text-3xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-semibold flex items-start justify-start"
            style={{ x: x1_3, opacity: opacity_3 }}
          >
            Makinavaja
          </motion.h1>
        </motion.div>
        {/* foto */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInRight}
          transition={{ duration: 0.5 }}
          className="h-[30vh] w-full flex items-start justify-start md:h-[40vh]"
        >
          <img
            alt="Diego de espaldas"
            className="h-full shadow-lg"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/73b8616cba6890f7ceb78b38fa72691f0be584d6/440201971_278410868660109_6163186613898693517_n.jpg"
          />
        </motion.div>
      </div>
      {/* 2 Parte */}
      <div
        className="h-auto w-4/5 flex flex-col justify-center items-center md:h-[105vh] md:w-3/5"
        ref={containerRef4}
      >
        {/* texto */}
        <div className="w-full h-[10vh] flex flex-col justify-end items-start text-left md:justify-center md:w-3/5">
          <motion.h1
            className="w-[75%] text-3xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-semibold flex items-start justify-start text-left"
            style={{ x: x1_4, opacity: opacity_4 }}
          >
            La plata
          </motion.h1>
        </div>
        {/* Foto Arriba */}
        <div className="flex w-full h-[55vh] overflow-hidden md:h-[85vh] md:justify-center">
          <div
            className="relative w-full h-[55vh] md:h-[85vh] md:items-center md:w-4/5 lg:w-3/5"
            ref={containerRef5}
          >
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInLeft}
              transition={{ duration: 0.5 }}
              alt="Diego de espaldas"
              className="absolute w-auto h-[30vh] shadow-lg z-20 md:h-[45vh] lg:h-[50vh]"
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/df25520c7988c6e6b1b5fa21be9da0e4c83219e8/331749368_739196417584794_4403896613756705700_n%20(1).jpg"
            />
            {/* Foto Abajo */}
            <div className="flex justify-end items-end">
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInRight}
                transition={{ duration: 0.5 }}
                alt="Diego de espaldas"
                className="absolute w-auto h-[30vh] shadow-lg top-[50%] z-10 md:h-[45vh] lg:h-[50vh] md:top-[45%] lg:top-[40%]"
                src="https://raw.githubusercontent.com/AlbbercaGit/videos/df25520c7988c6e6b1b5fa21be9da0e4c83219e8/328869643_589075623164785_4558648590171868223_n.jpg"
              />
            </div>
          </div>
        </div>
        {/* texto 2*/}
        <div className="w-full h-[10vh] flex flex-col justify-start items-end text-left md:h-[10vh] md:w-3/5 md:justify-start">
          <motion.h1
            className="w-[75%] text-3xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-semibold overflow-hidden flex items-start justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInLeft}
            transition={{ duration: 0.5 }}
          >
            Sueños
          </motion.h1>
        </div>
      </div>
    </div>
  );
}