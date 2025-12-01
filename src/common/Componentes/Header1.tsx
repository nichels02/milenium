import { useContent } from "./Sistemas/useContent";
// import { useLanguage } from "./Sistemas/LanguageContext";
import { useState, useEffect } from "react";
import styles from "../css/Header1.module.css";
import LazyImage from "./Sistemas/LazyImage";

function Header1() {
    const content = useContent();

    const textos = content?.home?.Header?.es;
    const imagenesContenido = content?.home?.Header?.contenido;
    const imagenesArray = imagenesContenido?.imagenes ?? [];
    const totalImagenes = imagenesArray.length;

    const [index, setIndex] = useState(0);

    // Cambia la imagen automáticamente cada 4 segundos
    useEffect(() => {
        if (totalImagenes === 0) return;

        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % totalImagenes);
        }, 2500);

        return () => clearInterval(interval);
    }, [totalImagenes]);

    if (!content || !textos || totalImagenes === 0) {
        return <p>Cargando...</p>;
    }

    function parseHighlight(text: string, defaultClass: string, highlightClass: string) {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            const isHighlight = part.startsWith("**") && part.endsWith("**");
            const cleanText = isHighlight ? part.slice(2, -2) : part;
            return (
                <span key={i} className={isHighlight ? highlightClass : defaultClass}>
                    {cleanText}
                </span>
            );
        });
    }

    return (
        <header id="Home1" className={styles.header}>
            <div className={styles.headerImageContainer}>

                {/* Imagen de fondo */}
                <LazyImage
                    src={imagenesContenido?.imagen_De_Fondo}
                    alt="Header Image"
                    className={styles.headerImage}
                />

                {/* Textos */}
                <div className={styles.textContainer}>
                    <h1 className={styles.text1}>
                        {parseHighlight(
                            textos?.[index]?.titulo,
                            styles.TitulotextoNormal,
                            styles.Titulotextodestacado
                        )}
                    </h1>
                    <p className={styles.text3}>{textos?.[index]?.descripcion1}</p>
                    <button className={styles.buttonPrimary}>{textos?.[index]?.botonPrimario}</button>
                </div>

                {/* Imagen que cambia automáticamente */}
                <div className={styles.ContenedorContenedorImagen}>
                    <div className={styles.ContenedorImagen}>
                        <LazyImage
                            src={imagenesArray[index]}
                            alt={`Imagen-${index}`}
                            className={styles.Imagen}
                            loading="eager"
                        />
                    </div>
                </div>

                {/* Barra de navegación */}
                <div className={styles.BarraPrincipal}>
                    <div className={styles.IntermedioBarraPrincipal}>
                        <div className={styles.BarraContenedorDeBotones}>
                            {content.home.BarraPrincipalMilenium.Botones.map((boton, i) => (
                                <a
                                    key={i}
                                    href={boton.link}
                                    className={`${styles.BotonItem} ${styles[`celda${i + 1}`]}`}
                                >
                                    {boton.Texto}
                                </a>
                            ))}
                        </div>
                        <div className={styles.BarraContenedorDeBanderas}>
                            {content.home.BarraPrincipalMilenium.Banderas.map((bandera, i) => (
                                <a key={i} href={bandera.link} className={styles.BanderaItem}>
                                    <img
                                        src={bandera.Imagen}
                                        alt={`Bandera-${i}`}
                                        className={styles.BanderaImagen}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header1;
