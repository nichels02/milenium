import { useContent } from "./Sistemas/useContent";
import { useLanguage } from "./Sistemas/LanguageContext";
import styles from "../css/Header1.module.css";
import ScrollLink from "./Sistemas/ScrollLink.tsx";
import LazyImage from './Sistemas/LazyImage.tsx';

function Header1() {
    const { language } = useLanguage();
    const content = useContent();

    // ✅ Verifica que `content` y `content.home` existan antes de acceder
    if (!content || !content.home) return <p>Cargando...</p>;

    const textos = content.home.Header[language]; // ✅ Seguridad de tipos
    const imagenes = content.home.Header.contenido; // ✅ Seguridad de tipos

    return (
        <header id="Home1" className={styles.header}>
            <div className={styles.headerImageContainer}>
                <LazyImage src={imagenes.imagen_De_Fondo} alt="Header Image" className={styles.headerImage} />
                <div className={styles.textContainer}>
                    <h1 className={styles.text1}>{textos.titulo}</h1>
                    <p className={styles.text2}>{textos.subtitulo}</p>
                    <p className={styles.text3}>{textos.descripcion1}</p>
                </div>
                <div className={styles.buttonContainer}>
                    <ScrollLink to="/#Home1" scrollMode="bottom" className={styles.buttonPrimary} >
                        {textos.botonPrimario}
                    </ScrollLink>
                    <ScrollLink to="/Lidermania#CarruselDeTrabajos" scrollMode="bottom" className={styles.buttonSecondary} >
                        {textos.botonSecundario}
                    </ScrollLink>
                </div>
                <LazyImage src={imagenes.logo} alt="Logo" className="logoHeader" />
            </div>
            <div className={styles.centeredBottomContainer}>
                <div className={styles.gridItemTop}>{textos.Numero_trabajadores}</div>
                <div className={styles.gridItemTop}>{textos.Numero_years}</div>
                <div className={styles.gridItemTop}>{textos.Numero_clientes}</div>
                <div className={styles.gridItemBottom}>{textos.trabajadores}</div>
                <div className={styles.gridItemBottom}>{textos.years}</div>
                <div className={styles.gridItemBottom}>{textos.clientes}</div>
            </div>
        </header>
    );
}

export default Header1;
