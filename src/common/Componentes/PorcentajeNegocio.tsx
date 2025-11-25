import { useRef, useEffect, useState } from 'react';
import { Chart, ActiveElement, ChartConfiguration } from 'chart.js/auto';
import styles from '../css/PorcentajeNegocio.module.css';
import { useContent } from './Sistemas/useContent.tsx';
import { useLanguage } from './Sistemas/LanguageContext.tsx';
import LazyImage from './Sistemas/LazyImage.tsx';

function PorcentajeNegocio() {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const { language } = useLanguage();
    const data = useContent();

    const porcentajeNegocio = data?.home.porcentajeNegocio;
    const langData = porcentajeNegocio?.[language];
    const defaultImage = porcentajeNegocio?.common?.images?.[0] || '';

    const [hoveredSegment, setHoveredSegment] = useState<number | null>(0);
    const [selectedImage, setSelectedImage] = useState<string>(defaultImage);
    const [spacing, setSpacing] = useState<number>(30);
    const [showOtrosText, setShowOtrosText] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);

    useEffect(() => {
        setSelectedImage(defaultImage);
    }, [defaultImage]);

    useEffect(() => {
        const handleResize = () => {
            setSpacing(window.innerWidth < 768 ? 10 : window.innerWidth < 1024 ? 20 : 30);
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!chartRef.current || !langData) return;
        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;

        const dataChart = {
            labels: langData.items.map((item) => item.label),
            datasets: [{
                label: 'Porcentaje vendido',
                data: langData.items.map((item) => parseFloat(item.percentage)),
                backgroundColor: new Array(langData.items.length).fill('rgba(195,195,195,0.8)'),
                borderColor: new Array(langData.items.length).fill('rgba(204,16,116,0)'),
                borderWidth: 1,
                hoverBackgroundColor: new Array(langData.items.length).fill('rgb(255,0,0)'),
                spacing: spacing,
            }]
        };

        const config: ChartConfiguration<'doughnut', number[], string> = {
            type: 'doughnut',
            data: dataChart,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                circumference: 180,
                rotation: -180,
                layout: { padding: 0 },
                cutout: 70,
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                },
                onHover: (_, chartElement: ActiveElement[]) => {
                    if (chartElement.length > 0) {
                        const segmentIndex = chartElement[0].index;
                        setHoveredSegment(segmentIndex);
                        setShowOtrosText(segmentIndex === 3);
                        setSelectedImage(porcentajeNegocio?.common?.images?.[segmentIndex] || defaultImage);

                        if (isMobile) {
                            localStorage.setItem('lastSegment', segmentIndex.toString());
                        }
                    } else {
                        if (!isMobile) {
                            setSelectedImage(defaultImage);
                            setHoveredSegment(0);
                            setShowOtrosText(false);
                        }
                    }
                }
            }
        };

        const myChart = new Chart(ctx, config);

        if (isMobile) {
            const lastSegment = localStorage.getItem('lastSegment');
            if (lastSegment) {
                setHoveredSegment(parseInt(lastSegment));
            }
        }

        return () => myChart.destroy();
    }, [spacing, isMobile, language, langData]);

    if (!langData) return null;

    return (
        <div id="PorcentajeNegocio" className={styles.contenedorPadre}>
            <div className={styles.contenedorImagenGrande}>
                <LazyImage src={selectedImage} alt="Imagen dinámica" className={styles.imagenGrande} />

                {showOtrosText ? (
                    <div className={styles.contenedorFondo2}></div>
                ) : (
                    <div className={styles.contenedorFondo}></div>
                )}

                <div className={styles.contenedorTextoFijo}>
                    {langData.fixedTexts.map((texto, index) => (
                        <div key={index} className={styles.textoFijo}>{texto}</div>
                    ))}
                </div>

                <div className={styles.contenedorGrafico}>
                    <canvas ref={chartRef}></canvas>
                </div>

                {langData.items.map((item, index) => (
                    <div
                        key={index}
                        className={`
                            ${styles.texto} 
                            ${styles[`texto-${index}`]} 
                            ${hoveredSegment === index ? styles.activo : ''}
                        `}
                    >
                        {item.label}
                    </div>
                ))}

                {showOtrosText && (
                    <div className={styles.textoOtros}>
                        {langData.otrosCategories.map((categoria, index) => (
                            <div key={index} className={styles.itemCategoria}>
                                {categoria}
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default PorcentajeNegocio;
