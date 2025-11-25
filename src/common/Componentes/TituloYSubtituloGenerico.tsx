import React from 'react';
import styles from '../css/TituloYSubtituloGenerico.module.css';

interface TituloYSubtituloGenericoProps {
    titulo: string;
    subtitulo: string;
    className?: string;
    textoEspecial?: boolean;
    FondoEsBlanco?: boolean;
    TituloLegal?: boolean;
}

const TituloYSubtituloGenerico: React.FC<TituloYSubtituloGenericoProps> = ({
                                                                               titulo,
                                                                               subtitulo,
                                                                               className,
                                                                               textoEspecial = false,
                                                                               FondoEsBlanco = false,
                                                                               TituloLegal = false
                                                                           }) => {
    return (
        <div className={`${styles.contenedor} ${TituloLegal? styles.contenedorLegal : ''} ${className || ''}`}>
            <h1 className={`${styles.titulo} ${TituloLegal? styles.TituloLegal : ''}`}>{titulo}</h1>
            <h2 className={`${styles.subtitulo} 
                            ${textoEspecial ? styles.textoEspecial : ''}  
                            ${FondoEsBlanco ? styles.FondoEsBlanco : ''}
                            ${TituloLegal ? styles.SubtituloLegal : ''}
                            `}
            >
                {subtitulo}
            </h2>
        </div>
    );
};

export default TituloYSubtituloGenerico;
