import React, { useState, useEffect } from 'react';

// Componente reutilizable para la rotación de imágenes
const RotatingImage = ({ images, interval = 500, className, alt }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(imageInterval);
  }, [images, interval]);

  return (
    <img
      alt={alt}
      className={className}
      src={images[currentImageIndex]}
    />
  );
};

function Contacto() {
  // Array de URLs de imágenes para la primera rotación
  const images1 = [
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/1/1cuadrada.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/1/3.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/1/4.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/1/5.jpg",
  ];

  // Array de URLs de imágenes para la segunda rotación
  const images2 = [
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/2/1.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/2/2.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/2/3.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/2/4.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/2/5.jpg"

  ];

  // Array de URLs de imágenes para la tercera rotación
  const images3 = [
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/3/2cuad.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/3/3.jpg",
    // "https://raw.githubusercontent.com/AlbbercaGit/videos/main/3/4.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/3/5cuad.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/3/1cuad.jpg"

  ];
  const images4 = [
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/4/1.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/4/2.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/4/3.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/4/4.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/4/5.jpg"

  ];
  const images5 = [
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/5/1.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/5/2.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/5/3.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/5/4.jpg",
    "https://raw.githubusercontent.com/AlbbercaGit/videos/main/5/5.jpg"

  ];

  return (
    <div className="font-sans p-6 max-w-2xl mx-auto h-screen flex justify-evenly items-center flex-col ">
      <h2 className="text-xl w-full text-left flex items-center font-bold h-[10vh]">
        Hablamos de tu proyecto?
      </h2>

      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Columna izquierda */}
        <div className="space-y-20">
          {/* Imagen rotativa 1 */}
          <RotatingImage
            images={images1}
            interval={250}
            className="w-full md:w-[300px] md:h-[300px]"
            alt="Imagen rotativa 1"
          />

          {/* Imagen fija */}
          <RotatingImage
            images={images4}
            interval={250}
            className="w-full md:w-[300px] md:h-[300px]"
            alt="Imagen rotativa 1"
          />

          {/* Imagen fija */}
          <RotatingImage
            images={images5}
            interval={250}
            className="w-full md:w-[300px] md:h-[300px]"
            alt="Imagen rotativa 1"
          />
          </div>

        {/* Columna derecha */}
        <div className="grid grid-rows-6 gap-4 h-full">
          {/* Espacio vacío */}
          <div className="row-span-1 h-full flex flex-col justify-center">
            <div className="text-center flex justify-center items-center flex-col h-full">
              <p className="text-lg font-semibold h-1/3 flex items-center">
                Instagram
              </p>
            </div>
          </div>

          {/* Imagen rotativa 2 */}
          <div className="row-span-2">
            <RotatingImage
              images={images2}
              interval={250}
              className="w-full md:w-[300px] md:h-[300px]"
              alt="Imagen rotativa 2"
            />
          </div>

          {/* Imagen rotativa 3 */}
          <div className="row-span-2">
            <RotatingImage
              images={images3}
              interval={250}
              className="w-full md:w-[300px] md:h-[300px]"
              alt="Imagen rotativa 3"
            />
            <p className="text-lg font-semibold h-1/3 flex items-end w-full justify-center">
              Correo
            </p>
          </div>

          {/* Texto de contacto */}
          <div className="row-span-1 h-full flex flex-col justify-center">
            <div className="text-center flex items-center flex-col h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
