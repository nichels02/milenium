import { useContent } from "../common/Componentes/Sistemas/useContent.tsx";
import { useLanguage } from "../common/Componentes/Sistemas/LanguageContext.tsx";

import HeaderServicio from "../common/Componentes/HeaderServicio";
import TextoTituloEImagen from "../common/Componentes/TextoTituloEImagen";
import GridGenerico from "../common/Componentes/GridGenerico";
import GridBarajeable from "../common/Componentes/gridBarajeable";
import TituloYSubtituloGenerico from "../common/Componentes/TituloYSubtituloGenerico.tsx";
import FlechaGiro from "../common/Componentes/FlechaGiro.tsx";
// import Style from "../common/css/pages/Servicio.module.css";

function Servicio() {
    const content = useContent();
    const { language } = useLanguage();

    // 🔒 Si no hay datos aún, no renderiza (o podrías poner un loading spinner)
    if (!content) return null;

    const datos1 = content.Servicio.TextoTituloEImagen;
    const datos2 = content.Servicio.TextoTituloEImagen2;
    const datos3 = content.Servicio.GridGenerico;
    const datos4 = content.Servicio.Titulos;

    // 🧩 Preparar items para GridBarajeable
    const datosBarajeable = content.Servicio.GridBarajeable;
    const rawItems = datosBarajeable[language];
    const contenido = datosBarajeable.contenido;

    const barajeableItems = Object.keys(rawItems).map((key, index) => {
        const item = rawItems[key as keyof typeof rawItems];
        const imagePath = contenido[key as keyof typeof contenido];

        return {
            id: index + 1,
            text: item.text,
            image: imagePath,
            showTitle: item.showTitle,
            description: Array.isArray(item.description) ? item.description : [item.description],
        };
    });

    return (
        <>
            <HeaderServicio
                fondo={content.Servicio.header.Contenido.Fondo}
                logo={content.Servicio.header.Contenido.logo}
                imagenLateral={content.Servicio.header.Contenido.ImagenDelCostado}
                titulo={content.Servicio.header[language].Titulo}
                texto={content.Servicio.header[language].Texto}
            />
            {/*<div style={{ marginBottom: '70px' }}></div>*/}

            <TituloYSubtituloGenerico
                // className={Style.GridGenerico}
                titulo={datos4[language].Titulo1.Titulo}
                subtitulo={datos4[language].Titulo1.Subtitulo}
            />

            <GridGenerico
                largeImage={datos3.Contenido.ImagenGrande}
                items={[
                    {
                        image: datos3.Contenido.imagenSector1,
                        title: datos3[language].Sector1.Titulo,
                        text: datos3[language].Sector1.Texto,
                    },
                    {
                        image: datos3.Contenido.imagenSector2,
                        title: datos3[language].Sector2.Titulo,
                        text: datos3[language].Sector2.Texto,
                    },
                    {
                        image: datos3.Contenido.imagenSector3,
                        title: datos3[language].Sector3.Titulo,
                        text: datos3[language].Sector3.Texto,
                    },
                    {
                        image: datos3.Contenido.imagenSector4,
                        title: datos3[language].Sector4.Titulo,
                        text: datos3[language].Sector4.Texto,
                    },
                ]}
            />


            <TextoTituloEImagen
                titulo={datos1[language].Titulo}
                texto={[datos1[language].Texto1,
                        datos1[language].Texto2,
                ]}
                imagenes={[
                    datos1.Contenido.Imagen1,
                    datos1.Contenido.Imagen2,
                ]}
                textosBotones={[
                    datos1[language].botones.Texto1,
                    datos1[language].botones.Texto2,
                ]}
                imagenALaIzquierda={true}
            />

            <TextoTituloEImagen
                titulo={datos2[language].Titulo}
                texto={[
                    datos2[language].Texto1,
                    datos2[language].Texto2,
                    datos2[language].Texto3,
                    datos2[language].Texto4
                ]}
                imagenes={[
                    datos2.Contenido.Imagen1,
                    datos2.Contenido.Imagen2,
                    datos2.Contenido.Imagen3,
                    datos2.Contenido.Imagen4,
                ]}
                textosBotones={[
                    datos2[language].botones.Texto1,
                    datos2[language].botones.Texto2,
                    datos2[language].botones.Texto3,
                    datos2[language].botones.Texto4,
                ]}
                imagenALaIzquierda={false}
            />


            <FlechaGiro />
            <TituloYSubtituloGenerico
                // className={Style.gridBarajeable}
                titulo={datos4[language].Titulo2.Titulo}
                subtitulo={datos4[language].Titulo2.Subtitulo}
            />

            <GridBarajeable items={barajeableItems} />
        </>
    );
}

export default Servicio;
