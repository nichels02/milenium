// import LineaDeTiempo from "../../assets/Conocenos/Linea distribucion 2.svg";
import styles from "../css/ContenedorScrollNuevo4.module.css";
import { useContent } from "./Sistemas/useContent.tsx";
import { useLanguage } from "./Sistemas/LanguageContext.tsx";
import LazyImage from './Sistemas/LazyImage.tsx';
import TituloYSubtituloGenerico from "./TituloYSubtituloGenerico.tsx";

function ContenedorScrollNuevo4() {
    const content = useContent();
    const { language } = useLanguage();


    return (
        <div id="LineaDeTiempo" className={styles.ContenedorPadre}>

            <div className={styles.ContenedorDelAncho}>
                <TituloYSubtituloGenerico
                    className={styles.TituloDelComponente}
                    titulo={content?.Conocenos.Titulos[language].Titulo1.Titulo??""}
                    subtitulo={content?.Conocenos.Titulos[language].Titulo1.Subtitulo??""}
                />
                <div className={styles.GridPadre}>

                    <LazyImage
                        src={content?.Conocenos.contenedorScroll.common.LineaDeTiempo}
                        alt="Línea de tiempo"
                        className={styles.LineaDeTiempoImg}
                        draggable={false}
                    />


                    {/*Contenedor Con Imagen*/}
                    <div className={`${styles.ContenedorGeneralConImagen} 
                                     ${styles.Contenedor2}`}>
                        <div className={styles.gridDeContenedorConImagen}>
                            <div className={styles.LaImagen}>
                                <LazyImage
                                    src={content?.Conocenos.contenedorScroll.common.items.Contenedor1.src}
                                    alt={content?.Conocenos.contenedorScroll.common.items.Contenedor1.alt}
                                    className={styles.Imagen}
                                    draggable={false}
                                />
                            </div>

                            <div className={styles.TextoDeContenedorImg}>
                                <p className={styles.Titulo}>{content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor1.Titulo}</p>
                                <p className={styles.Texto}>{content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor1.Texto}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.ContenedorGeneralConImagen} 
                                     ${styles.Contenedor5}`}>
                        <div className={styles.gridDeContenedorConImagen}>
                            <div className={styles.LaImagen}>
                                <LazyImage
                                    src={content?.Conocenos.contenedorScroll.common.items.Contenedor2.src}
                                    alt={content?.Conocenos.contenedorScroll.common.items.Contenedor2.alt}
                                    className={styles.Imagen}
                                    draggable={false}
                                />
                            </div>

                            <div className={styles.TextoDeContenedorImg}>
                                <p className={styles.Titulo}>{content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor2.Titulo}</p>
                                <p className={styles.Texto}>{content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor2.Texto}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.ContenedorGeneralConImagen} 
                                     ${styles.Contenedor6}`}>
                        <div className={styles.gridDeContenedorConImagen}>
                            <div className={styles.LaImagen}>
                                <LazyImage
                                    src={content?.Conocenos.contenedorScroll.common.items.Contenedor3.src}
                                    alt={content?.Conocenos.contenedorScroll.common.items.Contenedor3.alt}
                                    className={styles.Imagen}
                                    draggable={false}
                                />
                            </div>

                            <div className={styles.TextoDeContenedorImg}>
                                <p className={styles.Titulo}>{content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor3.Titulo}</p>
                                <p className={styles.Texto}>{content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor3.Texto}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.ContenedorGeneralConImagen} 
                                     ${styles.Contenedor7}`}>
                        <div className={styles.gridDeContenedorConImagen}>
                            <div className={styles.LaImagen}>
                                <LazyImage
                                    src={content?.Conocenos.contenedorScroll.common.items.Contenedor4.src}
                                    alt={content?.Conocenos.contenedorScroll.common.items.Contenedor4.alt}
                                    className={styles.Imagen}
                                    draggable={false}
                                />
                            </div>

                            <div className={styles.TextoDeContenedorImg}>
                                <p className={styles.Titulo}>{content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor4.Titulo}</p>
                                <p className={styles.Texto}>{content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor4.Texto}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.ContenedorGeneralConImagen} 
                                     ${styles.Contenedor10}`}>
                        <div className={styles.gridDeContenedorConImagen}>
                            <div className={styles.LaImagen}>
                                <LazyImage
                                    src={content?.Conocenos.contenedorScroll.common.items.Contenedor5.src}
                                    alt={content?.Conocenos.contenedorScroll.common.items.Contenedor5.alt}
                                    className={styles.Imagen}
                                    draggable={false}
                                />
                            </div>

                            <div className={styles.TextoDeContenedorImg}>
                                <p className={styles.Titulo}>{content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor5.Titulo}</p>
                                <p className={styles.Texto}>{content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor5.Texto}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.ContenedorGeneralConImagen} 
                                     ${styles.Contenedor12}`}>
                        <div className={styles.gridDeContenedorConImagen}>
                            <div className={styles.LaImagen}>
                                <LazyImage
                                    src={content?.Conocenos.contenedorScroll.common.items.Contenedor6.src}
                                    alt={content?.Conocenos.contenedorScroll.common.items.Contenedor6.alt}
                                    className={styles.Imagen}
                                    draggable={false}
                                />
                            </div>

                            <div className={styles.TextoDeContenedorImg}>
                                <p className={styles.Titulo}>{content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor6.Titulo}</p>
                                <p className={styles.Texto}>{content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor6.Texto}</p>
                            </div>
                        </div>
                    </div>









                    {/*contenedores normales*/}
                    <div className={`${styles.ContenedorGeneralNormal} 
                                     ${styles.Contenedor2}`}>
                        <p className={styles.Texto}>
                            {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor1.Texto}
                        </p>
                    </div>
                    <div className={`${styles.ContenedorGeneralNormal} 
                                     ${styles.Contenedor3}`}>
                        <p className={styles.Texto}>
                            {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor2.Texto}
                        </p>
                    </div>
                    <div className={`${styles.ContenedorGeneralNormal} 
                                     ${styles.Contenedor4}`}>
                        <p className={styles.Texto}>
                            {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor3.Texto}
                        </p>
                    </div>
                    <div className={`${styles.ContenedorGeneralNormal} 
                                     ${styles.Contenedor6}`}>
                        <p className={styles.Texto}>
                            {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor4.Texto}
                        </p>
                    </div>
                    <div className={`${styles.ContenedorGeneralNormal} 
                                     ${styles.Contenedor8}`}>
                        <p className={styles.Texto}>
                            {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor5.Texto}
                        </p>
                    </div>
                    <div className={`${styles.ContenedorGeneralNormal} 
                                     ${styles.Contenedor9}`}>
                        <p className={styles.Texto}>
                            {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor6.Texto}
                        </p>
                    </div>
                    <div className={`${styles.ContenedorGeneralNormal} 
                                     ${styles.Contenedor11}`}>
                        <p className={styles.Texto}>
                            {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor7.Texto}
                        </p>
                    </div>








                    {/*Puntos*/}
                    <div className={`${styles.contenedorPunto} 
                                     ${styles.Contenedor2}`}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Línea de tiempo"
                            className={styles.ImagenPunto}
                            draggable={false}
                        />
                        <p className={styles.NumeroPunto}>
                            {content?.Conocenos.contenedorScroll[language].Puntos.Contenedor1.fecha}
                        </p>
                    </div>
                    <div className={`${styles.contenedorPunto} 
                                     ${styles.Contenedor3}`}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Línea de tiempo"
                            className={styles.ImagenPunto}
                            draggable={false}
                        />
                        <p className={styles.NumeroPunto}>
                            {content?.Conocenos.contenedorScroll[language].Puntos.Contenedor2.fecha}
                        </p>
                    </div>
                    <div className={`${styles.contenedorPunto} 
                                     ${styles.Contenedor4}`}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Línea de tiempo"
                            className={styles.ImagenPunto}
                            draggable={false}
                        />
                        <p className={styles.NumeroPunto}>
                            {content?.Conocenos.contenedorScroll[language].Puntos.Contenedor3.fecha}
                        </p>
                    </div>
                    <div className={`${styles.contenedorPunto} 
                                     ${styles.Contenedor5}`}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Línea de tiempo"
                            className={styles.ImagenPunto}
                            draggable={false}
                        />
                        <p className={styles.NumeroPunto}>
                            {content?.Conocenos.contenedorScroll[language].Puntos.Contenedor4.fecha}
                        </p>
                    </div>
                    <div className={`${styles.contenedorPunto} 
                                     ${styles.Contenedor6}`}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Línea de tiempo"
                            className={styles.ImagenPunto}
                            draggable={false}
                        />
                        <p className={styles.NumeroPunto}>
                            {content?.Conocenos.contenedorScroll[language].Puntos.Contenedor5.fecha}
                        </p>
                    </div>
                    <div className={`${styles.contenedorPunto} 
                                     ${styles.Contenedor7}`}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Línea de tiempo"
                            className={styles.ImagenPunto}
                            draggable={false}
                        />
                        <p className={styles.NumeroPunto}>
                            {content?.Conocenos.contenedorScroll[language].Puntos.Contenedor6.fecha}
                        </p>
                    </div>
                    <div className={`${styles.contenedorPunto} 
                                     ${styles.Contenedor8}`}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Línea de tiempo"
                            className={styles.ImagenPunto}
                            draggable={false}
                        />
                        <p className={styles.NumeroPunto}>
                            {content?.Conocenos.contenedorScroll[language].Puntos.Contenedor7.fecha}
                        </p>
                    </div>
                    <div className={`${styles.contenedorPunto} 
                                     ${styles.Contenedor9}`}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Línea de tiempo"
                            className={styles.ImagenPunto}
                            draggable={false}
                        />
                        <p className={styles.NumeroPunto}>
                            {content?.Conocenos.contenedorScroll[language].Puntos.Contenedor8.fecha}
                        </p>
                    </div>
                    <div className={`${styles.contenedorPunto} 
                                     ${styles.Contenedor10}`}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Línea de tiempo"
                            className={styles.ImagenPunto}
                            draggable={false}
                        />
                        <p className={styles.NumeroPunto}>
                            {content?.Conocenos.contenedorScroll[language].Puntos.Contenedor9.fecha}
                        </p>
                    </div>
                    <div className={`${styles.contenedorPunto} 
                                     ${styles.Contenedor11}`}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Línea de tiempo"
                            className={styles.ImagenPunto}
                            draggable={false}
                        />
                        <p className={styles.NumeroPunto}>
                            {content?.Conocenos.contenedorScroll[language].Puntos.Contenedor10.fecha}
                        </p>
                    </div>
                    <div className={`${styles.contenedorPunto} 
                                     ${styles.Contenedor12}`}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Línea de tiempo"
                            className={styles.ImagenPunto}
                            draggable={false}
                        />
                        <p className={styles.NumeroPunto}>
                            {content?.Conocenos.contenedorScroll[language].Puntos.Contenedor11.fecha}
                        </p>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default ContenedorScrollNuevo4;
