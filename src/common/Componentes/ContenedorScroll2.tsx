import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LineaDeTiempo from "../../assets/Conocenos/LineaDeTiempo.svg";

function ContenedorScroll2() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [scrollDistance, setScrollDistance] = useState(0);

    // 1. Calcular dimensiones cuando la imagen carga
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current && imgRef.current) {
                const imgWidth = imgRef.current.scrollWidth;
                const containerWidth = containerRef.current.offsetWidth;
                const distance = imgWidth - containerWidth;

                if (distance > 0) {
                    setScrollDistance(distance);
                    console.log(`Imagen más ancha que contenedor por ${distance}px`);
                } else {
                    console.warn("La imagen NO es más ancha que el contenedor. Aumenta el ancho de la imagen.");
                }
            }
        };

        const img = imgRef.current;
        if (img) {
            img.addEventListener('load', updateDimensions);
            if (img.complete) updateDimensions();
        }

        return () => {
            if (img) img.removeEventListener('load', updateDimensions);
        };
    }, []);

    // 2. Configurar scroll
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // 3. Transformación
    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                overflow: "hidden",
                height: "150vh",
                width: "100%",
                border: "2px dashed red", // Para debug
            }}
        >
            <motion.img
                ref={imgRef}
                src={LineaDeTiempo}
                alt="Linea de tiempo"
                style={{
                    x,
                    position: "absolute",
                    height: "100%",
                    width: "auto",
                    top: 0,
                    left: 0,
                    willChange: "transform",
                    minWidth: "150%", // Garantiza overflow
                }}
            />
        </div>
    );
}

export default ContenedorScroll2;