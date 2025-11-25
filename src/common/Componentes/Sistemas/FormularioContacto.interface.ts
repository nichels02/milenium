export interface FormularioContacto {
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
    intereses: {
        seguridad: boolean;
        servicios: boolean;
        tecnologia: boolean;
    };
    mensaje: string;
    pais: string;
}