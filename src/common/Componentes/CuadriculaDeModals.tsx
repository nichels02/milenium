import { useState } from "react";
import styles from "../css/CuadriculaDeModals.module.css";
import VentanaModal1 from "./VentanaModal1";
import VentanaModal2 from "./VentanaModal2";
import VentanaModal3 from "./VentanaModal3";
import VentanaModal4 from "./VentanaModal4";
import { useContent } from "./Sistemas/useContent.tsx";
import { useLanguage } from "./Sistemas/LanguageContext.tsx";

function CuadriculaDeModals() {
    const [modalAbierto, setModalAbierto] = useState<number | null>(null);
    const content = useContent();
    const { language } = useLanguage();

    if (!content) return <div>Cargando...</div>;

    const data = content.Tecnologia.CuadriculaDeModals;
    const modalData = data[language];
    const commonData = data.Common;

    const modals = [
        {
            title: modalData.Sector1.Titulo,
            text: modalData.Sector1.Texto,
            image: commonData.Fondo1,
            moreInfoText: modalData.Sector1.MasInformacion,
            buttonText: modalData.Sector1.TextoOSimboloDeBoton,
            component: (onClose: () => void) => <VentanaModal1 onClose={onClose} />
        },
        {
            title: modalData.Sector2.Titulo,
            text: modalData.Sector2.Texto,
            image: commonData.Fondo2,
            moreInfoText: modalData.Sector2.MasInformacion,
            buttonText: modalData.Sector2.TextoOSimboloDeBoton,
            component: (onClose: () => void) => <VentanaModal2 onClose={onClose} />
        },
        {
            title: modalData.Sector3.Titulo,
            text: modalData.Sector3.Texto,
            image: commonData.Fondo3,
            moreInfoText: modalData.Sector3.MasInformacion,
            buttonText: modalData.Sector3.TextoOSimboloDeBoton,
            component: (onClose: () => void) => <VentanaModal4 onClose={onClose} />
        },
        {
            title: modalData.Sector4.Titulo,
            text: modalData.Sector4.Texto,
            image: commonData.Fondo4,
            moreInfoText: modalData.Sector4.MasInformacion,
            buttonText: modalData.Sector4.TextoOSimboloDeBoton,
            component: (onClose: () => void) => <VentanaModal3 onClose={onClose} />
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {modals.map((modal, index) => (
                    <div key={index} className={styles.box}>
                        <div
                            className={styles.backgroundImage}
                            style={{ backgroundImage: `url(${modal.image})` }}
                        />
                        <div className={styles.content}>
                            <h3 className={styles.title}>{modal.title}</h3>
                            <p className={styles.text}>{modal.text}</p>
                            <div className={styles.bottomRightContainer}>
                                <span className={styles.smallText}>{modal.moreInfoText}</span>
                                <button className={styles.button} onClick={() => setModalAbierto(index)}>{modal.buttonText}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Renderiza el modal actual con la función onClose */}
            {modalAbierto !== null && modals[modalAbierto].component(() => setModalAbierto(null))}
        </div>
    );
}

export default CuadriculaDeModals;
