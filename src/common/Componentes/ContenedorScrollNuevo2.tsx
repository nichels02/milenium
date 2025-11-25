import {useEffect, useRef, useState} from "react";
// import LineaDeTiempo from "../../assets/Conocenos/Linea distribucion 2.svg";
import styles from "../css/ContenedorScrollNuevo2.module.css";
import { useContent } from "./Sistemas/useContent.tsx";
import { useLanguage } from "./Sistemas/LanguageContext.tsx";
import LazyImage from './Sistemas/LazyImage.tsx';

function ContenedorScrollNuevo2() {
    const content = useContent();
    const { language } = useLanguage();
    const contenedorRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftStart, setScrollLeftStart] = useState(0);
    const velocityRef = useRef(0);
    const lastClientXRef = useRef(0);
    const lastTimestampRef = useRef(0);
    const animationFrameRef = useRef<number | null>(null);

    const onDragStart = (clientX: number) => {
        if (!contenedorRef.current) return;
        setIsDragging(true);
        setStartX(clientX);
        setScrollLeftStart(contenedorRef.current.scrollLeft);
        lastClientXRef.current = clientX;
        lastTimestampRef.current = performance.now();
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
    };

    const onDragMove = (clientX: number) => {
        if (!isDragging || !contenedorRef.current) return;
        const now = performance.now();
        const walk = clientX - startX;
        contenedorRef.current.scrollLeft = scrollLeftStart - walk;

        const deltaX = clientX - lastClientXRef.current;
        const deltaTime = now - lastTimestampRef.current;
        velocityRef.current = deltaX / deltaTime;

        lastClientXRef.current = clientX;
        lastTimestampRef.current = now;
    };

    const endDrag = () => {
        setIsDragging(false);
        applyInertia();
    };

    const applyInertia = () => {
        if (!contenedorRef.current) return;

        const decay = 0.89;
        const minVelocity = 0.01;

        const step = () => {
            if (!contenedorRef.current) return;

            contenedorRef.current.scrollLeft -= velocityRef.current * 20;

            velocityRef.current *= decay;

            if (Math.abs(velocityRef.current) > minVelocity) {
                animationFrameRef.current = requestAnimationFrame(step);
            } else {
                animationFrameRef.current = null;
            }
        };

        animationFrameRef.current = requestAnimationFrame(step);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        onDragStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        onDragMove(e.clientX);
    };

    const handleMouseUp = endDrag;
    const handleMouseLeave = endDrag;

    const handleTouchStart = (e: React.TouchEvent) => {
        onDragStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        onDragMove(e.touches[0].clientX);
    };

    const handleTouchEnd = endDrag;







    const [scrolling, setScrolling] = useState(false);
    const scrollSpeed = 3; // Ajustá la velocidad
    const scrollDirection = useRef<"left" | "right" | null>(null);


    const scrollingRef = useRef(scrolling);

    useEffect(() => {
        scrollingRef.current = scrolling;
    }, [scrolling]);



    useEffect(() => {
        if (!scrolling || !contenedorRef.current || !scrollDirection.current) return;

        const step = () => {
            if (!contenedorRef.current) return;

            contenedorRef.current.scrollLeft += scrollDirection.current === "right"
                ? scrollSpeed
                : -scrollSpeed;

            if (scrollingRef.current) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [scrolling]);















    return (
        <div className={styles.ElContenedor}>
            <button
                className={`${styles.botones} ${styles.iz}`}
                onMouseDown={() => {
                    scrollDirection.current = "left";
                    setScrolling(true);
                }}
                onMouseUp={() => setScrolling(false)}
                onMouseLeave={() => setScrolling(false)}
            >
                <img src={content?.Conocenos.contenedorScroll.common.FlechaIz} alt={""} className={styles.botonImagen}/>
            </button>

            <button
                className={`${styles.botones} ${styles.de}`}
                onMouseDown={() => {
                    scrollDirection.current = "right";
                    setScrolling(true);
                }}
                onMouseUp={() => setScrolling(false)}
                onMouseLeave={() => setScrolling(false)}
            >
                <img src={content?.Conocenos.contenedorScroll.common.FlechaDe} alt={""} className={styles.botonImagen}/>
            </button>
            <div id="LineaDeTiempo"
                 ref={contenedorRef}
                 className={styles.contenedorExterno}
                 onMouseDown={handleMouseDown}
                 onMouseMove={handleMouseMove}
                 onMouseUp={handleMouseUp}
                 onMouseLeave={handleMouseLeave}
                 onTouchStart={handleTouchStart}
                 onTouchMove={handleTouchMove}
                 onTouchEnd={handleTouchEnd}
                 style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >














                <div className={styles.contenedorInterno}>
                    <LazyImage
                        src={content?.Conocenos.contenedorScroll.common.LineaDeTiempo}
                        alt="Línea de tiempo"
                        className={styles.lineaDeTiempoImg}
                        draggable={false}
                    />
                    <div className={styles.Posicion1}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Punto 1"
                            className={styles.EstiloGeneralPunto}
                            draggable={false}
                        />
                        <span className={styles.TextoDePunto}>
                        {content?.Conocenos.contenedorScroll[language].Puntos.Contenedor1.fecha}
                    </span>
                        <div className={styles.EstiloGeneralConTextoEImagen}>
                            <h3 className={styles.Titulo}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor1.Titulo}
                            </h3>
                            <p className={styles.texto}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor1.Texto}
                            </p>
                            <LazyImage
                                src={content?.Conocenos.contenedorScroll.common.items.Contenedor1.src}
                                alt={content?.Conocenos.contenedorScroll.common.items.Contenedor1.alt}
                                className={styles.Imagen}
                                draggable={false}
                            />
                        </div>

                        <div className={`${styles.EstiloGeneralConTexto} ${styles.EstiloGeneralConTextoInvertido}`}>
                            <p className={styles.texto}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor1.Texto}
                            </p>
                        </div>

                    </div>
                    <div className={styles.Posicion2}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Punto 2"
                            className={styles.EstiloGeneralPunto}
                            draggable={false}
                        />
                        <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor2.fecha}</span>
                        <div className={`${styles.EstiloGeneralConTexto} ${styles.EstiloGeneralConTextoInvertido}`}>
                            <p className={styles.texto}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor2.Texto}
                            </p>
                        </div>
                    </div>
                    <div className={styles.Posicion3}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Punto 3"
                            className={styles.EstiloGeneralPunto}
                            draggable={false}
                        />
                        <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor3.fecha}</span>
                        <div className={`${styles.EstiloGeneralConTexto} ${styles.EstiloGeneralConTextoInvertido}`}>
                            <p className={styles.texto}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor3.Texto}
                            </p>
                        </div>
                    </div>
                    <div className={styles.Posicion4}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Punto 4"
                            className={styles.EstiloGeneralPunto}
                            draggable={false}
                        />
                        <div className={styles.EstiloGeneralConTextoEImagen}>
                            <h3 className={styles.Titulo}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor2.Titulo}
                            </h3>
                            <p className={styles.texto}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor2.Texto}
                            </p>
                            <LazyImage
                                src={content?.Conocenos.contenedorScroll.common.items.Contenedor2.src}
                                alt={content?.Conocenos.contenedorScroll.common.items.Contenedor2.alt}
                                className={styles.Imagen}
                                draggable={false}
                            />
                        </div>
                        <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor4.fecha}</span>
                    </div>
                    <div className={styles.Posicion5}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Punto 5"
                            className={styles.EstiloGeneralPunto}
                            draggable={false}
                        />
                        <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor5.fecha}</span>
                        <div className={styles.EstiloGeneralConTextoEImagen}>
                            <h3 className={styles.Titulo}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor3.Titulo}
                            </h3>
                            <p className={styles.texto}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor3.Texto}
                            </p>
                            <LazyImage
                                src={content?.Conocenos.contenedorScroll.common.items.Contenedor3.src}
                                alt={content?.Conocenos.contenedorScroll.common.items.Contenedor3.alt}
                                className={styles.Imagen}
                                draggable={false}
                            />
                        </div>
                        <div className={`${styles.EstiloGeneralConTexto} ${styles.EstiloGeneralConTextoInvertido}`}>
                            <p className={styles.texto}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor4.Texto}
                            </p>
                        </div>
                    </div>
                    <div className={styles.Posicion6}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Punto 6"
                            className={styles.EstiloGeneralPunto}
                            draggable={false}
                        />
                        <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor6.fecha}</span>
                        <div className={styles.EstiloGeneralConTextoEImagen}>
                            <h3 className={styles.Titulo}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor4.Titulo}
                            </h3>
                            <p className={styles.texto}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor4.Texto}
                            </p>
                            <LazyImage
                                src={content?.Conocenos.contenedorScroll.common.items.Contenedor4.src}
                                alt={content?.Conocenos.contenedorScroll.common.items.Contenedor4.alt}
                                className={styles.Imagen}
                                draggable={false}
                            />
                        </div>
                    </div>
                    <div className={styles.Posicion7}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Punto 7"
                            className={styles.EstiloGeneralPunto}
                            draggable={false}
                        />
                        <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor7.fecha}</span>
                        <div className={`${styles.EstiloGeneralConTexto} ${styles.EstiloGeneralConTextoInvertido}`}>
                            <p className={styles.texto}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor5.Texto}
                            </p>
                        </div>
                    </div>
                    <div className={styles.Posicion8}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Punto 8"
                            className={styles.EstiloGeneralPunto}
                            draggable={false}
                        />
                        <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor8.fecha}</span>
                        <div className={`${styles.EstiloGeneralConTexto} ${styles.EstiloGeneralConTextoInvertido}`}>
                            <p className={styles.texto}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor6.Texto}
                            </p>
                        </div>
                    </div>
                    <div className={styles.Posicion9}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Punto 9"
                            className={styles.EstiloGeneralPunto}
                            draggable={false}
                        />
                        <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor9.fecha}</span>
                        <div className={styles.EstiloGeneralConTextoEImagen}>
                            <h3 className={styles.Titulo}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor5.Titulo}
                            </h3>
                            <p className={styles.texto}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor5.Texto}
                            </p>
                            <LazyImage
                                src={content?.Conocenos.contenedorScroll.common.items.Contenedor5.src}
                                alt={content?.Conocenos.contenedorScroll.common.items.Contenedor5.alt}
                                className={styles.Imagen}
                                draggable={false}
                            />
                        </div>
                    </div>
                    <div className={styles.Posicion10}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Punto 10"
                            className={styles.EstiloGeneralPunto}
                            draggable={false}
                        />
                        <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor10.fecha}</span>
                        <div className={`${styles.EstiloGeneralConTexto} ${styles.EstiloGeneralConTextoInvertido}`}>
                            <p className={styles.texto}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorSimple.Contenedor7.Texto}
                            </p>
                        </div>
                    </div>
                    <div className={styles.Posicion11}>
                        <LazyImage
                            src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                            alt="Punto 11"
                            className={styles.EstiloGeneralPunto}
                            draggable={false}
                        />
                        <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor11.fecha}</span>
                        <div className={styles.EstiloGeneralConTextoEImagen}>
                            <h3 className={styles.Titulo}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor6.Titulo}
                            </h3>
                            <p className={styles.texto}>
                                {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor6.Texto}
                            </p>
                            <LazyImage
                                src={content?.Conocenos.contenedorScroll.common.items.Contenedor6.src}
                                alt={content?.Conocenos.contenedorScroll.common.items.Contenedor6.alt}
                                className={styles.Imagen}
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContenedorScrollNuevo2;
