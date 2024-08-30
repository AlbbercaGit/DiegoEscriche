import React, { useState } from "react";
import { motion } from "framer-motion";

import "tailwindcss/tailwind.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`flex justify-center ${
        isOpen ? "bg-transparent" : "bg-transparent"
      } text-black font-sans relative z-10`}
    >
      <motion.div
        className="absolute w-4/5 h-[8vh] container mx-auto flex items-center justify-between md:relative"
                  initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5, }}
      >
        {/* Botón de menú */}

        {/* Contenedor para centrar el título */}
        <motion.div
          className="flex-1 flex items-center justify-start text-2xl font-bold "
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 1.5 }}
        >
          Diego Escriche
        </motion.div>
        <button
          onClick={toggleMenu}
          className={`relative text-black text-2xl md:hidden transition-transform duration-300 ease-in-out z-20`}
        >
          <span
            className={`block w-6 h-0.5 bg-black text-black transform transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black text-black my-1 transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black text-black transform transition-transform duration-300 ease-in-out z-20 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
        {/* Menú de navegación para pantallas grandes */}
        <nav className="hidden md:flex md:items-center">
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Mezclas
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>

      {/* Menú de navegación para pantallas pequeñas */}
      <div
        className={`fixed inset-0 bg-transparent backdrop-blur-md transition-opacity duration-700 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        } ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        } flex items-center justify-center `}
      >
        <div className="relative w-full h-full flex items-center justify-center text-white">
          {/* Botón de menú que ahora también cierra el menú */}

          <nav className="flex flex-col items-center text-center text-2xl">
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-3xl font-sans py-2 px-4 underline-button"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-3xl font-sans py-2 px-4 underline-button"
                  onClick={toggleMenu}
                >
                  Reservar
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-3xl font-sans py-2 px-4 underline-button"
                  onClick={toggleMenu}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
