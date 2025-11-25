// import { useEffect, useState, useRef } from 'react';
// import styles from '../css/ContenedorScroll.module.css';
// import { useContent } from './Sistemas/useContent.tsx';
// import { useLanguage } from './Sistemas/LanguageContext.tsx';
//
// interface Point {
//     x: number;
//     y: number;
//     year: string;
//     isRight: boolean;
// }
//
// interface ContenedorPersonalizado {
//     x: number;
//     y: number;
//     texto: string;
// }
//
// interface ContenedorConImagen {
//     x: number;
//     y: number;
//     titulo: string;
//     texto: string;
//     imagenUrl: string;
// }
//
// function ContenedorScroll() {
//     const [scrollPercentage, setScrollPercentage] = useState(0);
//     const containerRef = useRef<HTMLDivElement>(null);
//     const content = useContent();
//     const { language } = useLanguage();
//
//     // Obtener datos del contexto
//     const puntosData = content?.Conocenos.contenedorScroll[language].Puntos;
//     const contenedoresSimpleData = content?.Conocenos.contenedorScroll[language].ContenedorSimple;
//     const contenedoresComplejoData = content?.Conocenos.contenedorScroll[language].ContenedorComplejo;
//     const commonImages = content?.Conocenos.contenedorScroll.common.items;
//     const imagenPunto = content?.Conocenos.contenedorScroll.common.imagenDePunto || "src/assets/alfiler.png";
//
//
//
//     // Puntos
//     const PposicionesX = {
//         Contenedor1: [48500, 48500, 48500, 48500, 48500, 48500],
//         Contenedor2: [43100, 43100, 43100, 43100, 43100, 43100],
//         Contenedor3: [39200, 39200, 39200, 39200, 39200, 39200],
//         Contenedor4: [38300, 38300, 38300, 38300, 38300, 38300],
//         Contenedor5: [34000, 34000, 34000, 34000, 34000, 34000],
//         Contenedor6: [27700, 27700, 27700, 27700, 27700, 27700],
//         Contenedor7: [24500, 24500, 24500, 24500, 24500, 24500],
//         Contenedor8: [22400, 22400, 22400, 22400, 22400, 22400],
//         Contenedor9: [16800, 16800, 16800, 16800, 16800, 16800],
//         Contenedor10: [13200, 13200, 13200, 13200, 13200, 13200],
//         Contenedor11: [8400, 8400, 8400, 8400, 8400, 8400]
//     };
//
//     const PposicionesY = {
//         Contenedor1: [7000, 7000, 7000, 7000, 7000, 7000],
//         Contenedor2: [12500, 12500, 12500, 12500, 12500, 12500],
//         Contenedor3: [11500, 11500, 11500, 11500, 11500, 11500],
//         Contenedor4: [18000, 18000, 18000, 18000, 18000, 18000],
//         Contenedor5: [22500, 22500, 22500, 22500, 22500, 22500],
//         Contenedor6: [25500, 25500, 25500, 25500, 25500, 25500],
//         Contenedor7: [32800, 32800, 32800, 32800, 32800, 32800],
//         Contenedor8: [35000, 35000, 35000, 35000, 35000, 35000],
//         Contenedor9: [41000, 41000, 41000, 41000, 41000, 41000],
//         Contenedor10: [45000, 45000, 45000, 45000, 45000, 45000],
//         Contenedor11: [50000, 50000, 50000, 50000, 50000, 50000]
//     };
//
//
//
//
//
//     //contenedores simples
//     const CSposicionesX = {
//         Contenedor1: [47000, 47000, 47000, 47000, 47000, 47000],
//         Contenedor2: [43200, 43200, 43200, 43200, 43200, 43200],
//         Contenedor3: [40300, 40300, 40300, 40300, 40300, 40300],
//         Contenedor4: [35700, 35700, 35700, 35700, 35700, 35700],
//         Contenedor5: [26400, 26400, 26400, 26400, 26400, 26400],
//         Contenedor6: [19800, 19800, 19800, 19800, 19800, 19800],
//         Contenedor7: [11000, 11000, 11000, 11000, 11000, 11000]
//     };
//
//     const CSposicionesY = {
//         Contenedor1: [10000, 10000, 10000, 10000, 10000, 10000],
//         Contenedor2: [14500, 14500, 14500, 14500, 14500, 14500],
//         Contenedor3: [9000, 9000, 9000, 9000, 9000, 9000],
//         Contenedor4: [22000, 22000, 22000, 22000, 22000, 22000],
//         Contenedor5: [32000, 32000, 32000, 32000, 32000, 32000],
//         Contenedor6: [33000, 33000, 33000, 33000, 33000, 33000],
//         Contenedor7: [43000, 43000, 43000, 43000, 43000, 43000]
//     };
//
//
//
//
//     //ContenedorConImagen
//     const CIposicionesX = {
//         Contenedor1: [44000, 44000, 44000, 44000, 44000, 44000],
//         Contenedor2: [35000, 35000, 35000, 35000, 35000, 35000],
//         Contenedor3: [30000, 30000, 30000, 30000, 30000, 30000],
//         Contenedor4: [24000, 24000, 24000, 24000, 24000, 24000],
//         Contenedor5: [18400, 18400, 18400, 18400, 18400, 18400],
//         Contenedor6: [11000, 11000, 11000, 11000, 11000, 11000],
//     };
//
//     const CIposicionesY = {
//         Contenedor1: [4000, 4000, 4000, 4000, 4000, 4000],
//         Contenedor2: [14500, 14500, 14500, 14500, 14500, 14500],
//         Contenedor3: [21000, 21000, 21000, 21000, 21000, 21000],
//         Contenedor4: [26000, 26000, 26000, 26000, 26000, 26000],
//         Contenedor5: [41000, 41000, 41000, 41000, 41000, 41000],
//         Contenedor6: [49000, 49000, 49000, 49000, 49000, 49000],
//     };
//
//
//
//
//
//
//
// // Función para elegir índice según ancho de pantalla:
//     function indicePorAncho(ancho: number): number {
//         if (ancho < 600) return 0;
//         if (ancho < 900) return 1;
//         if (ancho < 1200) return 2;
//         if (ancho < 1500) return 3;
//         if (ancho < 1800) return 4;
//         return 5;
//     }
//
//     const [points, setPoints] = useState<Point[]>([]);
//
//     useEffect(() => {
//         const calcularPuntos = () => {
//             const indice = indicePorAncho(window.innerWidth);
//
//             // const nuevosPuntos: Point[] = [
//             //     { x: PposicionesX.Contenedor1[indice], y: PposicionesY.Contenedor1[indice], year: puntosData?.Contenedor1?.fecha || "2000", isRight: puntosData?.Contenedor1?.EstaALaDerecha ?? true },
//             //     { x: PposicionesX.Contenedor2[indice], y: PposicionesY.Contenedor2[indice], year: puntosData?.Contenedor2?.fecha || "2001", isRight: puntosData?.Contenedor2?.EstaALaDerecha ?? false },
//             //     { x: PposicionesX.Contenedor3[indice], y: PposicionesY.Contenedor3[indice], year: puntosData?.Contenedor3?.fecha || "2002", isRight: puntosData?.Contenedor3?.EstaALaDerecha ?? true },
//             //     { x: PposicionesX.Contenedor4[indice], y: PposicionesY.Contenedor4[indice], year: puntosData?.Contenedor4?.fecha || "2003", isRight: puntosData?.Contenedor4?.EstaALaDerecha ?? false },
//             //     { x: PposicionesX.Contenedor5[indice], y: PposicionesY.Contenedor5[indice], year: puntosData?.Contenedor5?.fecha || "2004", isRight: puntosData?.Contenedor5?.EstaALaDerecha ?? true },
//             //     { x: PposicionesX.Contenedor6[indice], y: PposicionesY.Contenedor6[indice], year: puntosData?.Contenedor6?.fecha || "2005", isRight: puntosData?.Contenedor6?.EstaALaDerecha ?? false },
//             //     { x: PposicionesX.Contenedor7[indice], y: PposicionesY.Contenedor7[indice], year: puntosData?.Contenedor7?.fecha || "2006", isRight: puntosData?.Contenedor7?.EstaALaDerecha ?? true },
//             //     { x: PposicionesX.Contenedor8[indice], y: PposicionesY.Contenedor8[indice], year: puntosData?.Contenedor8?.fecha || "2007", isRight: puntosData?.Contenedor8?.EstaALaDerecha ?? false },
//             //     { x: PposicionesX.Contenedor9[indice], y: PposicionesY.Contenedor9[indice], year: puntosData?.Contenedor9?.fecha || "2008", isRight: puntosData?.Contenedor9?.EstaALaDerecha ?? true },
//             //     { x: PposicionesX.Contenedor10[indice], y: PposicionesY.Contenedor10[indice], year: puntosData?.Contenedor10?.fecha || "2009", isRight: puntosData?.Contenedor10?.EstaALaDerecha ?? false },
//             //     { x: PposicionesX.Contenedor11[indice], y: PposicionesY.Contenedor11[indice], year: puntosData?.Contenedor11?.fecha || "2010", isRight: puntosData?.Contenedor11?.EstaALaDerecha ?? false },
//             // ];
//
//             setPoints(nuevosPuntos);
//         };
//
//         // Ejecutar al montar
//         calcularPuntos();
//
//         // Agregar listener de resize
//         window.addEventListener("resize", calcularPuntos);
//
//         // Limpiar al desmontar
//         return () => {
//             window.removeEventListener("resize", calcularPuntos);
//         };
//     }, []);
//
//
//
//     const [contenedoresPersonalizados, setContenedoresPersonalizados] = useState<ContenedorPersonalizado[]>([]);
//
//     useEffect(() => {
//         const actualizarContenedores = () => {
//
//             const indice = indicePorAncho(window.innerWidth);
//
//             const nuevosContenedores: ContenedorPersonalizado[] = [
//                 { x: CSposicionesX.Contenedor1[indice], y: CSposicionesY.Contenedor1[indice], texto: contenedoresSimpleData?.Contenedor1?.Texto || 'Registro de nuestra empresa de seguridad bajo el nombre de "J&V Resguardo".' },
//                 { x: CSposicionesX.Contenedor2[indice], y: CSposicionesY.Contenedor2[indice], texto: contenedoresSimpleData?.Contenedor2?.Texto || "Texto 2" },
//                 { x: CSposicionesX.Contenedor3[indice], y: CSposicionesY.Contenedor3[indice], texto: contenedoresSimpleData?.Contenedor3?.Texto || "Texto 3" },
//                 { x: CSposicionesX.Contenedor4[indice], y: CSposicionesY.Contenedor4[indice], texto: contenedoresSimpleData?.Contenedor4?.Texto || "Texto 4" },
//                 { x: CSposicionesX.Contenedor5[indice], y: CSposicionesY.Contenedor5[indice], texto: contenedoresSimpleData?.Contenedor5?.Texto || "Texto 5" },
//                 { x: CSposicionesX.Contenedor6[indice], y: CSposicionesY.Contenedor6[indice], texto: contenedoresSimpleData?.Contenedor6?.Texto || "Texto 6" },
//                 { x: CSposicionesX.Contenedor7[indice], y: CSposicionesY.Contenedor7[indice], texto: contenedoresSimpleData?.Contenedor7?.Texto || "Texto 7" },
//             ];
//
//             setContenedoresPersonalizados(nuevosContenedores);
//         };
//
//         actualizarContenedores();
//
//         window.addEventListener('resize', actualizarContenedores);
//
//         return () => {
//             window.removeEventListener('resize', actualizarContenedores);
//         };
//     }, []);
//
//
//
//
//     // 🟡 Contenedores complejos con datos del JSON
//     const [contenedoresConImagen, setContenedoresConImagen] = useState<ContenedorConImagen[]>([]);
//
//     useEffect(() => {
//         const actualizarContenedoresConImagen = () => {
//
//             const indice = indicePorAncho(window.innerWidth);
//             // Por ahora pongo los valores fijos que tienes
//             const nuevosContenedores: ContenedorConImagen[] = [
//                 {
//                     x: CIposicionesX.Contenedor1[indice],
//                     y: CIposicionesY.Contenedor1[indice],
//                     titulo: contenedoresComplejoData?.Contenedor1?.Titulo || "Nuestro nacimiento",
//                     texto: contenedoresComplejoData?.Contenedor1?.Texto || "Desde el inicio, hemos liderado con pasión y propósito, marcando la diferencia en el sector y en nuestras vidas.",
//                     imagenUrl: commonImages?.Contenedor1?.src || "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg"
//                 },
//                 {
//                     x: CIposicionesX.Contenedor2[indice],
//                     y: CIposicionesY.Contenedor2[indice],
//                     titulo: contenedoresComplejoData?.Contenedor2?.Titulo || "Título 2",
//                     texto: contenedoresComplejoData?.Contenedor2?.Texto || "Descripción del segundo punto con imagen.",
//                     imagenUrl: commonImages?.Contenedor2?.src || "src/assets/ejemplo2.png"
//                 },
//                 {
//                     x: CIposicionesX.Contenedor3[indice],
//                     y: CIposicionesY.Contenedor3[indice],
//                     titulo: contenedoresComplejoData?.Contenedor3?.Titulo || "Título 3",
//                     texto: contenedoresComplejoData?.Contenedor3?.Texto || "Texto complementario para el tercer punto visual.",
//                     imagenUrl: commonImages?.Contenedor3?.src || "src/assets/ejemplo3.png"
//                 },
//                 {
//                     x: CIposicionesX.Contenedor4[indice],
//                     y: CIposicionesY.Contenedor4[indice],
//                     titulo: contenedoresComplejoData?.Contenedor4?.Titulo || "Título 4",
//                     texto: contenedoresComplejoData?.Contenedor4?.Texto || "Breve explicación o historia del cuarto punto.",
//                     imagenUrl: commonImages?.Contenedor4?.src || "src/assets/ejemplo4.png"
//                 },
//                 {
//                     x: CIposicionesX.Contenedor5[indice],
//                     y: CIposicionesY.Contenedor5[indice],
//                     titulo: contenedoresComplejoData?.Contenedor5?.Titulo || "Título 5",
//                     texto: contenedoresComplejoData?.Contenedor5?.Texto || "Este contenido describe el quinto evento.",
//                     imagenUrl: commonImages?.Contenedor5?.src || "src/assets/ejemplo5.png"
//                 },
//                 {
//                     x: CIposicionesX.Contenedor6[indice],
//                     y: CIposicionesY.Contenedor6[indice],
//                     titulo: contenedoresComplejoData?.Contenedor6?.Titulo || "Título 6",
//                     texto: contenedoresComplejoData?.Contenedor6?.Texto || "Una pequeña historia o anécdota final.",
//                     imagenUrl: commonImages?.Contenedor6?.src || "src/assets/ejemplo6.png"
//                 },
//             ];
//
//             setContenedoresConImagen(nuevosContenedores);
//         };
//
//         // Inicializa al montar
//         actualizarContenedoresConImagen();
//
//         // Agrega listener resize
//         window.addEventListener("resize", actualizarContenedoresConImagen);
//
//         return () => {
//             window.removeEventListener("resize", actualizarContenedoresConImagen);
//         };
//     }, []);
//
//
//     useEffect(() => {
//         const handleScroll = () => {
//             if (!containerRef.current) return;
//
//             const { offsetTop, offsetHeight } = containerRef.current;
//             const scrollY = window.scrollY;
//             const relativeScroll = scrollY - offsetTop;
//
//             const rawPercentage = (relativeScroll / offsetHeight) * 100;
//             let adjustedPercentage = rawPercentage * 1.25;
//             adjustedPercentage = Math.max(0, Math.min(110, adjustedPercentage));
//
//             setScrollPercentage(adjustedPercentage);
//         };
//
//         // Ejecutar una vez al montar (por si ya hay scroll o tamaño raro)
//         handleScroll();
//
//         window.addEventListener('scroll', handleScroll);
//         window.addEventListener('resize', handleScroll);
//
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             window.removeEventListener('resize', handleScroll);
//         };
//     }, []);
//
//
//     const internalContainerStyle: React.CSSProperties = {
//         transform: `translateX(${scrollPercentage * 4}vw)`,
//     };
//
//     return (
//         <div ref={containerRef} className={styles.contenedorScroll}>
//             <div className={styles.contenedorInterno} style={internalContainerStyle}>
//
//                 <svg
//                     className={styles.svgScroll}
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 46057.076 54670.84"
//                     preserveAspectRatio="none"
//                 >
//                     <defs>
//                         <style>{`
//                             .line {
//                                 stroke: #a0a3a3;
//                                 stroke-width: 400;
//                                 stroke-miterlimit: 22.93;
//                                 fill: none;
//                             }
//                         `}</style>
//                     </defs>
//                     <g id="Capa_1" transform="matrix(1.72221, 0, 0, 1.72221, -23824.8, -14455.3)">
//                         <path className="line" d="M45746 7476c-839 998 -5049 6009 -5889 7007 -415 494 -234 803 390 1271 488 365 886 703 384 1301 -485 577 -982 68 -2245 -823 -1429 -1009 -1883 -1346 -2323 -795 -387 485 -104 682 505 1210 528 457 589 1046 333 1351 -460 547 -3301 3928 -3761 4475 -360 429 -367 996 164 1346 639 419 1078 669 627 1206 -525 625 -1055 307 -2310 -827 -1182 -1069 -1711 -1407 -2195 -831 -526 626 -63 1150 331 1450 580 441 668 887 302 1323 -706 840 -3170 3772 -3759 4473 -345 411 -277 1024 231 1353 507 328 944 742 545 1217 -535 637 -1390 134 -2419 -616 -1393 -1016 -1995 -1152 -2485 -569 -510 607 -52 1056 475 1346 452 248 733 741 401 1136l-8502 10117"/>
//                     </g>
//                 </svg>
//
//                 {/* 🔴 Puntos con alfiler */}
//                 {points.map((point, index) => (
//                     <div
//                         key={index}
//                         className={styles.puntoContainer}
//                         style={{
//                             left: `${(point.x / 46057.076) * 100}%`,
//                             top: `${(point.y / 54670.84) * 100}%`,
//                         }}
//                     >
//                         <LazyImage
//                             src={imagenPunto}
//                             alt="Punto"
//                             className={styles.punto}
//                             // style={{ width: '100px', height: '100px' }}
//                         />
//                         <div className={`${styles.titulo} ${point.isRight ? styles.tituloDerecha : styles.tituloIzquierda}`}>
//                             {point.year}
//                         </div>
//                     </div>
//                 ))}
//
//                 {/* 🔵 Contenedores simples */}
//                 {contenedoresPersonalizados.map((box, index) => (
//                     <div
//                         key={`caja-${index}`}
//                         className={styles.cajaCustom}
//                         style={{
//                             left: `${(box.x / 46057.076) * 100}%`,
//                             top: `${(box.y / 54670.84) * 100}%`,
//                         }}
//                     >
//                         {box.texto}
//                     </div>
//                 ))}
//
//                 {/* 🟡 Contenedores complejos con estilos personalizados */}
//                 {contenedoresConImagen.map((item, index) => (
//                     <div
//                         key={`caja-imagen-${index}`}
//                         className={`${styles.cajaConImagen} ${styles[`contenedor${index + 1}`]}`}
//                         style={{
//                             left: `${(item.x / 46057.076) * 100}%`,
//                             top: `${(item.y / 54670.84) * 100}%`,
//                         }}
//                     >
//                         <div className={styles.columnaTexto}>
//                             <h3 className={styles.tituloCaja}>{item.titulo}</h3>
//                             <p className={styles.textoCaja}>{item.texto}</p>
//                         </div>
//                         <div className={styles.columnaImagen}>
//                             <LazyImage src={item.imagenUrl} alt={`Imagen ${index + 1}`} className={styles.imagenCaja} />
//                         </div>
//                     </div>
//                 ))}
//
//             </div>
//         </div>
//     );
// }
//
// export default ContenedorScroll;