import { useState } from "react";
import styles from "../css/VentanaModal1.module.css";

function VentanaModal1() {
    const [isOpen, setIsOpen] = useState(true); // Inicialmente está abierto por defecto

    // Función para cerrar el modal
    const closeModal = () => setIsOpen(false);

    // Función para cerrar el modal al hacer clic fuera del panel
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            {/* Panel */}
            {isOpen && (
                <div className={styles.modalOverlay} onClick={handleOverlayClick}>
                    <div className={styles.modal}>
                        {/* Header del modal */}
                        <div className={styles.modalHeader}>
                            <h5 className={styles.modalTitle}>Título del Panel</h5>
                        </div>

                        {/* Cuerpo del modal */}
                        <div className={styles.modalBody}>
                            Aquí va el contenido del panel.
                        </div>

                        {/* Footer del modal */}
                        <div className={styles.modalFooter}>
                            <button onClick={closeModal} className={styles.closeButton}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default VentanaModal1;
