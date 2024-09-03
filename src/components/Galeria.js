import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

function Footer() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const [xValues, setXValues] = useState(["1%", "-81%"]);

  // UseEffect para cambiar los valores de x según el tamaño de la pantalla
  useEffect(() => {
    const updateXValues = () => {
      if (window.innerWidth < 768) {
        // Pantallas móviles
        setXValues(["1%", "-81%"]);
      } else {
        // Pantallas más grandes (desktop/tablets)
        setXValues(["1%", "-40%"]);
      }
    };

    // Inicializar con el valor correcto
    updateXValues();

    // Escuchar cambios de tamaño en la ventana
    window.addEventListener("resize", updateXValues);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updateXValues);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], xValues);
  return (
    <main ref={targetRef} className="relative h-[400vh] md:h-[350vh]">
      <div className="sticky w-full top-0 flex h-[100vh] items-center  overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4 items-center justify-center"
        >
          <div className=" relative h-[400px] w-[400px] flex justify-center items-center md:h-[600px] md:w-[600px]">
            <img
              alt="Diego de espaldas"
              className="absolute inset-0 h-full    shadow-lg"
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/main/turboviolencia.jpg
"
            />

            <iframe
              src="https://open.spotify.com/embed/track/1kTMe7VPlUt2gby7NqWzoi?utm_source=generator"
              width="50%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="relative z-10"

            ></iframe>
          </div>
          {/* Fantastic Explosion */}
          <div className=" relative h-[400px] w-[400px] flex justify-center items-center  md:h-[600px] md:w-[600px]">
            <img
              alt="Diego de espaldas"
              className="absolute inset-0 h-full    shadow-lg"
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/main/fantastic.jfif
"
            />
            <iframe
              src="https://open.spotify.com/embed/track/2sLSdMlwnt48B2YAOqNHpu?utm_source=generator"
              width="60%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="relative z-10"
            ></iframe>
          </div>
          {/* Futuro Terror */}
          <div className=" relative h-[400px] w-[400px] flex justify-center items-center  md:h-[600px] md:w-[600px]">
            <img
              alt="Diego de espaldas"
              className="absolute inset-0 h-full    shadow-lg"
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/main/presente.jfif
"
            />

            <iframe
              src="https://open.spotify.com/embed/track/4SJ9LQDLIVjxtBtZPQquoJ?utm_source=generator"
              width="60%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="relative z-10"
            ></iframe>
          </div>
          {/* Mausoleo */}
          <div className=" relative h-[400px] w-[400px] flex justify-center items-center  md:h-[600px] md:w-[600px]">
            <img
              alt="Diego de espaldas"
              className="absolute inset-0 h-full    shadow-lg"
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/main/a0251967785_65.jfif
"
            />

            <iframe
              src="https://open.spotify.com/embed/track/55splxCKVjk24tQK1TUKiT?utm_source=generator&theme=0"
              width="60%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="relative z-10"
            ></iframe>
          </div>
          {/* Santa Companha */}
          <div className=" relative h-[400px] w-[400px] flex justify-center items-center  md:h-[600px] md:w-[600px]">
            <img
              alt="Diego de espaldas"
              className="absolute inset-0 h-full    shadow-lg"
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/main/santacompanha.jpg
"
            />

            <iframe
              src="https://open.spotify.com/embed/track/5bPZhQMnFkOqJwnyk8Xfwi?utm_source=generator"
              width="60%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="relative z-10"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default Footer;
