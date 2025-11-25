export interface JSONDatosTrabajos {
    Common: {
        IconoUbicacion: string;
    };
    filtrosDisponibles: {
        Ubicacion: string[];
        NivelDeEstudios: string[];
        ExperienciaMinimaMeses: string[];
        DisponibilidadLaboral: string[];
    };
    listaDeTrabajos: Trabajo[];
}

export interface Trabajo {
    es: IdiomaTrabajo;
    en: IdiomaTrabajo;
    Common: {
        Logo: string;
        Link: string;
    };
    Filtros: {
        Ubicacion: string;
        NivelDeEstudios: string;
        ExperienciaMinimaMeses: string;
        DisponibilidadLaboral: string;
    };
}

export interface IdiomaTrabajo {
    Titulo: string;
    Ubicacion: string;
    Descripcion: string[];
    MasInformacion: string;
}
