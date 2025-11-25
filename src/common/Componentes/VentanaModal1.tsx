import { useState, useEffect, useRef } from "react";
import styles from "../css/VentanaModal1.module.css";
import { useContent } from "./Sistemas/useContent.tsx";
import { useLanguage } from "./Sistemas/LanguageContext.tsx";
import LazyImage from './Sistemas/LazyImage.tsx';

type VentanaModal1Props = {
    onClose: () => void;
};

function VentanaModal1({ onClose }: VentanaModal1Props) {
    const [isOpen, setIsOpen] = useState(true);
    const { language } = useLanguage();
    const data = useContent();

    const scrollYRef = useRef<number>(0); // guardamos el scroll sin depender del DOM

    useEffect(() => {
        if (isOpen) {
            scrollYRef.current = window.scrollY;

            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollYRef.current}px`;
            document.body.style.width = "100%";
        } else {
            // restaurar el scroll
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";

            window.scrollTo(0, scrollYRef.current);
        }

        // limpieza por si se desmonta
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

    if (!data) {
        return <div>Cargando...</div>;
    }

    const modalData = language === "es" ? data.Tecnologia.Modal1.es : data.Tecnologia.Modal1.en;

    const closeModal = () => setIsOpen(false);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

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
                            <h5 className={styles.modalTitle}>{modalData.Titulo}</h5>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.modalBodyLeft}>
                                <p>{modalData.Texto}</p>
                            </div>
                            <div className={styles.modalBodyRight}>
                                <LazyImage
                                    className={styles.modalImage}
                                    src={data.Tecnologia.Modal1.Common.Imagen}
                                    alt="Imagen del modal"
                                />
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <button onClick={closeModal} className={styles.closeButton}>
                                {modalData.BotonCerrar}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default VentanaModal1;
