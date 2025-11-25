import { useContent } from '../common/Componentes/Sistemas/useContent.tsx';
import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';
import TituloYSubtituloGenerico from "../common/Componentes/TituloYSubtituloGenerico.tsx";
import GridDocumentosLegales from "../common/Componentes/GridDocumentosLegales.tsx";
import HeaderServicio from "../common/Componentes/HeaderServicio.tsx";
// import Style from "../common/css/pages/Conocenos.module.css";

function Legal() {
    const content = useContent();
    const { language } = useLanguage();

    if (!content) {
        return <div>Loading...</div>;
    }

    // const { Common, es, en } = content.Conocenos.HeaderGenerico;
    // const currentLang = language === 'es' ? es : en;

    return (
        <>
            <HeaderServicio
                fondo={content.PaginaLegal.header.Contenido.Fondo}
                logo={content.PaginaLegal.header.Contenido.logo}
                imagenLateral={content.PaginaLegal.header.Contenido.ImagenDelCostado}
                titulo={content.PaginaLegal.header[language].Titulo}
                texto={content.PaginaLegal.header[language].Texto}
                EsTrue={true}
            />
            <TituloYSubtituloGenerico
                // className={Style.LineaDeTiempo}
                titulo={content.PaginaLegal.Titulos[language].Titulo1.Titulo}
                subtitulo={content.PaginaLegal.Titulos[language].Titulo1.Subtitulo}
                TituloLegal = {true}
            />
            <GridDocumentosLegales/>
        </>
    );
}

export default Legal;