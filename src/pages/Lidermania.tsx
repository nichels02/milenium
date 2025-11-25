
import { useContent } from '../common/Componentes/Sistemas/useContent.tsx';
import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';
import HeaderGenerico from '../common/Componentes/HeaderGenerico.tsx';
import DonaRotativa2 from '../common/Componentes/DonaRotativa2.tsx';
import TituloTextoEImagen2 from "../common/Componentes/TituloTextoEImagen2.tsx";


import TituloYSubtituloGenerico from "../common/Componentes/TituloYSubtituloGenerico.tsx";
import RedireccionamientoAFacebookTrabajos from "../common/Componentes/RedireccionamientoAFacebookTrabajos.tsx"; // Asegúrate de tener esta ruta bien

function Lidermania() {
    const content = useContent();
    const { language } = useLanguage();

    if (!content) {
        return <div>Loading...</div>;
    }

    const { Common, es, en } = content.Lidermania.HeaderGenerico;
    const currentLang = language === 'es' ? es : en;

    // Obtener el ícono de "no hay trabajos" desde content.Common

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
                onButton2ClickPosicion={"/Lidermania#FacebookTrabajos"}
                onButton2ClickModo={"center"}
                onButton1ClickPosicion={"/Lidermania#DonaRotativa2"}
                onButton1ClickModo={"top"}
            />
            {/*<div style={{ marginBottom: '70px' }}></div>*/}
            <TituloYSubtituloGenerico
                titulo={content.Lidermania.Titulos[language].Titulo1.Titulo}
                subtitulo={content.Lidermania.Titulos[language].Titulo1.Subtitulo}
            />
            {/*<div style={{ marginBottom: '100px' }}></div>*/}
            <DonaRotativa2 />
            {/*<div style={{ marginBottom: '100px' }} id="CarruselDeTrabajos"></div>*/}
            <TituloYSubtituloGenerico
                titulo={content.Lidermania.Titulos[language].Titulo2.Titulo}
                subtitulo={content.Lidermania.Titulos[language].Titulo2.Subtitulo}
            />
            {/*<div style={{ marginBottom: '100px' }}></div>*/}
            <RedireccionamientoAFacebookTrabajos />

            <TituloTextoEImagen2 />
        </>
    );
}

export default Lidermania;
