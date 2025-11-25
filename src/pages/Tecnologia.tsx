import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';
import { useContent } from '../common/Componentes/Sistemas/useContent.tsx';
import FlechaGiro from '../common/Componentes/FlechaGiro.tsx';
import HeaderCambioDeImagen from "../common/Componentes/HeaderCambioDeImagen.tsx";
// import TextImageSelector from "../common/Componentes/TextImageSelector.tsx";
import CardGrid from "../common/Componentes/CardGrid.tsx";
import CuadriculaDeModals from "../common/Componentes/CuadriculaDeModals.tsx";
import TituloYSubtituloGenerico from "../common/Componentes/TituloYSubtituloGenerico.tsx";
import TextoTituloEImagen3 from "../common/Componentes/TextoTituloEImagen3.tsx";
// import Style from "../common/css/pages/Tecnologia.module.css"

// Tipos para las claves
// type BotonKey = 'boton1' | 'boton2' | 'boton3' | 'boton4' | 'boton5';
// type ImageKey = 'ImagenBoton1' | 'ImagenBoton2' | 'ImagenBoton3' | 'ImagenBoton4' | 'ImagenBoton5';

// Tipo mejorado para el selector
// type SelectorContent = {
//     Common: {
//         [key in ImageKey]: string; // Solo claves de imagen como strings
//     } & {
//         imagenALaIzquierda: boolean; // Propiedad separada para el boolean
//     };
//     es: Record<BotonKey, { Titulo: string; Texto: string }>;
//     en: Record<BotonKey, { Titulo: string; Texto: string }>;
// };

function Tecnologia() {
    const { language } = useLanguage();
    const content = useContent();

    if (!content) return null;

    // const botones: BotonKey[] = ['boton1', 'boton2', 'boton3', 'boton4', 'boton5'];
    // const imageKeys: ImageKey[] = ['ImagenBoton1', 'ImagenBoton2', 'ImagenBoton3', 'ImagenBoton4', 'ImagenBoton5'];

    const  datos1= content?.Tecnologia.TextImageSelector;
    const  datos2= content?.Tecnologia.TextImageSelector2;

    return (
        <>
            <HeaderCambioDeImagen />

            <TituloYSubtituloGenerico
                // className={Style.TextImagenSelector}
                titulo={content.Tecnologia.Titulos[language].Titulo1.Titulo}
                subtitulo={content.Tecnologia.Titulos[language].Titulo1.Subtitulo}
            />
            {/* Primer Selector */}



            <TextoTituloEImagen3
                Botones ={[datos1[language].boton1,
                            datos1[language].boton2,
                            datos1[language].boton3,
                            datos1[language].boton4,
                            datos1[language].boton5]}
                imagenes={[datos1?.Common.ImagenBoton1,
                            datos1?.Common.ImagenBoton2,
                            datos1?.Common.ImagenBoton3,
                            datos1?.Common.ImagenBoton4,
                            datos1?.Common.ImagenBoton5]} // Lista de imágenes
                imagenALaIzquierda={datos1?.Common.imagenALaIzquierda}
            />

            <TextoTituloEImagen3
                Botones ={[datos2[language].boton1,
                    datos2[language].boton2,
                    datos2[language].boton3,
                    datos2[language].boton4,
                    datos2[language].boton5]}
                imagenes={[datos2?.Common.ImagenBoton1,
                    datos2?.Common.ImagenBoton2,
                    datos2?.Common.ImagenBoton3,
                    datos2?.Common.ImagenBoton4,
                    datos2?.Common.ImagenBoton5]} // Lista de imágenes
                imagenALaIzquierda={datos2?.Common.imagenALaIzquierda}
            />



            {/*<TextImageSelector*/}
            {/*    items={mapSelectorContent(content.Tecnologia.TextImageSelector)}*/}
            {/*    textosBotones={botones.map(key => (*/}
            {/*        content.Tecnologia.TextImageSelector[language][key].Titulo*/}
            {/*    ))}*/}
            {/*    imagenALaIzquierda={content.Tecnologia.TextImageSelector.Common.imagenALaIzquierda}*/}
            {/*/>*/}

            {/*/!* Segundo Selector *!/*/}
            {/*<TextImageSelector*/}
            {/*    items={mapSelectorContent(content.Tecnologia.TextImageSelector2)}*/}
            {/*    textosBotones={botones.map(key => (*/}
            {/*        content.Tecnologia.TextImageSelector2[language][key].Titulo*/}
            {/*    ))}*/}
            {/*    imagenALaIzquierda={content.Tecnologia.TextImageSelector2.Common.imagenALaIzquierda}*/}
            {/*/>*/}
            <TituloYSubtituloGenerico
                // className={Style.CuadriculaDeModals}
                titulo={content.Tecnologia.Titulos[language].Titulo2.Titulo}
                subtitulo={content.Tecnologia.Titulos[language].Titulo2.Subtitulo}
            />
            <CuadriculaDeModals />
            <TituloYSubtituloGenerico
                // className={Style.CardGrid}
                titulo={content.Tecnologia.Titulos[language].Titulo3.Titulo}
                subtitulo={content.Tecnologia.Titulos[language].Titulo3.Subtitulo}
            />
            <CardGrid />
            <FlechaGiro />
        </>
    );
}

export default Tecnologia;