import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../css/BarraDeOpciones.module.css";
import { isDarkModeEnabled } from "./Sistemas/toggleDarkMode.ts";
import { useContent } from "./Sistemas/useContent";
import { useLanguage } from "./Sistemas/LanguageContext";

// Estado global para el color del SVG
let setSVGColorGlobal: (color: string) => void;

export function updateSVGColor() {
    if (setSVGColorGlobal) {
        setSVGColorGlobal(isDarkModeEnabled() ? "#FFFFFF" : "#393939");
    }
}

function BarraDeOpciones() {
    const { language } = useLanguage();
    const content = useContent();

    const [showPanel, setShowPanel] = useState(false);
    const [svgColor, setSvgColor] = useState(isDarkModeEnabled() ? "#FFFFFF" : "#393939");

    // Guardar la función para actualizar el color desde fuera
    useEffect(() => {
        setSVGColorGlobal = setSvgColor;
    }, []);

    // Escuchar cambios en la clase `dark-mode` en tiempo real
    useEffect(() => {
        const htmlElement = document.documentElement;

        const observer = new MutationObserver(() => {
            setSvgColor(isDarkModeEnabled() ? "#FFFFFF" : "#393939");
        });

        observer.observe(htmlElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    // ✅ Ahora la validación ocurre después de los hooks
    if (!content || !content.home || !content.home.BarraDeOpciones) {
        return <p>Cargando...</p>;
    }

    const textos = content.home.BarraDeOpciones[language];

    return (
        <div className={styles.barra}>
            <Link to="/" className={styles.boton}>{textos.inicio}</Link>
            <Link to="/Conocenos" className={styles.boton}>{textos.conocenos}</Link>

            <div
                className={styles.dropdown}
                onMouseEnter={() => setShowPanel(true)}
                onMouseLeave={() => setShowPanel(false)}
                onClick={() => setShowPanel(!showPanel)}
            >
                <button className={styles.boton}>
                    {textos.soluciones}
                    <svg className={styles.dropdownSymbol} viewBox="0 0 24 24" width="20" height="20">
                        <path d="M5 9l7 7 7-7" stroke={svgColor} strokeWidth="3" fill="none" />
                    </svg>
                </button>

                {showPanel && (
                    <div className={styles.panel}>
                        <Link to="/Seguridad" className={styles.boton}>{textos.seguridad}</Link>
                        <Link to="/Servicios" className={styles.boton}>{textos.servicio}</Link>
                        <Link to="/Tecnologia" className={styles.boton}>{textos.tecnologia}</Link>
                    </div>
                )}
            </div>

            <Link to="/Lidermania" className={styles.boton}>
                {textos.lidermania} <span className={styles.highlight}>{textos.unete}</span>
            </Link>

            <Link to="/Legal" className={styles.boton}>
                {textos.Legal}
            </Link>
        </div>
    );
}


export default BarraDeOpciones;
