import { FormularioContacto } from './FormularioContacto.interface';

// Interfaz para la respuesta del servidor
interface ApiResponse {
    success: boolean;
    message: string;
    id?: number;
    error?: string;
}

class ConectarBackend {
    private static instance: ConectarBackend;
    private readonly baseUrl: string;

    private constructor() {
        // Usamos import.meta.env para Vite o variables de entorno de React
        this.baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    }

    public static getInstance(): ConectarBackend {
        if (!ConectarBackend.instance) {
            ConectarBackend.instance = new ConectarBackend();
        }
        return ConectarBackend.instance;
    }

    /**
     * Envía datos validados al backend
     * @param data Datos del formulario ya validados
     * @returns Promise con la respuesta del servidor
     */
    public async enviarDatos(data: FormularioContacto): Promise<ApiResponse> {
        console.log('entro al conectador');
        try {
            // Mapeamos los datos del formulario al formato que espera el backend
            const requestData = {
                nombre: data.nombre,
                apellido: data.apellido,
                correo: data.correo,
                telefono: data.telefono,
                seguridad: data.intereses.seguridad,
                servicios: data.intereses.servicios,
                tecnologia: data.intereses.tecnologia,
                ubicacion: data.pais,
                mensaje: data.mensaje
            };
            console.log('entro al conectador2');
            console.log('URL del backend usada:', this.baseUrl); // 👈 ESTE CONSOLE

            const response = await fetch(`${this.baseUrl}/clientes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
            console.log('entro al conectador3');
            console.log('Respuesta completa:',response);

            if (!response.ok) {
                const errorData = await response.json();
                console.log('Error en la respuesta del servidor:', errorData); // Mostrar la respuesta de error
                throw new Error(errorData.error || `Error HTTP: ${response.status}`);
            }
            console.log('entro al conectador4');
            return await response.json() as ApiResponse;
        } catch (error) {
            console.log('entro al conectador5');
            console.error('Error al conectar con el backend:', error);
            throw new Error(
                error instanceof Error
                    ? error.message
                    : 'Error desconocido al enviar los datos'
            );
        }
    }
}

export default ConectarBackend;