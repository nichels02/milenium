import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useContent } from "./Sistemas/useContent";
import styles from "../css/CarruselNoticias.module.css";
import LazyImage from './Sistemas/LazyImage.tsx';

function CarruselNoticias() {
    const content = useContent();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, slidesToScroll: 1 });

    // Navegación
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    if (!content || !content.home) return <p>Cargando...</p>;

    const Contenido = content.home.CarruselNoticias.Cartas; // Asumo que es un array de cartas

    return (
        <div className={styles.carruselWrapper}>
            {/* Botón izquierdo */}
            <button className={styles.navButton} style={{ left: 50 }} onClick={scrollPrev}>
                {"<"}
            </button>

            {/* Botón derecho */}
            <button className={styles.navButton} style={{ right: 50 }} onClick={scrollNext}>
                {">"}
            </button>

            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {Contenido.map((item, index) => (
                        <div key={index} className={styles.emblaSlide}>
                            <div className={styles.card}>
                                {/* Imagen con botón */}
                                <div className={styles.cardImageWrapper}>
                                    <LazyImage src={item.imagen} alt={item.Titulo} className={styles.cardImage} />
                                    <button className={styles.cardButton}>Leer más</button>
                                </div>
                                {/* Título y mini texto */}
                                <div className={styles.cardText}>
                                    <h3>{item.Titulo}</h3>
                                    <p>{item.Texto}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CarruselNoticias;
