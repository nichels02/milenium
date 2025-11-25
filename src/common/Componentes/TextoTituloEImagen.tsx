import { useState } from 'react'; // Importamos solo useState
import styles from '../css/TextoTituloEImagen.module.css';
import LazyImage from './Sistemas/LazyImage.tsx';

// Definimos una interfaz para las props
interface TextoTituloEImagenProps {
    titulo: string;
    texto: string[];
    imagenes: string[]; // Lista de imágenes
    textosBotones: string[]; // Textos personalizados para los botones
    imagenALaIzquierda: boolean;
}

function TextoTituloEImagen({ titulo, texto, imagenes, textosBotones, imagenALaIzquierda }: TextoTituloEImagenProps) {
    // Estado para manejar la imagen actual
    const [imagenActual, setImagenActual] = useState(0);

    // Función para generar clases dinámicas
    const generarClase = (base: string, variante: number) => {
        return `${styles[base]} ${styles[`${base}-${variante}`]}`;
    };

    // Definimos la variante según la posición de la imagen
    const variante = imagenALaIzquierda ? 1 : 2;

    return (
        <div className={styles.contenedor}>
            <div className={styles.contenido}>
                {/* Ordenamos los elementos según el valor de imagenALaIzquierda */}
                {imagenALaIzquierda ? (
                    <>
                        <div className={styles.imagenContainer}>
                            <LazyImage src={imagenes[imagenActual]} alt="Imagen" className={styles.imagen} />
                        </div>
                        <div className={generarClase('textoContainer', variante)}>
                            <h2 className={generarClase('titulo', variante)}>{titulo}</h2>
                            <p className={generarClase('texto', variante)}>{texto[imagenActual]}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={generarClase('textoContainer', variante)}>
                            <h2 className={generarClase('titulo', variante)}>{titulo}</h2>
                            <p className={generarClase('texto', variante)}>{texto[imagenActual]}</p>
                        </div>
                        <div className={styles.imagenContainer}>
                            <LazyImage src={imagenes[imagenActual]} alt="Imagen" className={styles.imagen} />
                        </div>
                    </>
                )}
            </div>

            {/* Botones para cambiar la imagen (ahora superpuestos ligeramente) */}
            <div className={styles.botonesContainer}>
                {textosBotones.map((textoBoton, index) => (
                    <button
                        key={index}
                        onClick={() => setImagenActual(index)}
                        className={`${styles.boton} ${imagenActual === index ? styles.active : ''}`}
                    >
                        {textoBoton}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TextoTituloEImagen;