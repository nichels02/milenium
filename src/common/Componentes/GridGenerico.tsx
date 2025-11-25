import styles from "../css/GridGenerico.module.css";
import LazyImage from './Sistemas/LazyImage.tsx';

interface IGridItem {
    image: string;
    title: string;
    text: string;
}

interface GridGenericoProps {
    largeImage: string;
    items: IGridItem[];
}

function GridGenerico({ largeImage, items }: GridGenericoProps) {
    return (
        <div className={styles.elContenedorPadre}>
            <div className={styles.container}>
                <div className={styles.gridContainer}>
                    {/* Celda fusionada con imagen grande */}
                    <div className={styles.largeItem}>
                        <LazyImage src={largeImage} alt="Imagen grande" />
                    </div>

                    {/* Celdas normales */}
                    {items.map((item, index) => (
                        <div key={index} className={styles.gridItem}>
                            <LazyImage src={item.image} alt={`Imagen ${index + 1}`} />
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default GridGenerico;
