import { useState, useEffect, useRef } from "react";
import { useContent } from "./Sistemas/useContent.tsx";
import { useLanguage } from "./Sistemas/LanguageContext.tsx";
import styles from "../css/VentanaModal2.module.css";
import LazyImage from './Sistemas/LazyImage.tsx';

type VentanaModal2Props = {
    onClose: () => void;
};

function VentanaModal2({ onClose }: VentanaModal2Props) {
    const [isOpen, setIsOpen] = useState(true);
    const { language } = useLanguage();
    const content = useContent();

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

    if (!content) {
        return <div>Cargando...</div>;
    }

    const modalData = content.Tecnologia.Modal2[language];

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
                            <div className={styles.mainTextContainer}>
                                <p className={styles.mainText}>{modalData.Texto}</p>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.containerLeft}>
                                    <LazyImage
                                        className={styles.image}
                                        src={content.Tecnologia.Modal2.Common.ImagenIzq}
                                        alt="Imagen izquierda"
                                    />
                                    <h6 className={styles.title}>{modalData.TituloIzq}</h6>
                                    <div className={styles.text}>{modalData.TextoIzq}</div>
                                </div>

                                <div className={styles.containerRight}>
                                    <LazyImage
                                        className={styles.image}
                                        src={content.Tecnologia.Modal2.Common.ImagenDer}
                                        alt="Imagen derecha"
                                    />
                                    <h6 className={styles.title}>{modalData.TituloDer}</h6>
                                    <div className={styles.text}>{modalData.TextoDer}</div>
                                </div>
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

export default VentanaModal2;
