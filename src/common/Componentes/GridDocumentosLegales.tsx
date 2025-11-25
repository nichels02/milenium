import { useState } from "react";
// import { useContent } from './Sistemas/useContent';
// import { useLanguage } from './Sistemas/LanguageContext';
import styles from "../css/GridDocumentosLegales.module.css";
import LazyImage from './Sistemas/LazyImage.tsx';

import { useLanguage } from './Sistemas/LanguageContext';
import { useContent } from './Sistemas/useContent';


function GridDocumentosLegales() {

    type SeccionTipo = "Politicas" | "Reglamentos" | "Procedimientos";
    const secciones: SeccionTipo[] = ["Politicas", "Reglamentos", "Procedimientos"];


    const { language } = useLanguage();

    const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);
    const seccionActiva: SeccionTipo = secciones[indiceSeleccionado];



    const Documentos = useContent()?.PaginaLegal?.GridDocumentoLegal?.[seccionActiva];





    return (
        <div className={styles.ContenedorPadre}>
            <div className={styles.contenedorCentrado}>
                <div className={styles.ContenedorSecciones}>
                    <button
                        className={`${styles.Seccion} ${indiceSeleccionado === 0 ? styles.active : ''}`}
                        onClick={() => setIndiceSeleccionado(0)}>
                        {useContent()?.PaginaLegal?.GridDocumentoLegal?.Secciones[language].Politicas}
                    </button>
                    <button
                        className={`${styles.Seccion} ${indiceSeleccionado === 1 ? styles.active : ''}`}
                        onClick={() => setIndiceSeleccionado(1)}>
                        {useContent()?.PaginaLegal?.GridDocumentoLegal?.Secciones[language].Reglamentos}
                    </button>
                    <button
                        className={`${styles.Seccion} ${indiceSeleccionado === 2 ? styles.active : ''}`}
                        onClick={() => setIndiceSeleccionado(2)}>
                        {useContent()?.PaginaLegal?.GridDocumentoLegal?.Secciones[language].Procedimientos}
                    </button>
                </div>
                <div className={styles.Separador}/>
                <div className={styles.GridPadre}>

                    {Documentos?.map((doc, index) => (
                        <a
                            key={index}
                            href={doc.Common.Pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.GridObjeto}
                        >
                            <div className={styles.EspacioImagen}>
                                <LazyImage
                                    src={doc.Common.Imagen}
                                    alt={doc[language]?.Nombre || "Documento"}
                                />
                            </div>
                            <div className={styles.EspacioTexto}>
                                <div className={styles.TextoDelObjeto}>
                                    {doc[language]?.Nombre || "Sin nombre"}
                                </div>
                            </div>
                        </a>
                    ))}


                </div>
            </div>
        </div>
    );
}

export default GridDocumentosLegales;
