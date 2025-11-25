import { useState } from "react";
import styles from "../css/TextImageSelector.module.css";
import LazyImage from './Sistemas/LazyImage.tsx';

interface Item {
    description: string;
    image: string;
}

interface TextImageSelectorProps {
    items: Item[];
    textosBotones: string[];
    imagenALaIzquierda: boolean;
}

function TextImageSelector({
                               items,
                               textosBotones,
                               imagenALaIzquierda
                           }: TextImageSelectorProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={`${styles.container} ${imagenALaIzquierda ? styles.reverse : ""}`}>
            {/* Contenedor de contenido (texto + imagen) */}
            <div className={styles.contentBox}>
                <div className={styles.textContainer}>
                    <p className={styles.description}>{items[activeIndex].description}</p>
                </div>
                <LazyImage
                    className={styles.image}
                    src={items[activeIndex].image}
                    alt="Contenido visual"
                />
            </div>

            {/* Botones (ahora funcionan como títulos) */}
            <div className={styles.buttonContainer}>
                {textosBotones.map((texto, index) => (
                    <button
                        key={index}
                        className={`${styles.button} ${
                            activeIndex === index ? styles.active : ""
                        }`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {texto}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TextImageSelector;