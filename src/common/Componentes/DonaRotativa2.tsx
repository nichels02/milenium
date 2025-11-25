import { useEffect, useRef, useState } from 'react';
import { Chart, ArcElement, DoughnutController, ChartEvent, ActiveElement } from 'chart.js';
import styles from '../css/DonaRotativa2.module.css';
import { useContent } from './Sistemas/useContent.tsx';
import { useLanguage } from './Sistemas/LanguageContext.tsx';
import LazyImage from './Sistemas/LazyImage.tsx';

// Registrar los componentes necesarios de Chart.js
Chart.register(ArcElement, DoughnutController);

function DonaRotativa2() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null); // Referencia para la instancia del gráfico
    const [targetRotation, setTargetRotation] = useState(0);
    const chartContainerRef = useRef<HTMLDivElement | null>(null);

    const content = useContent();
    const { language } = useLanguage();

    // 🚀 Obtener datos del contexto, con valores por defecto si aún no han cargado
    const segmentsData = content?.Lidermania.DonaRotativa[language] || {
        Grupo1: { Titulo: 'Cargando...', Texto: 'Cargando...' },
        Grupo2: { Titulo: 'Cargando...', Texto: 'Cargando...' },
        Grupo3: { Titulo: 'Cargando...', Texto: 'Cargando...' },
        Grupo4: { Titulo: 'Cargando...', Texto: 'Cargando...' },
    };

    const segmentImages = content?.Lidermania.DonaRotativa.contenido || {
        Imagen1: '',
        Imagen2: '',
        Imagen3: '',
        Imagen4: '',
    };

    const segments = [
        { title: segmentsData.Grupo1.Titulo, text: segmentsData.Grupo1.Texto, image: segmentImages.Imagen1 },
        { title: segmentsData.Grupo2.Titulo, text: segmentsData.Grupo2.Texto, image: segmentImages.Imagen2 },
        { title: segmentsData.Grupo3.Titulo, text: segmentsData.Grupo3.Texto, image: segmentImages.Imagen3 },
        { title: segmentsData.Grupo4.Titulo, text: segmentsData.Grupo4.Texto, image: segmentImages.Imagen4 },
    ];

    // Mapeo de segmentos a ángulos
    const segmentToAngle: Record<number, number> = { 0: 270, 1: 180, 2: 90, 3: 0 };

    // Ángulos iniciales de los títulos
    const labelAngles = [0, 270, 180, 90];

    // Normaliza los ángulos para evitar valores negativos o mayores a 360°
    const normalizeAngle = (angle: number): number => {
        const normalized = ((angle % 360) + 360) % 360;
        return normalized > 180 ? normalized - 360 : normalized;
    };

    // Obtiene el índice del segmento activo basado en la rotación
    const getActiveSegmentIndex = () => {
        return Math.round(((targetRotation % 360) + 360) % 360 / 90) % 4;
    };

    useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;

        // Destruir el gráfico anterior si existe
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        const data = {
            datasets: [{
                data: [25, 25, 25, 25],
                backgroundColor: ['#f4060d', '#36A2EB', '#ff4040', '#006a0b'],
                borderWidth: 1,
                borderColor: ['#f4060d', '#36A2EB', '#ff4040', '#006a0b'],
                spacing: 0
            }]
        };

        const options = {
            rotation: 45,
            circumference: 360,
            cutout: '65%',
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            onClick: (_event: ChartEvent, elements: ActiveElement[]) => {
                if (elements.length > 0) {
                    const clickedSegmentIndex = elements[0].index;
                    const rawTargetAngle = segmentToAngle[clickedSegmentIndex];

                    let angleDifference = normalizeAngle(rawTargetAngle - targetRotation);
                    if (angleDifference === 270) angleDifference = -90;
                    else if (angleDifference === -270) angleDifference = 90;

                    setTargetRotation(targetRotation + angleDifference);
                }
            }
        };

        // Crear nueva instancia del gráfico y guardar la referencia
        chartInstanceRef.current = new Chart(ctx, {
            type: 'doughnut',
            data,
            options
        });

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, [targetRotation]);

    useEffect(() => {
        if (chartContainerRef.current) {
            chartContainerRef.current.style.transform = `rotate(${targetRotation}deg)`;
        }
    }, [targetRotation]);

    return (
        <div id="DonaRotativa2" className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <LazyImage
                    src={segments[getActiveSegmentIndex()].image || 'fallback.jpg'}
                    alt="Fondo dinámico"
                    className={styles.backgroundImage}
                />
            </div>

            <div className={styles.chartWrapper}>
                <div ref={chartContainerRef} className={styles.chartContainer}>
                    <canvas ref={chartRef}></canvas>

                    {/* Títulos sobre cada segmento */}
                    {labelAngles.map((angle, index) => (
                        <div
                            key={index}
                            className={`${styles.segmentLabel} ${styles[`label${index + 1}`]}`}
                            style={{ transform: `rotate(${angle}deg)` }}
                        >
                            {segments[index].title}
                        </div>
                    ))}
                </div>

                {/* Texto central dinámico */}
                <div className={styles.centerText}>
                    {segments[getActiveSegmentIndex()].text}
                </div>
            </div>
        </div>
    );
}

export default DonaRotativa2;