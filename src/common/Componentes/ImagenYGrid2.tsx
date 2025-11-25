import styles from '../css/ImagenYGrid2.module.css';
import { useContent } from './Sistemas/useContent.tsx';
import { useLanguage } from './Sistemas/LanguageContext.tsx';
import ScrollLink from "./Sistemas/ScrollLink.tsx";
import TituloYSubtituloGenerico from "./TituloYSubtituloGenerico.tsx";
import LazyImage from './Sistemas/LazyImage.tsx';

function ImagenYGrid2() {
    const content = useContent();
    const { language } = useLanguage();

    if (!content) return <p>Cargando...</p>;

    const data = content.home.ImagenYGrid2;
    const textos = data[language];
    const imagenes = data.contenido;

    return (


        <div className={styles.ContenedorInicial}>
            <TituloYSubtituloGenerico
                titulo={content.home.Titulos[language].Titulo4.Titulo}
                subtitulo={content.home.Titulos[language].Titulo4.Subtitulo}
                FondoEsBlanco={true}
            />
            <div id="ImagenYGrid2" className={styles.contenedorPadre}>

                <div className={styles.contenedorHijo}>
                    {/* Imagen principal a la izquierda */}
                    <div className={styles.contenedorIzquierdo}>
                        <LazyImage src={imagenes.imagenPrincipal} alt="Imagen principal" className={styles.imagen}/>
                    </div>

                    {/* Contenido a la derecha */}
                    <div className={styles.contenedorDerecho}>
                        {/* Títulos superiores */}
                        {/*<div className={styles.contenedorSuperior}>*/}
                        {/*    <p className={styles.textoSuperior}>{textos.tituloSuperior}</p>*/}
                        {/*    <p className={styles.textoInferior}>{textos.tituloInferior}</p>*/}
                        {/*</div>*/}

                        {/* Sección de reconocimientos */}
                        <div className={styles.contenedorMedio}>
                            <div className={styles.contenedorMedioIzquierdo}>
                                <div className={styles.contenedorLogoTexto}>
                                    <LazyImage src={imagenes.logo1} alt="Reconocimiento 1" className={styles.logo}/>
                                    <p className={styles.textoLogo}>{textos.reconocimiento1}</p>
                                </div>
                            </div>
                            <div className={styles.contenedorMedioDerecho}>
                                <div className={styles.contenedorLogoTexto}>
                                    <LazyImage src={imagenes.logo2} alt="Reconocimiento 2" className={styles.logo}/>
                                    <p className={styles.textoLogo}>{textos.reconocimiento2}</p>
                                </div>
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className={styles.contenedorInferior}>
                            <div className={styles.contenedorInferiorIzquierdo}>
                                <div className={styles.botonContenedorIzquierdo}>
                                    <LazyImage src={imagenes.boton1ImagenIzquierda} alt="Icono izquierda"
                                         className={styles.imagenBoton}/>
                                    <div className={styles.textosBoton}>
                                        <p className={styles.tituloBotonIzquierdo}>{textos.boton1.titulo}</p>
                                        <p className={styles.subtituloBotonIzquierdo}>{textos.boton1.subtitulo}</p>
                                    </div>
                                    <div className={styles.iconoContenedorDerecho}>
                                        <ScrollLink to="/Lidermania#HeaderGenerico" scrollMode="top"
                                                    className={styles.TextoContenedorBotonD}>
                                            ➔
                                        </ScrollLink>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.contenedorInferiorDerecho}>
                                <div className={styles.botonContenedorDerecho}>
                                    <LazyImage src={imagenes.boton2ImagenIzquierda} alt="Icono izquierda"
                                         className={styles.imagenBoton}/>
                                    <div className={styles.textosBoton}>
                                        <p className={styles.tituloBotonDerecho}>{textos.boton2.titulo}</p>
                                        <p className={styles.subtituloBotonDerecho}>{textos.boton2.subtitulo}</p>
                                    </div>
                                    <div className={styles.iconoContenedorIzquierdo}>
                                        {/*<div >*/}
                                        {/*    ➔*/}
                                        {/*</div>*/}
                                        <ScrollLink to="/Lidermania#CarruselDeTrabajos" scrollMode="top"
                                                    className={styles.TextoContenedorBotonI}>
                                            ➔
                                        </ScrollLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImagenYGrid2;
