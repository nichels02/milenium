import { useRef, useEffect, useState } from 'react';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from '../css/DonaRotativa.module.css';

// Registra los componentes necesarios de Chart.js
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

function DonaRotativa() {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const [rotationAngle, setRotationAngle] = useState(0); // Estado para el ángulo de rotación
    const chartInstance = useRef<Chart | null>(null); // Referencia para almacenar la instancia del gráfico

    // Función para obtener el ángulo más cercano
    const calculateClosestRotation = (clickedIndex: number) => {
        const targetAngles = [0, 90, 180, 270]; // Ángulos objetivo para cada sector
        const targetAngle = targetAngles[clickedIndex]; // Obtiene el ángulo objetivo del sector clicado

        // Diferencia angular
        let difference = targetAngle - (rotationAngle % 360);
        if (difference > 180) difference -= 360;
        if (difference < -180) difference += 360;

        // Calcula el nuevo ángulo de rotación sumando la diferencia
        const newAngle = rotationAngle + difference;

        return newAngle;
    };

    useEffect(() => {
        // Verifica que chartRef.current no sea null
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            if (ctx) {
                // Si ya existe una instancia del gráfico, la destruimos antes de crear una nueva
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                // Creamos una nueva instancia del gráfico
                chartInstance.current = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Sector 1', 'Sector 2', 'Sector 3', 'Sector 4'],
                        datasets: [{
                            data: [90, 90, 90, 90],
                            backgroundColor: [
                                '#FF6384', // Rojo
                                '#36A2EB', // Azul
                                '#FFCE56', // Amarillo
                                '#4BC0C0'  // Verde
                            ],
                            hoverOffset: 4,
                        }]
                    },
                    options: {
                        rotation: 0,
                        responsive: true,
                        animation: {
                            duration: 0,
                        },
                        plugins: {
                            legend: {
                                display: false,
                            },
                            tooltip: {
                                enabled: false,
                            }
                        },
                        onClick: (_, elements) => {
                            if (elements.length > 0) {
                                const clickedIndex = elements[0].index;
                                const newRotationAngle = calculateClosestRotation(clickedIndex);
                                setRotationAngle(newRotationAngle);
                            }
                        }
                    }
                });
            }
        }
    }, []);

    return (
        <div className={styles.container}>
            <div
                className={styles.rotatingCanvas}
                style={{
                    transform: `rotate(${rotationAngle}deg)`,
                    transition: 'transform 0.5s ease-in-out'
                }}
            >
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
}

export default DonaRotativa;

