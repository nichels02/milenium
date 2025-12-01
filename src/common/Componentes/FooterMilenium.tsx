import { useContent } from "./Sistemas/useContent";
import styles from "../css/FooterMilenium.module.css";
import LazyImage from './Sistemas/LazyImage.tsx';

function FooterMilenium() {
    const content = useContent();

    if (!content || !content.home) return <p>Cargando...</p>;

    const footerContent = content.home.FooterMilenium; // Asumo que tus textos y logos están aquí

    return (
        <footer className={styles.contenedorPrincipal}>
            <div className={styles.gridFooter}>


                {/* izquierda: Información */}
                <div className={styles.ContenedorIzq}>
                    <div className={styles.info}>
                        {/* Título con logo */}
                        <div className={styles.titulo}>
                            <LazyImage src={footerContent.logoSmall} alt="Logo" className={styles.logo} />
                            <h2 className={styles.Titulo}>{footerContent.titulo}</h2>
                        </div>


                        {/* Contacto: número y correo */}
                        <div className={styles.contacto}>
                            <div className={styles.item}>
                                <LazyImage src={footerContent.IconoUbicacion} alt="Ubicacion" className={styles.icono} />
                                <p className={styles.Texto}>{footerContent.descripcion}</p>
                            </div>
                            <div className={styles.item}>
                                <LazyImage src={footerContent.iconoTelefono} alt="Teléfono" className={styles.icono} />
                                <p className={styles.Texto}>{footerContent.telefono}</p>
                            </div>
                            <div className={styles.item}>
                                <LazyImage src={footerContent.iconoCorreo} alt="Correo" className={styles.icono} />
                                <p className={styles.Texto}>{footerContent.correo}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Derecha: Mapa */}
                <div className={styles.mapa}>
                    <iframe
                        title="Ubicación"
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2786.3463525746356!2d-79.52402719029463!3d9.019095618479145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAve.%20La%20Paz%2C%20Bethania%2C%20Locales%201%2C2%2C3%20Panam%C3%A1%2C%20Panam%C3%A1%20%2B507%20261-5011!5e0!3m2!1ses!2spe!4v1764185264530!5m2!1ses!2spe"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
}

export default FooterMilenium;
