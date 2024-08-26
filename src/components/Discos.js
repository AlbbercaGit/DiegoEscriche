import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useScrollTransforms from "./useScrollTransforms"; // Asegúrate de la ruta correcta

function Hero() {
  // let x1 = null;
  // let x2 = null;
  // let opacity = null;

  //   const containerRef = useRef(null)
  //   const containerRef2 = useRef(null);

  //   const { scrollYProgress } = useScroll({
  //     target: containerRef,
  //     offset: ["start end", "end start 0.1"]
  //       })

  //        x1 = useTransform(scrollYProgress, [0, 0.25], ["-100%", "0%"])
  //        x2 = useTransform(scrollYProgress, [0, 0.25], ["100%", "0%"])
  //        opacity = useTransform(scrollYProgress, [0, 0.45, 0.9], [0, 1, 1])

  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const containerRef5 = useRef(null);

  // Llamar al hook para el primer contenedor
  // Llamar al hook para el primer contenedor
  const {
    x1: x1_1,
    x2: x2_1,
    opacity: opacity_1,
    isInView: isInView1,
  } = useScrollTransforms(containerRef1,["start end", "end start 0.8"]);

  // Llamar al hook para el segundo contenedor
  const {
    x1: x1_2,
    x2: x2_2,
    opacity: opacity_2,
    isInView: isInView2,
  } = useScrollTransforms(containerRef2,["start end", "end start 20"]);

  const {
    x1: x1_3,
    x2: x2_3,
    opacity: opacity_3,
    isInView: isInView3,
  } = useScrollTransforms(containerRef3,["start end", "end start 20"]);
  const {
    x1: x1_4,
    x2: x2_4,
    opacity: opacity_4,
    isInView: isInView4,
  } = useScrollTransforms(containerRef4,["start end", "end start 20"]);
  const {
    x1: x1_5,
    x2: x2_5,
    opacity: opacity_5,
    isInView: isInView5,
  } = useScrollTransforms(containerRef5);

  return (
    <div className="h-[210vh] w-full flex flex-col justify-center items-center md:h-[92h]  font-sans">
      <div
        ref={containerRef1}
        id="container1"
        className="w-full  flex items-center justify-center"
      >
        <div className="w-full h-[15vh] flex justify-center items-center overflow-hidden">
          <motion.h1
            className="text-4xl font-semibold md:text-8xl  text-right"
            style={{ x: x1_1, opacity: opacity_1 }}
          >
            Pro
          </motion.h1>
          <motion.h1
            className="text-4xl font-semibold md:text-8xl  text-left"
            style={{ x: x2_1, opacity: opacity_1 }}
          >
            yectos
          </motion.h1>
        </div>
      </div>
      <div className="h-[70vh] w-4/5 flex flex-col justify-center items-center">
        {/* Portada */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 0.45, 0.9] }}
          viewport={{ margin: "-150px", once: true }}
        >
          <img
            alt="Diego de espaldas"
            className="w-[75%] shadow-lg md:w-[50%]"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/6ae1eba429a0f70c4be52cfa057dae20b79e50d2/454513556_857560969250007_7026347463685353994_n.jpg
