import { useContent } from "./Sistemas/useContent.tsx";
import { useLanguage } from "./Sistemas/LanguageContext.tsx";
import styles from "../css/TituloTextoEImagen2.module.css";
import LazyImage from './Sistemas/LazyImage.tsx';

function TituloTextoEImagen2() {
    const contentData = useContent();
    const { language } = useLanguage();

    if (!contentData) return <div>Cargando...</div>;

    const tituloTextoEImagen = contentData.Lidermania.TituloTextoEImagen2;
    const titulo = tituloTextoEImagen[language].Titulo;
    const subtitulo = tituloTextoEImagen[language].Subtitulo;
    const subtitulo2 = tituloTextoEImagen[language].Subtitulo2;
    const imagenUrl = tituloTextoEImagen.Common.ImagenDelCostado || "default-image.jpg";

    // Separamos el texto por "/"
    const parts = titulo.split("/");
    const startsWithHighlight = titulo.startsWith("/");

    // Alternamos estilos dependiendo del índice y si empieza con highlight
    const renderTitulo = parts.map((part, index) => {
        const isHighlight = (index % 2 === 1) === !startsWithHighlight; // corrige el orden según si empieza con o sin /
        if (!part) return null; // evita renderizar spans vacíos
        return isHighlight ? (
            <span key={index} className={styles.highlight}>{part}</span>
        ) : (
            <span key={index}>{part}</span>
        );
    });

    return (
        <div className={styles.parentContainer}> {/* Contenedor padre con estilo propio */}
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>
                        {renderTitulo}
                    </h2>
                    <p className={styles.text}>{subtitulo}</p>
                    <p className={styles.text}>{subtitulo2}</p>
                </div>
                <div className={styles.imageContainer}>
                    <LazyImage className={styles.image} src={imagenUrl} alt="Ejemplo" />
                </div>
            </div>
        </div>
    );
}

export default TituloTextoEImagen2;
