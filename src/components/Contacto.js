import React,{ useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contacto() {
  // URLs de imágenes
  const image1 =
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/1/1cuadrada.jpg";
  const image2 =
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/2/1.jpg";
  const image3 =
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/4/4.jpg";
  const image4 =
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/4/3.jpg";
  const image5 =
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/5/1.jpg";

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
const [showAlert, setShowAlert] = useState(false)




  const copyToClipboard = () => {
    const text = "diegoescriche@gmail.com";
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowAlert(true)
      })
      .catch((err) => {
        console.error("Error al copiar: ", err)
      });
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [showAlert])

  return (
    <div className="font-sans p-6 max-w-2xl mx-auto h-screen flex justify-evenly items-center flex-col ">
      <motion.h2
        className="text-2xl w-full text-left flex items-center font-bold h-[15vh]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Hablamos de tu proyecto?
      </motion.h2>

      <div className="grid grid-cols-2 gap-3 h-[90vh] w-full lg:gap-1 ">
        {/* Columna izquierda */}
        <motion.div
          className="space-y-20 flex justify-center items-center flex-col lg:space-y-10 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInLeft}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <motion.img
            src={image1}
            alt="Imagen 1"
            className="w-[80%] sm:w-[90%] md:h-[25vh] shadow-lg object-cover lg:h-[20vh]  lg:w-[60%] lg:object-cover md:w-[50%] xl:h-full xl:w-[25vh] xl:object-cover"
            variants={fadeInLeft}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.img
            src={image4}
            alt="Imagen 4"
            className="w-full sm:w-[90%] md:h-[25vh] shadow-sm object-cover lg:h-[20vh] lg:space-y-10  lg:w-[60%] lg:object-cover md:w-[50%] xl:h-full xl:w-[25vh] xl:object-cover"
            variants={fadeInLeft}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.img
            src={image5}
            alt="Imagen 5"
            className="w-full sm:w-[90%] sm:h-[25vh] shadow-lg object-cover lg:h-[20vh] lg:space-y-10  lg:w-[60%] lg:object-cover md:w-[50%] md:h-[15vh] md:space-y-5 xl:h-[25vh] xl:w-[25vh] xl:object-cover"
            variants={fadeInLeft}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>

        {/* Columna derecha */}
        <motion.div
          className="grid grid-rows-6 gap-3 h-full w-full justify-center items-center flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInRight}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Espacio vacío */}
          <div className="row-span-1 h-full flex flex-col justify-center w-full">
          <div className="text-center flex justify-center items-center flex-col h-full">
      <motion.a
        href="https://www.instagram.com/diego.escriche/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl font-semibold h-2/5 flex items-center relative group"
        variants={fadeInRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Instagram
        <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
      </motion.a>
    </div>
          </div>

          {/* Imagen 2 */}
          <motion.div
            className="row-span-2 flex flex-col justify-center items-center w-full"
            variants={fadeInRight}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img
              src={image2}
              alt="Imagen 2"
              className="w-full md:w-full md:h-[25vh] shadow-lg object-cover lg:h-[20vh]   lg:object-cover xl:h-[25vh] xl:w-[25vh] xl:object-cover"
            />
          </motion.div>

          {/* Imagen 3 */}
          <motion.div
            className="row-span-2 flex flex-col justify-center items-center w-full"
            variants={fadeInRight}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img
              src={image3}
              alt="Imagen 3"
              className="w-full md:w-full md:h-[25vh] shadow-lg object-cover lg:h-[20vh]   lg:object-cover xl:h-[25vh] xl:w-[25vh] xl:object-cover"
            />
          </motion.div>

          {/* Texto de contacto */}
          <div className="text-center flex justify-center items-center flex-col h-full w-full relative">
      <motion.p
        className="text-2xl font-semibold h-1/3 flex items-end w-full justify-center"
        variants={fadeInRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          className="text-black hover:text-black cursor-pointer relative group"
          onClick={copyToClipboard}
        >
          Correo
          <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
        </a>
      </motion.p>
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1/5 transform -translate-x-1/2 top-1/2 bg-gray-800 text-white px-4 py-2 rounded-md text-sm shadow-md"
          >
            Correo copiado
          </motion.div>
        )}
      </AnimatePresence>
    </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contacto;