"
          ></img>
        </motion.div>
        {/* texto */}
        <motion.div
          className="w-full h-[10vh]  flex flex-col items-end justify-center "
          ref={containerRef2}
        >
          <motion.h1
            className="w-[75%] text-xl font-semibold    flex items-start md:text-8xl md:text-left"
            style={{ x: x1_2, opacity: opacity_2 }}
          >
            La paloma
          </motion.h1>
          <motion.h1
            className="w-[75%]  text-xl font-semibold    flex items-start md:text-8xl md:text-left"
            style={{ x: x2_2, opacity: opacity_2 }}
          >
            Todavia no
          </motion.h1>
        </motion.div>
        {/* foto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 0.45, 0.9] }}
          viewport={{ margin: "-50px", once: true }}
          className="flex items-end justify-end 
        "
        >
          <img
            alt="Diego de espaldas"
            className="w-[75%] shadow-lg md:w-[50%]"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/6ae1eba429a0f70c4be52cfa057dae20b79e50d2/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(5).png
"
          ></img>
        </motion.div>
      </div>
      {/* 3 Parte  */}
      <div className="h-[70vh] w-4/5 flex flex-col justify-center items-center">
        {/* Portada */}
        <motion.div
          className="flex items-end justify-end "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 0.45, 0.9] }}
          viewport={{ margin: "-150px", once: true }}
        >
          <img
            alt="Diego de espaldas"
            className="w-[75%] shadow-lg md:w-[50%]"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/73b8616cba6890f7ceb78b38fa72691f0be584d6/440229246_620712956943862_5673504015020928749_n.jpg


"
          ></img>
        </motion.div>
        {/* texto */}
        <motion.div
          ref={containerRef3}
          className="w-full h-[10%] flex flex-col justify-center items-end text-left"
        >
          <motion.h1
            className="w-[75%] text-xl font-semibold flex items-start justify-start md:text-8xl md:text-left"
            style={{ x: x2_3, opacity: opacity_3 }}
          >
            Depresión Sonora
          </motion.h1>
          <motion.h1
            className="w-[75%] text-xl font-semibold flex items-start justify-start md:text-8xl md:text-left"
            style={{ x: x1_3, opacity: opacity_3 }}
          >
            MAKINAVAJA
          </motion.h1>
        </motion.div>
        {/* foto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 0.45, 0.9] }}
          viewport={{ margin: "-150px", once: true }}
        >
          <img
            alt="Diego de espaldas"
            className="w-[75%] shadow-lg md:w-[50%]"
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/73b8616cba6890f7ceb78b38fa72691f0be584d6/440201971_278410868660109_6163186613898693517_n.jpg

"
          ></img>
        </motion.div>
      </div>
      {/* 2 Parte */}
      <div
        className="h-[70vh] w-4/5 flex flex-col justify-center items-center"
        ref={containerRef4}
      >
        {/* texto */}
        <div className="w-full h-[10vh] flex flex-col justify-end items-start text-left">
          <motion.h1
            className="w-[75%] text-xl font-semibold flex items-start justify-start  text-left md:text-8xl md:text-left"
            style={{ x: x1_4, opacity: opacity_4 }}
          >
            La plata
          </motion.h1>
        </div>
        {/* Foto Abajo */}
        <div className="flex w-full h-[45vh] overflow-hidden">
          <div className="relative w-full h-[45vh]" ref={containerRef5}>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 0.45, 0.9] }}
              viewport={{ margin: "-150px", once: true }}
              alt="Diego de espaldas"
              className="absolute w-[75%] shadow-lg md:w-[50%] z-20"
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/73b8616cba6890f7ceb78b38fa72691f0be584d6/440201971_278410868660109_6163186613898693517_n.jpg"
            ></motion.img>
            {/* Foto Arriba */}
            <div  className=" flex justify-end items-end">
              <motion.img
              
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 0.45, 0.9] }}
                viewport={{ margin: "-150px", once: true }}
                alt="Diego de espaldas"
                className="absolute w-[75%] shadow-lg md:w-[50%] top-[40%] z-10 "
                src="https://raw.githubusercontent.com/AlbbercaGit/videos/73b8616cba6890f7ceb78b38fa72691f0be584d6/440229246_620712956943862_5673504015020928749_n.jpg"
              ></motion.img>
            </div>
          </div>
        </div>
        {/* texto 2*/}
        <div className="w-full  flex flex-col justify-end items-end text-left " >
          <motion.h1
            className="w-[75%] text-xl font-semibold flex items-end justify-end md:text-8xl md:text-left"
            style={{ x: x2_5, opacity: opacity_5 }}
          >
            Sueños
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
