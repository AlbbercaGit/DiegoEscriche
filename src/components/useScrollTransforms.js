import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Definición del hook personalizado
function useScrollTransforms(containerRef, offset = ["start end", "end start 0.1"]) {
  // Usamos useScroll con la referencia del contenedor y el offset
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset
  });


  
  // Definimos el rango de progreso del scroll que queremos utilizar
  const limitedScrollYProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Definimos las transformaciones basadas en el progreso del scroll
  const x1 = useTransform(limitedScrollYProgress, [0, 0.25, 1], ["-100%", "0%", "0%"]);
  const x2 = useTransform(limitedScrollYProgress, [0, 0.25, 1], ["70%", "0%", "0%"]);
  const x3 = useTransform(limitedScrollYProgress, [0, 0.25, 1], ["30%", "0%", "0%"]);

  const opacity = useTransform(limitedScrollYProgress, [0, 0.45, 0.9, 1], [0, 1, 1, 1]);

  // Retornamos las transformaciones y el progreso del scroll
  return { x1, x2,x3, opacity, scrollYProgress };
}

export default useScrollTransforms;
