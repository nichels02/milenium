import Header1 from '../common/Componentes/Header1.tsx';
import Marquee from '../common/Componentes/Marquee.tsx';
import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';
import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
import TituloYSubtituloGenerico from '../common/Componentes/TituloYSubtituloGenerico.tsx';
import ImagenYGrid2 from '../common/Componentes/ImagenYGrid2.tsx';
import TextoGeneral from '../common/Componentes/TextoGeneral.tsx';
import { useContent } from '../common/Componentes/Sistemas/useContent.tsx';
import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';
// import Style from '../common/css/pages/Home.module.css'
// import GridDocumentosLegales from "../common/Componentes/GridDocumentosLegales.tsx";


function Home() {
        const content = useContent();
        const {language} = useLanguage();

        if (!content) {
                return <div>Loading...</div>;
        }

        return (
            <>
                <Header1/>


                <TituloYSubtituloGenerico
                    // className={Style.TituloCardWithExpand}
                    titulo={content.home.Titulos[language].Titulo1.Titulo}
                    subtitulo={content.home.Titulos[language].Titulo1.Subtitulo}
                />
                <CardWithExpand/>


                <TituloYSubtituloGenerico
                    // className={Style.Marquee}
                    titulo={content.home.Titulos[language].Titulo2.Titulo}
                    subtitulo={content.home.Titulos[language].Titulo2.Subtitulo}
                />
                <Marquee/>


                <div
                    // className={Style.TextoGeneral}
                >
                    <TextoGeneral
                        texto="El servicio que brindamos es a través de nuestros colaboradores, *ellos son el centro* de toda nuestra gestión."/>
                </div>


                <TituloYSubtituloGenerico
                    // className={Style.PorcentajeDeNegocio}
                    titulo={content.home.Titulos[language].Titulo3.Titulo}
                    subtitulo={content.home.Titulos[language].Titulo3.Subtitulo}
                />
                <PorcentajeNegocio/>

                {/*<GridDocumentosLegales/>*/}


                <ImagenYGrid2/>
                {/*<div className={Style.DespuesDelImagenYGrid}>*/}

                {/*</div>*/}

            </>
        )
}

export default Home