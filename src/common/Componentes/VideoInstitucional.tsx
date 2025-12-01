import { useState } from "react";
import { useContent } from "./Sistemas/useContent";
import styles from "../css/VideoInstitucional.module.css";
import LazyImage from './Sistemas/LazyImage.tsx';

function VideoInstitucional() {
    // 👇 Hook SIEMPRE arriba
    const content = useContent();
    const [showVideo, setShowVideo] = useState(false);

    if (!content || !content.home) return <p>Cargando...</p>;

    const Contenido = content.home.VideoInstitucional;

    return (
        <div className={styles.contenedorPrincipal}>
            <div className={styles.ContenedorPadre}>
                {/* Si NO se hace clic → imagen */}
                {!showVideo ? (
                    <div className={styles.ContenedorImagen} onClick={() => setShowVideo(true)}>
                        <LazyImage
                            src={Contenido.Common.Imagen}
                            alt="VideoInstitucional"
                            className={styles.Imagen}
                        />
                    </div>
                ) : (
                    // Si se hace clic → video
                    <video
                        src={"https://dl.dropboxusercontent.com/scl/fi/7qnclvv69icea0m7hiol6/10-23-MILLENIUM_Institucional_v5.mp4?rlkey=bx5q6jxj5ei95ehub7jua23r1"}
                        controls
                        autoPlay
                        className={styles.video}
                    />
                )}
            </div>
        </div>
    );
}

export default VideoInstitucional;
