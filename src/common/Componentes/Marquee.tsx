import { useEffect } from "react";
import styles from "../css/Marquee.module.css";
import { useContent } from "./Sistemas/useContent.tsx";
import LazyImage from './Sistemas/LazyImage.tsx';

function Marquee() {
    // Obtener datos del JSON y el idioma actual
    const content = useContent();

    // Usar valores por defecto para evitar errores si los datos aún no están disponibles
    const generalItems = content?.home.Marquee.common.items ?? [];

    // Fusionar imágenes con subtítulos del idioma actual
    const marqueeItems = generalItems.map((item, ) => ({
        ...item
    }));

    const numImages = marqueeItems.length;
    const translateXValue = -1 * numImages * 12; // Ajuste automático

    // ✅ Asegurar que useEffect se ejecuta siempre, sin romper las reglas de los hooks
    useEffect(() => {
        document.documentElement.style.setProperty("--translateX", `${translateXValue}%`);
    }, [translateXValue]);

    // Si los datos aún no han cargado, mostrar un loader
    if (!content) return <p className={styles.loading}>Cargando...</p>;

    return (
        <div id="Marquee" className={styles.marqueeWrapper}>
            <div className={styles.leftFade}></div>
            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeContent}>
                    {[...Array(3)].map((_, repetition) =>
                        marqueeItems.map((item, index) => (
                            <div key={`${repetition}-${index}`} className={styles.marqueeItemContainer}>
                                <LazyImage className={styles.marqueeItem} src={item.src} alt={item.alt} />
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className={styles.rightFade}></div>
        </div>
    );
}

export default Marquee;
