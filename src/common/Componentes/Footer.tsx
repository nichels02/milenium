import { useEffect, useState } from 'react';
import styles from '../css/Footer.module.css';
import { Link } from 'react-router-dom';
import ScrollLink from './Sistemas/ScrollLink';
import { useLanguage } from './Sistemas/LanguageContext';
import { useContent } from './Sistemas/useContent';
import LazyImage from './Sistemas/LazyImage.tsx';

function Footer() {
    const [darkMode, setDarkMode] = useState(false);
    const [esPantallaChica, setEsPantallaChica] = useState(window.innerWidth <= 600); // Inicializa el estado
    const { language } = useLanguage();
    const content = useContent();

    useEffect(() => {
        const checkDarkMode = () => {
            const isDark = document.documentElement.classList.contains('dark-mode');
            setDarkMode(isDark);
        };

        checkDarkMode();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    checkDarkMode();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        // Agregar listener para cambio de tamaño de la ventana
        const handleResize = () => {
            setEsPantallaChica(window.innerWidth <= 600); // Actualiza el estado
        };

        window.addEventListener('resize', handleResize);

        // Cleanup: quitar el listener cuando el componente se desmonte
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!content) return null;

    const footerContent = content.home.Footer;
    const common = footerContent.Common;
    const localized = footerContent[language];

    const logo = darkMode ? common.LidermanLogoDark : common.LidermanLogoLight;
    const facebookIcon = darkMode ? common.facebookDark : common.facebookLight;
    const tiktokIcon = darkMode ? common.tiktokDark : common.tiktokLight;
    const linkedinIcon = darkMode ? common.linkedinDark : common.linkedinLight;
    const youtubeIcon = darkMode ? common.youtubeDark : common.youtubeLight;

    // Modificación: declarar textoDerechos como React.ReactNode
    let textoDerechos: React.ReactNode = localized.TextosFinales.DerechosReservados;

    // Comprobamos si textoDerechos es un string antes de aplicar los métodos
    if (typeof textoDerechos === 'string' && esPantallaChica && textoDerechos.includes('.')) {
        const partes = textoDerechos.split(/\. (.+)/); // Divide el texto en el primer punto
        textoDerechos = (
            <>
                {partes[0]}.<br />
                {partes[1]}
            </>
        );
    }

    return (
        <div className={styles.footerContainer}>
            <footer className={styles.footer}>
                {/* Primera Sección */}
                <div className={styles.topSection}>
                    {/*<div className={styles.logoSection}>*/}
                    {/*    <LazyImage src={logo} alt="Logo Liderman" className={styles.logo} />*/}
                    {/*    <p className={styles.logoText}>{localized.Eslogan}</p>*/}
                    {/*</div>*/}

                    <div className={styles.logoSection}>
                        <ScrollLink to="/#Home1" scrollMode="top" >
                            <LazyImage src={logo} alt="Logo Liderman" className={styles.logo} />
                        </ScrollLink>
                        <p className={styles.logoText}>{localized.Eslogan}</p>
                    </div>

                    {/*<ScrollLink to="/#Home1" scrollMode="top" >*/}
                    {/*    <LazyImage src={logo} alt="Logo Liderman" className={styles.logo} />*/}
                    {/*</ScrollLink>*/}

                    <div className={styles.columnsContainer}>
                        <div className={styles.column}>
                            <h4>{localized.Inicio.Titulo}</h4>
                            <ScrollLink to="/#Home1" scrollMode="bottom" className={styles.menuButton} >
                                {localized.Inicio.Soluciones}
                            </ScrollLink>
                            <ScrollLink to="/#Marquee" scrollMode="center" className={styles.menuButton} >
                                {localized.Inicio.Certificaciones}
                            </ScrollLink>
                            <ScrollLink to="/#PorcentajeNegocio" scrollMode="center" className={styles.menuButton} >
                                {localized.Inicio.Presencia}
                            </ScrollLink>
                            <ScrollLink to="/#ImagenYGrid2" scrollMode="center" className={styles.menuButton} >
                                {localized.Inicio.Cultura}
                            </ScrollLink>
                        </div>

                        <div className={styles.column}>
                            <h4>{localized.Conocenos.Titulo}</h4>
                            <ScrollLink to="/Conocenos#HeaderGenerico" scrollMode="top" className={styles.menuButton} >
                                {localized.Conocenos.QuienesSomos}
                            </ScrollLink>

                            <ScrollLink to="/Conocenos#LineaDeTiempo" scrollMode="top" className={styles.menuButton} >
                                {localized.Conocenos.Historia}
                            </ScrollLink>

                        </div>

                        <div className={styles.column}>
                            <h4>{localized.Soluciones.Titulo}</h4>

                            <ScrollLink to="/Seguridad" className={styles.menuButton} >
                                {localized.Soluciones.Seguridad}
                            </ScrollLink>
                            <Link to="/Tecnologia" className={styles.menuButton}>
                                {localized.Soluciones.Tecnologia}
                            </Link>
                            <Link to="/Servicios" className={styles.menuButton}>
                                {localized.Soluciones.Servicio}
                            </Link>
                        </div>

                        <div className={styles.column}>
                            <h4>{localized.lidermania.Titulo}</h4>

                            <ScrollLink to="/Lidermania#DonaRotativa2" scrollMode="center" className={styles.menuButton} >
                                {localized.lidermania.MejoresPersonas}
                            </ScrollLink>

                            <ScrollLink to="/Lidermania#DonaRotativa2" scrollMode="center" className={styles.menuButton} >
                                {localized.lidermania.CuatroAmas}
                            </ScrollLink>

                            <ScrollLink to="/Lidermania#CarruselDeTrabajos" scrollMode="center" className={styles.menuButton} >
                                {localized.lidermania.Unete}
                            </ScrollLink>

                        </div>
                    </div>
                </div>

                {/* Segunda Sección - Contenedores con botones cuadrados */}
                <div className={styles.middleSection}>
                    <div className={styles.actionCardsContainer}>
                        {/* Card Primaria */}
                        <div className={`${styles.actionCard} ${styles.primary}`}>
                            <div className={`${styles.cardTextContent} ${styles.primary}`}>
                                <h3 className={styles.cardTitle}>{localized.Boton1.Titulo}</h3>
                                <p className={styles.cardSubtitle}>{localized.Boton1.Subtitulo}</p>
                            </div>
                            {/*<button className={`${styles.squareButton} ${styles.primary}`}>➔</button>*/}



                            {/*Por Si Acaso No es Link Externo*/}
                            <ScrollLink to={`${location.pathname}#FormularioDeContacto`} scrollMode="top"
                                        className={`${styles.squareButton} ${styles.primary}`}>
                                ➔
                            </ScrollLink>

                            {/*<ScrollLink to= {`${location.pathname}#FormularioDeContacto`}*/}
                            {/*            scrollMode="top" className={styles.boton} >*/}
                            {/*    {textos.contactanos}*/}
                            {/*</ScrollLink>*/}

                            {/*<a*/}
                            {/*    href="https://youtube.com"*/}
                            {/*    target="_blank"*/}
                            {/*    rel="noopener noreferrer"*/}
                            {/*    className={`${styles.squareButton} ${styles.primary}`}*/}
                            {/*>*/}
                            {/*    ➔*/}
                            {/*</a>*/}


                        </div>

                        {/* Card Secundaria */}
                        <div className={`${styles.actionCard} ${styles.secondary}`}>
                            <div className={`${styles.cardTextContent} ${styles.secondary}`}>
                                <h3 className={styles.cardTitle}>{localized.Boton2.Titulo}</h3>
                                <p className={styles.cardSubtitle}>{localized.Boton2.Subtitulo}</p>
                            </div>
                            {/*<button className={`${styles.squareButton} ${styles.secondary}`}>➔</button>*/}
                            <ScrollLink to="/Lidermania#FacebookTrabajos" scrollMode="center"
                                        className={`${styles.squareButton} ${styles.secondary}`}>
                                ➔
                            </ScrollLink>
                        </div>
                    </div>
                </div>

                {/* Tercera Sección - Todo en una línea */}
                <div className={styles.bottomSection}>
                    <div className={styles.divider}></div>

                    <div className={styles.bottomContent}>
                        <div className={styles.legal}>
                            <span className={styles.copyright}>
                                {textoDerechos}
                            </span>
                            <a
                                href={common.Links.LinkTerminosYCondiciones}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.legalButton}
                            >
                                {localized.TextosFinales.TerminosYCondiciones}
                            </a>

                            <a
                                href={common.Links.LinkPoliticaYPrivacidad}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.legalButton}
                            >
                                {localized.TextosFinales.PoliticaDePrivacidad}
                            </a>

                        </div>

                        <div className={styles.socialLinks}>
                            <a href={common.Links.facebook} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <LazyImage src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
                            </a>
                            <a href={common.Links.tiktok} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <LazyImage src={tiktokIcon} alt="Tiktok" className={styles.socialIcon} />
                            </a>
                            <a href={common.Links.linkedin} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <LazyImage src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
                            </a>
                            <a href={common.Links.youtube} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <LazyImage src={youtubeIcon} alt="YouTube" className={styles.socialIcon} />
                            </a>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
