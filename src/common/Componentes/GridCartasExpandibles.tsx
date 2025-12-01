import { useContent } from "./Sistemas/useContent";
import { useState } from "react";
// import { useLanguage } from "./Sistemas/LanguageContext";
import styles from "../css/GridCartasExpandibles.module.css";
import LazyImage from "./Sistemas/LazyImage.tsx";
// import ScrollLink from "./Sistemas/ScrollLink.tsx";
// import LazyImage from './Sistemas/LazyImage.tsx';




import Marquee from "./Marquee.tsx";
import MarqueeClientes from "./MarqueeClientes.tsx";





function GridCartasExpandibles() {
    // const { language } = useLanguage();
    const content = useContent();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    // ✅ Verifica que `content` y `content.home` existan antes de acceder
    if (!content || !content.home) return <p>Cargando...</p>;

    const Contenido = content.home.GridCartasExpandibles; // ✅ Seguridad de tipos


    const componentes = [
        Marquee,
        Marquee,
        Marquee,
        MarqueeClientes
    ];



    return (
        <div className={styles.contenedorPrincipal}>
            <div className={styles.ContenedorPadre}>
                {/*<LazyImage src={Contenido.Common.Imagen} alt="VideoInstitucional" className={styles.Imagen}/>*/}
                <div className={styles.Gid}>
                    {Contenido.map((item, index) => (
                        <div
                            key={index}
                            className={styles.Carta}
                            onClick={() => setActiveIndex(index)}
                        >
                            <LazyImage src={item.Imagen} alt={item.Titulo} className={styles.CartaImagen} />
                            <p className={styles.CartaTitulo}>{item.Titulo}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.componenteActivo}>
                    {activeIndex !== null && (() => {
                        const ComponenteSeleccionado = componentes[activeIndex];
                        return <ComponenteSeleccionado />;
                    })()}
                </div>
            </div>
        </div>
    );
}

export default GridCartasExpandibles;
