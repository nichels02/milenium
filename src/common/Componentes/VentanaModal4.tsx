import { useState, useEffect, useRef } from "react";
import { useContent } from "./Sistemas/useContent";  // Importar el contexto de contenido
import LazyImage from './Sistemas/LazyImage.tsx';

import { useLanguage } from "./Sistemas/LanguageContext";  // Importar el contexto de idioma
import styles from "../css/VentanaModal4.module.css";

function VentanaModal4({ onClose }: { onClose: () => void }) {
    const [isOpen, setIsOpen] = useState(true);
    const contentData = useContent(); // Obtener datos del contexto Content
    const { language } = useLanguage(); // Obtener el idioma actual

    const scrollYRef = useRef<number>(0);

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

        return () => {
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";

            window.scrollTo(0, scrollYRef.current);
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            onClose();
        }
    }, [isOpen, onClose]);

    if (!contentData) {
        return null;
    }

    const modalData = contentData.Tecnologia.Modal4;
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
                        {/* Header */}
                        <div className={styles.modalHeader}>
                            <h5 className={styles.modalTitle}>{modalContent.Titulo}</h5>
                        </div>

                        {/* Cuerpo */}
                        <div className={styles.modalBody}>
                            <div className={styles.mainTextContainer}>
                                <p className={styles.mainText}>{modalContent.Texto}</p>
                            </div>

                            {/* Fila única con 4 contenedores */}
                            <div className={styles.row}>
                                <div className={styles.container}>
                                    <LazyImage
                                        className={styles.image}
                                        src={modalData.Common.Imagen1}
                                        alt="Función 1"
                                    />
                                    <h6 className={styles.title}>{modalContent.Subtitulo1}</h6>
                                    <p className={styles.text}>{modalContent.Texto1}</p>
                                </div>

                                <div className={styles.container}>
                                    <LazyImage
                                        className={styles.image}
                                        src={modalData.Common.Imagen2}
                                        alt="Función 2"
                                    />
                                    <h6 className={styles.title}>{modalContent.Subtitulo2}</h6>
                                    <p className={styles.text}>{modalContent.Texto2}</p>
                                </div>

                                <div className={styles.container}>
                                    <LazyImage
                                        className={styles.image}
                                        src={modalData.Common.Imagen3}
                                        alt="Función 3"
                                    />
                                    <h6 className={styles.title}>{modalContent.Subtitulo3}</h6>
                                    <p className={styles.text}>{modalContent.Texto3}</p>
                                </div>

                                <div className={styles.container}>
                                    <LazyImage
                                        className={styles.image}
                                        src={modalData.Common.Imagen4}
                                        alt="Función 4"
                                    />
                                    <h6 className={styles.title}>{modalContent.Subtitulo4}</h6>
                                    <p className={styles.text}>{modalContent.Texto4}</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
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

export default VentanaModal4;
