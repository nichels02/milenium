import { useEffect, useState } from 'react';
import { useContent } from '../common/Componentes/Sistemas/useContent.tsx';
import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';
import HeaderGenerico from '../common/Componentes/HeaderGenerico.tsx';
// import ContenedorScrollNuevo1 from '../common/Componentes/ContenedorScrollNuevo1.tsx';
// import ContenedorScrollNuevo2 from '../common/Componentes/ContenedorScrollNuevo2.tsx';



import ContenedorScrollNuevo5 from '../common/Componentes/ContenedorScrollNuevo5.tsx';
import ContenedorScrollNuevo4 from '../common/Componentes/ContenedorScrollNuevo4.tsx';
// import TituloYSubtituloGenerico from "../common/Componentes/TituloYSubtituloGenerico.tsx";
// import Style from "../common/css/pages/Conocenos.module.css";

function Conocenos() {
    const content = useContent();
    const { language } = useLanguage();

    const [isDesktopXL, setIsDesktopXL] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            setIsDesktopXL(window.innerWidth >= 1120);
        };

        checkWidth(); // Set on load
        window.addEventListener("resize", checkWidth);

        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    if (!content) {
        return <div>Loading...</div>;
    }

    const { Common, es, en } = content.Conocenos.HeaderGenerico;
    const currentLang = language === 'es' ? es : en;

    return (
        <>
            <HeaderGenerico
                backgroundImage={Common.Fondo}
                sideImage={Common.ImagenDelCostado}
                logo={Common.logo}
                title={currentLang.Titulo}
                description={currentLang.Texto}
                button1Text={currentLang.Boton1}
                button2Text={currentLang.Boton2}
                onButton1ClickPosicion={"/Conocenos#LineaDeTiempo"}
                onButton1ClickModo={"top"}
                onButton2ClickPosicion={"/Conocenos#FormularioDeContacto"}
                onButton2ClickModo={"top"}
            />
            {/*<TituloYSubtituloGenerico*/}
            {/*    // className={Style.LineaDeTiempo}*/}
            {/*    titulo={content.Conocenos.Titulos[language].Titulo1.Titulo}*/}
            {/*    subtitulo={content.Conocenos.Titulos[language].Titulo1.Subtitulo}*/}
            {/*/>*/}
            {/*<ContenedorScrollNuevo2 />*/}
            {isDesktopXL ? <ContenedorScrollNuevo4 /> : <ContenedorScrollNuevo5 />}
        </>
    );
}

export default Conocenos;