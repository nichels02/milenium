import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import { ContentProvider } from "./common/Componentes/Sistemas/useContent.tsx";
import { LanguageProvider } from './common/Componentes/Sistemas/LanguageContext';
import { PageLoadProvider, usePageLoad } from './common/Componentes/Sistemas/PageLoadContext';
import { PageLayout } from "./common/Componentes/Sistemas/PageLayout";
import ScrollToTop from "./common/Componentes/Sistemas/ScrollToTop.tsx";

import Home from './pages/Home.tsx';
import Conocenos from './pages/Conocenos.tsx';
import Lidermania from './pages/Lidermania.tsx';
import Seguridad from './pages/Seguridad.tsx';
import Servicio from './pages/Servicio.tsx';
import Tecnologia from './pages/Tecnologia.tsx';

import BarraDeOpciones from './common/Componentes/BarraDeOpciones.tsx';
import BarraDeOpciones2 from './common/Componentes/BarraDeOpciones2.tsx';
import BarraDeOpciones3 from './common/Componentes/BarraDeOpciones3.tsx';
import BarraDeOpcionesRedes from './common/Componentes/BarraDeOpcionesRedes.tsx';
import FormularioDeContacto2 from "./common/Componentes/FormularioDeContacto2.tsx";
import Footer from './common/Componentes/Footer.tsx';

function ContenidoPrincipal() {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [mostrarRestantes, setMostrarRestantes] = useState(false);
    const { isPageLoaded } = usePageLoad();

    const rutaInicialRef = useRef(location.pathname);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 810);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => setMostrarRestantes(true), 300); // espera opcional
        return () => clearTimeout(timeout);
    }, []);

    const rutas: Record<string, React.JSX.Element> = {
        "/": <Home />,
        "/Conocenos": <Conocenos />,
        "/Lidermania": <Lidermania />,
        "/Seguridad": <Seguridad />,
        "/Servicios": <Servicio />,
        "/Tecnologia": <Tecnologia />,
    };

    const componenteActual = rutas[rutaInicialRef.current] ?? <Home />;

    return (
        <>
            <ScrollToTop />

            {!isMobile ? (
                <>
                    <BarraDeOpciones />
                    <BarraDeOpciones2 />
                </>
            ) : (
                <BarraDeOpciones3 />
            )}
            <BarraDeOpcionesRedes />

            {/* Página actual */}
            <Routes>
                <Route path={rutaInicialRef.current} element={<PageLayout>{componenteActual}</PageLayout>} />
            </Routes>

            {/* Después del render inicial, cargar las demás rutas */}
            {mostrarRestantes && (
                <Routes>
                    {Object.entries(rutas).map(([path, component]) => (
                        path !== rutaInicialRef.current && (
                            <Route key={path} path={path} element={<PageLayout>{component}</PageLayout>} />
                        )
                    ))}
                </Routes>
            )}

            {/* Mostrar estos componentes solo si la página terminó de cargar */}
            {isPageLoaded && (
                <>
                    <FormularioDeContacto2 />
                    <Footer />
                </>
            )}
        </>
    );
}

function App() {
    return (
        <ContentProvider>
            <LanguageProvider>
                <PageLoadProvider>
                    <BrowserRouter>
                        <ContenidoPrincipal />
                    </BrowserRouter>
                </PageLoadProvider>
            </LanguageProvider>
        </ContentProvider>
    );
}

export default App;
