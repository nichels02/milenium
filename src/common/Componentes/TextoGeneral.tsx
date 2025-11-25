import React from 'react';
import styles from '../css/TextoGeneral.module.css';

interface TextoGeneralProps {
    texto: string; // Solo necesitas una propiedad para el texto completo
}

const TextoGeneral: React.FC<TextoGeneralProps> = ({ texto }) => {
    // Dividir el texto en partes: lo normal y lo resaltado
    const partes = texto.split(/(\*.*?\*)/g); // Usamos una expresión regular para encontrar texto entre asteriscos

    return (
        <div className={styles.textContainer}>
            <p className={styles.texto}>
                {partes.map((parte, index) =>
                    parte.startsWith('*') && parte.endsWith('*') ? (
                        <span key={index} className={styles.resaltado}>
                            {parte.slice(1, -1)} {/* Eliminamos los asteriscos */}
                        </span>
                    ) : (
                        parte
                    )
                )}
            </p>
        </div>
    );
};

export default TextoGeneral;