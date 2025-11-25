import { useState, useEffect } from 'react';
import styles from '../css/BarraDeOpciones2.module.css';
import Switch from './Switch.tsx';
import { useLanguage } from './Sistemas/LanguageContext';
import { useContent } from './Sistemas/useContent';
import { isDarkModeEnabled } from './Sistemas/toggleDarkMode.ts';
import { useLocation } from 'react-router-dom';
import ScrollLink from "./Sistemas/ScrollLink.tsx";

// Estado global para el color
let setSVGColorGlobal: (color: string) => void;

export function updateSVGColor() {
    if (setSVGColorGlobal) {
        setSVGColorGlobal(isDarkModeEnabled() ? "#FFFFFF" : "#393939");
    }
}

function BarraDeOpciones2() {
    const [showPanel, setShowPanel] = useState(false);
    const { language, setLanguage } = useLanguage();
    const content = useContent();
    const location = useLocation();

    // Estado para el color del SVG (debe declararse antes de cualquier `return`)
    const [svgColor, setSvgColor] = useState(isDarkModeEnabled() ? "#FFFFFF" : "#393939");

    // Guardar función para actualizar color desde fuera
    useEffect(() => {
        setSVGColorGlobal = setSvgColor;
    }, []);

    // 🔹 Evita el error de hooks ejecutando `return` después de definirlos
    if (!content || !content.home || !content.home.BarraDeOpciones2) {
        return <p>Cargando...</p>;
    }

    const textos = content.home.BarraDeOpciones2[language];

    return (
        <div className={styles.barra}>
            {/*<Link*/}
            {/*    to={}*/}
            {/*    className={styles.boton}*/}
            {/*>*/}
            {/*    {textos.contactanos}*/}
            {/*</Link>*/}
            <ScrollLink to= {`${location.pathname}#FormularioDeContacto`}
                 scrollMode="top" className={styles.boton} >
                {textos.contactanos}
            </ScrollLink>
            <div
                className={styles.dropdownContainer}
                onMouseEnter={() => setShowPanel(true)}
                onMouseLeave={() => setShowPanel(false)}
            >
                <button className={styles.boton}>
                    <svg
                        className={styles.globeIcon}
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                    >
                        <circle cx="12" cy="12" r="10" stroke={svgColor} strokeWidth="2" fill="none" />
                        <line x1="2" y1="9" x2="22" y2="9" stroke={svgColor} strokeWidth="2" />
                        <line x1="2" y1="15" x2="22" y2="15" stroke={svgColor} strokeWidth="2" />
                        <path d="M12,2 C17,6 17,18 12,22" stroke={svgColor} strokeWidth="2" fill="none" />
                        <path d="M12,2 C7,6 7,18 12,22" stroke={svgColor} strokeWidth="2" fill="none" />
                    </svg>
                    <svg
                        className={styles.dropdownSymbol}
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                    >
                        <path d="M5 9l7 7 7-7" stroke={svgColor} strokeWidth="3" fill="none" />
                    </svg>
                </button>
                {showPanel && (
                    <div className={styles.panel}>
                        <button className={styles.boton} onClick={() => setLanguage('es')}>
                            {textos.espanol} 🇪🇸
                        </button>
                        <button className={styles.boton} onClick={() => setLanguage('en')}>
                            {textos.ingles} 🇺🇸
                        </button>
                    </div>
                )}
            </div>
            <Switch />
        </div>
    );
}

export default BarraDeOpciones2;
