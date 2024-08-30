import React from 'react';
import { motion } from "framer-motion";

function Contacto() {
  // URLs de imágenes
  const image1 = "https://raw.githubusercontent.com/AlbbercaGit/videos/main/1/1cuadrada.jpg";
  const image2 = "https://raw.githubusercontent.com/AlbbercaGit/videos/main/2/1.jpg";
  const image3 = "https://raw.githubusercontent.com/AlbbercaGit/videos/main/4/4.jpg";
  const image4 = "https://raw.githubusercontent.com/AlbbercaGit/videos/main/4/3.jpg";
  const image5 = "https://raw.githubusercontent.com/AlbbercaGit/videos/main/5/1.jpg";

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="font-sans p-6 max-w-2xl mx-auto h-screen flex justify-evenly items-center flex-col">
      <motion.h2 
        className="text-xl w-full text-left flex items-center font-bold h-[15vh]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Hablamos de tu proyecto?
      </motion.h2>

      <div className="grid grid-cols-2 gap-3 h-[90vh] w-full">
        {/* Columna izquierda */}
        <motion.div 
          className="space-y-20 flex justify-center items-center flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInLeft}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.img
            src={image1}
            alt="Imagen 1"
            className="w-[80%] md:w-[90%] md:h-[25vh] shadow-lg object-cover"
            variants={fadeInLeft}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.img
            src={image4}
            alt="Imagen 4"
            className="w-full md:w-[90%] md:h-[25vh] shadow-sm object-cover"
            variants={fadeInLeft}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.img
            src={image5}
            alt="Imagen 5"
            className="w-full md:w-[90%] md:h-[25vh] shadow-lg object-cover"
            variants={fadeInLeft}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </motion.div>

        {/* Columna derecha */}
        <motion.div 
          className="grid grid-rows-6 gap-3 h-full w-full justify-center items-center flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInRight}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Espacio vacío */}
          <div className="row-span-1 h-full flex flex-col justify-center">
            <div className="text-center flex justify-center items-center flex-col h-full">
              <motion.p 
                className="text-lg font-semibold h-1/3 flex items-center"
                variants={fadeInRight}
                transition={{ duration: 0.5, delay: 0.4 }}

              >
                Instagram
              </motion.p>
            </div>
          </div>

          {/* Imagen 2 */}
          <motion.div className="row-span-2" variants={fadeInRight}
                      transition={{ duration: 0.5, delay: 0.6 }}
>
            <img
              src={image2}
              alt="Imagen 2"
              className="w-full md:w-full md:h-[25vh] shadow-lg object-cover"
            />
          </motion.div>

          {/* Imagen 3 */}
          <motion.div className="row-span-2" variants={fadeInRight}
                      transition={{ duration: 0.5, delay: 0.8 }}
>
            <img
              src={image3}
              alt="Imagen 3"
              className="w-full md:w-full md:h-[25vh] shadow-lg object-cover"
            />
          </motion.div>

          {/* Texto de contacto */}
          <div className="row-span-1 h-full flex flex-col justify-center">
            <div className="text-center flex justify-center items-center flex-col h-full">
              <motion.p 
                className="text-lg font-semibold h-1/3 flex items-end w-full justify-center"
                variants={fadeInRight}
                transition={{ duration: 0.5, delay: 0.4 }}

              >
                Correo
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contacto;