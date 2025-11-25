import { useEffect, useState } from 'react';
//import EspacioVacio from '../common/Componentes/EspacioVacio.tsx';
import FlechaGiro from '../common/Componentes/FlechaGiro.tsx';
//import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
//import DonaRotativa2 from '../common/Componentes/DonaRotativa2.tsx';
//import TextoTituloEImagen from '../common/Componentes/TextoTituloEImagen.tsx';
import GridGenerico from "../common/Componentes/GridGenerico.tsx";
import GridBarajeable from "../common/Componentes/gridBarajeable.tsx";
import HeaderFotosCarrusel from "../common/Componentes/HeaderFotosCarrusel.tsx";
// import Style from "../common/css/pages/Seguridad.module.css";









import { useContent } from '../common/Componentes/Sistemas/useContent.tsx'; // Importa el hook del contexto
import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';
import TituloYSubtituloGenerico from "../common/Componentes/TituloYSubtituloGenerico.tsx";

interface LocalData {
    Sector1: { Titulo: string; Texto: string };
    Sector2: { Titulo: string; Texto: string };
    Sector3: { Titulo: string; Texto: string };
    Sector4: { Titulo: string; Texto: string };
}


/*
            <TextoTituloEImagen
                titulo="Título de ejemplo"
                texto="Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título."
                imagenes={imagenes}
                textosBotones={textosBotones}
                imagenALaIzquierda={false}
            />
            */


function Seguridad() {
    // Obtén los datos del contexto
    const data = useContent();
    const { language } = useLanguage();
    const [localData, setLocalData] = useState<LocalData | null>(null);











    useEffect(() => {
        if (data && language) {
            // Asegúrate de que los datos existen antes de usarlos
            setLocalData(data.Seguridad.GridGenerico[language] ?? null);
        }
    }, [data, language]);

    // Si no hay datos o no está cargado el contexto, no renderices el componente
    if (!localData || !data) return <div>Cargando...</div>;




    // Crear los items que necesita GridBarajeable
    const gridBarajeableRaw = data.Seguridad.GridBarajeable[language];
    const gridContenido = data.Seguridad.GridBarajeable.contenido;

    const barajeableItems = Object.keys(gridBarajeableRaw).map((key, index) => {
        const item = gridBarajeableRaw[key as keyof typeof gridBarajeableRaw];
        const imagePath = gridContenido[key as keyof typeof gridContenido];

        return {
            id: index + 1,
            text: item.text,
            image: imagePath,
            showTitle: item.showTitle,
            description: Array.isArray(item.description) ? item.description : [item.description],
        };
    });
    /*
    const imagenes = [
        "https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg",
        "https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg",
        "https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg",
    ];
    const textosBotones = ["Imagen 1", "Imagen 2", "Imagen 3"];
    */
    return (
        <>
            <HeaderFotosCarrusel />
            <TituloYSubtituloGenerico
                // className={Style.GridGenerico}
                titulo={data.Seguridad.Titulos[language].Titulo1.Titulo}
                subtitulo={data.Seguridad.Titulos[language].Titulo1.Subtitulo}
                // className={}
            />
            <GridGenerico
                largeImage={data.Seguridad.GridGenerico.Contenido.ImagenGrande}
                items={[
                    {
                        image: data.Seguridad.GridGenerico.Contenido.imagenSector1,
                        title: localData.Sector1.Titulo,
                        text: localData.Sector1.Texto,
                    },
                    {
                        image: data.Seguridad.GridGenerico.Contenido.imagenSector2,
                        title: localData.Sector2.Titulo,
                        text: localData.Sector2.Texto,
                    },
                    {
                        image: data.Seguridad.GridGenerico.Contenido.imagenSector3,
                        title: localData.Sector3.Titulo,
                        text: localData.Sector3.Texto,
                    },
                    {
                        image: data.Seguridad.GridGenerico.Contenido.imagenSector4,
                        title: localData.Sector4.Titulo,
                        text: localData.Sector4.Texto,
                    },
                ]}
            />
            <FlechaGiro />
            <TituloYSubtituloGenerico
                // className={Style.CardBarajeable}
                titulo={data.Seguridad.Titulos[language].Titulo2.Titulo}
                subtitulo={data.Seguridad.Titulos[language].Titulo2.Subtitulo}
            />
            <div style={{ marginBottom: '70px' }}></div>
            <GridBarajeable items={barajeableItems} />
        </>
    );
}

export default Seguridad;
