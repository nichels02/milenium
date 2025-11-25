import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../css/CarruselDeTrabajos.module.css';
import { Trabajo } from './Sistemas/trabajos.interface';
import { useLanguage } from './Sistemas/LanguageContext.tsx';
import { useContent } from './Sistemas/useContent.tsx';
import LazyImage from './Sistemas/LazyImage.tsx';

interface CarruselDeTrabajosProps {
    trabajos: Trabajo[];
    iconoNoHayTrabajos: string; // <- añadimos esta prop
}
/*•*/
function CarruselDeTrabajos({ trabajos, iconoNoHayTrabajos }: CarruselDeTrabajosProps) {
    const { language } = useLanguage();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const getItemsPerView = () => {
        if (windowWidth < 768) return 1;
        if (windowWidth < 1024) return 2;
        return 3;
    };


    const TamanoMinimoDeCambio= windowWidth > 660;
    const itemsPerView = getItemsPerView();
    const cardWidth = TamanoMinimoDeCambio? Math.min(512, windowWidth * 0.8 / itemsPerView) :
                                                    Math.min(512, windowWidth * 0.6 / itemsPerView);
    const gap = 20;
    const containerPadding = Math.max(20, (windowWidth - (itemsPerView * cardWidth + (itemsPerView - 1) * gap)) / 2);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavigation = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex(prev => {
            const increment = newDirection * itemsPerView;
            const newIndex = prev + increment;

            if (newIndex < 0) return trabajos.length - itemsPerView;
            if (newIndex >= trabajos.length) return 0;
            return newIndex;
        });
    };

    const itemVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? (cardWidth + gap) * itemsPerView : -(cardWidth + gap) * itemsPerView,
            opacity: 0,
            transition: { duration: 0.3 }
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 }
        },
        exit: (direction: number) => ({
            x: direction < 0 ? (cardWidth + gap) * itemsPerView : -(cardWidth + gap) * itemsPerView,
            opacity: 0,
            transition: { duration: 0.4 }
        })
    };

    const TarjetaTrabajo = ({ item, custom }: { item: Trabajo; custom: number }) => {
        const datos = item[language];
        return (
            <motion.div
                className={styles.card}
                style={{ width: `${cardWidth}px` }}
                custom={custom}
                variants={itemVariants}
                initial="enter"
                animate="center"
                exit="exit"
                whileHover={{
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)",
                }}
            >
                <h3 className={styles.title}>{datos.Titulo}</h3>
                <div className={styles.location}>
                    <LazyImage
                        src={useContent()?.Lidermania.CarruselDeTrabajos.Common.IconoDeUbicacion}
                        alt="Ubicación"
                        className={styles.locationIcon}
                    />
                    <span>{datos.Ubicacion}</span>
                </div>
                <ul className={styles.description}>
                    {datos.Descripcion.map((desc, i) => (
                        <li key={i} className={styles.descriptionItem}>{desc}</li>
                    ))}
                </ul>
                <a
                    href={item.Common.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    {datos.MasInformacion}
                    <LazyImage
                        src={item.Common.Logo}
                        alt="Más información"
                        className={styles.linkIcon}
                    />
                </a>
            </motion.div>
        );
    };

    if (trabajos.length === 0) {
        return (
            <div className={styles.container}>
                <LazyImage
                    src={iconoNoHayTrabajos}
                    alt="No hay trabajos"
                    className={styles.noJobsIcon}
                />
            </div>
        );
    }

    const mostrarFlechas = trabajos.length >= itemsPerView;

    return (
        <div className={styles.container}>
            <div
                className={styles.navContainer}
                style={{ padding: `0 ${containerPadding}px` }}
            >
                {mostrarFlechas && (
                    <button className={styles.navButton} onClick={() => handleNavigation(-1)}>◀</button>
                )}

                <div className={styles.cardsWrapper}>
                    <AnimatePresence mode="wait" custom={direction}>
                        <div className={styles.cardsContainer} key={currentIndex}>
                            {trabajos.slice(currentIndex, currentIndex + itemsPerView).map((item, index) => (
                                <TarjetaTrabajo
                                    key={`${index}-${currentIndex}`}
                                    item={item}
                                    custom={direction}
                                />
                            ))}
                        </div>
                    </AnimatePresence>
                </div>

                {mostrarFlechas && (
                    <button className={styles.navButton} onClick={() => handleNavigation(1)}>▶</button>
                )}
            </div>
        </div>
    );
}

export default CarruselDeTrabajos;
