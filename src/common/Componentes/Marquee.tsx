import styles from "../css/Marquee.module.css";
import { useContent } from "./Sistemas/useContent.tsx";
import LazyImage from './Sistemas/LazyImage.tsx';

function Marquee() {
    const content = useContent();

    // Obtener items desde el contenido
    const generalItems = content?.home.Marquee.common.items ?? [];

    if (!content) return <p className={styles.loading}>Cargando...</p>;

    return (
        <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeInner}>
                    {[...generalItems, ...generalItems].map((item, index) => (
                        <div
                            key={index}
                            className={styles.marqueeItemContainer}
                        >
                            <LazyImage
                                className={
                                    item.EsDoble
                                        ? styles.marqueeItemGrande
                                        : styles.marqueeItem
                                }
                                src={item.src}
                                alt={item.alt}
                            />
                            <p className={styles.subtitle1}>{item.Nombre}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Marquee;
