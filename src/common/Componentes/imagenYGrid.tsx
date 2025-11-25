import styles from '../css/imagenYGrid.module.css'; // Importa el archivo CSS único
import LazyImage from './Sistemas/LazyImage.tsx';

function imagenYGrid() {
    return (
        <div className={styles.parentContainer}>
            {/* Contenedor que agrupa la imagen y los contenedores verticales */}
            <div className={styles.contentContainer}>
                {/* Sección de la imagen (logo) */}
                <div className={styles.imageSection}>
                    <LazyImage src="https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg" alt="Logo" className={styles.image} />
                </div>

                {/* Contenedor vertical para los elementos */}
                <div className={styles.verticalContainer}>
                    {/* Contenedor fusionado (1 y 2) */}
                    <div className={`${styles.mergedContainer} ${styles.commonStyle}`}>
                        1 y 2
                    </div>

                    {/* Contenedor horizontal para los elementos 3 y 4 */}
                    <div className={styles.horizontalContainer}>
                        {/* Cuadro 3 con imagen y texto */}
                        <div className={`${styles.gridItemWithContent} ${styles.commonStyle}`}>
                            <LazyImage src="https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg" alt="Imagen 3" />
                            <p>Texto 3</p>
                        </div>

                        {/* Cuadro 4 con imagen y texto */}
                        <div className={`${styles.gridItemWithContent} ${styles.commonStyle}`}>
                            <LazyImage src="https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg" alt="Imagen 4" />
                            <p>Texto 4</p>
                        </div>
                    </div>

                    {/* Contenedor horizontal para los elementos 5 y 6 */}
                    <div className={styles.horizontalContainer}>
                        {/* Cuadro 5 con estilo específico */}
                        <div className={`${styles.gridItem5} ${styles.commonStyle}`}>5</div>

                        {/* Cuadro 6 con estilo específico */}
                        <div className={`${styles.gridItem6} ${styles.commonStyle}`}>6</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default imagenYGrid;