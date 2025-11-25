import { useState, useEffect, useRef } from "react";
import { useContent } from "./Sistemas/useContent.tsx";  // Contexto de los datos
import LazyImage from './Sistemas/LazyImage.tsx';

import { useLanguage } from "./Sistemas/LanguageContext.tsx"; // Contexto de los idiomas
import styles from "../css/VentanaModal3.module.css";

function VentanaModal3({ onClose }: { onClose: () => void }) {
    const [isOpen, setIsOpen] = useState(true);
    const contentData = useContent(); // Obtener datos del contexto Content
    const { language } = useLanguage(); // Obtener el idioma actual

    const scrollYRef = useRef<number>(0);

    // Control bloqueo de scroll y restaurar scroll al cerrar modal
    useEffect(() => {
        if (isOpen) {
            scrollYRef.current = window.scrollY;

            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollYRef.current}px`;
            document.body.style.width = "100%";
        } else {
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";

            window.scrollTo(0, scrollYRef.current);
        }

        // Limpieza en desmontaje
        return () => {
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";

            window.scrollTo(0, scrollYRef.current);
        };
    }, [isOpen]);

    // Cuando isOpen cambia a false, avisamos al padre para desmontar
    useEffect(() => {
        if (!isOpen) {
            onClose();
        }
    }, [isOpen, onClose]);

    if (!contentData) {
        return null;
    }

    const modalData = contentData.Tecnologia.Modal3;
    const modalContent = modalData[language];

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };

    const closeModal = () => setIsOpen(false);



    function actualizarAlturaViewport() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    actualizarAlturaViewport();
    window.addEventListener('resize', actualizarAlturaViewport);



    return (
        <>
            {isOpen && (
                <div className={styles.modalOverlay} onClick={handleOverlayClick}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.modalTitle}>{modalContent.Titulo}</h5>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.mainTextContainer}>
                                <p className={styles.mainText}>{modalContent.Texto}</p>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.container}>
                                    <LazyImage
                                        className={styles.image}
                                        src={modalData.Common.ImagenIzqArriba}
                                        alt="Imagen izquierda"
                                    />
                                    <h6 className={styles.title}>{modalContent.TituloIzqArriba}</h6>
                                    <p className={styles.text}>{modalContent.TextoIzqArriba}</p>
                                </div>

                                <div className={styles.container}>
                                    <LazyImage
                                        className={styles.image}
                                        src={modalData.Common.ImagenDerArriba}
                                        alt="Imagen derecha"
                                    />
                                    <h6 className={styles.title}>{modalContent.TituloDerArriba}</h6>
                                    <p className={styles.text}>{modalContent.TextoDerArriba}</p>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.container}>
                                    <LazyImage
                                        className={styles.image}
                                        src={modalData.Common.ImagenIzqAbajo}
                                        alt="Imagen inferior izquierda"
                                    />
                                    <h6 className={styles.title}>{modalContent.TituloIzqAbajo}</h6>
                                    <p className={styles.text}>{modalContent.TextoIzqAbajo}</p>
                                </div>

                                <div className={styles.container}>
                                    <LazyImage
                                        className={styles.image}
                                        src={modalData.Common.ImagenDerAbajo}
                                        alt="Imagen inferior derecha"
                                    />
                                    <h6 className={styles.title}>{modalContent.TituloDerAbajo}</h6>
                                    <p className={styles.text}>{modalContent.TextoDerAbajo}</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <button onClick={closeModal} className={styles.closeButton}>
                                {modalContent.BotonCerrar}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default VentanaModal3;
