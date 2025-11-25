import styles from '../css/BarraDeOpcionesRedes.module.css';
import { useContent } from './Sistemas/useContent.tsx'; // Asegúrate de importar el contexto correctamente
import LazyImage from './Sistemas/LazyImage.tsx'; // o ajusta el path si está en otro lado

function BarraDeOpcionesRedes() {
    const data = useContent();

    if (!data) return null; // Si los datos aún no están cargados, no mostrar nada

    return (
        <div className={styles.barra}>
            <a href={data.home.BarraDeRedes.Item1.Link} target="_blank" rel="noopener noreferrer" className={styles.icono}>
                <LazyImage src={data.home.BarraDeRedes.Item1.imagen} alt="Facebook" />
            </a>
            <a href={data.home.BarraDeRedes.Item2.Link} target="_blank" rel="noopener noreferrer" className={styles.icono}>
                <LazyImage src={data.home.BarraDeRedes.Item2.imagen} alt="TikTok" />
            </a>
            <a href={data.home.BarraDeRedes.Item3.Link} target="_blank" rel="noopener noreferrer" className={styles.icono}>
                <LazyImage src={data.home.BarraDeRedes.Item3.imagen} alt="LinkedIn" />
            </a>
            <a href={data.home.BarraDeRedes.Item4.Link} target="_blank" rel="noopener noreferrer" className={styles.icono}>
                <LazyImage src={data.home.BarraDeRedes.Item4.imagen} alt="YouTube" />
            </a>
        </div>
    );
}

export default BarraDeOpcionesRedes;
