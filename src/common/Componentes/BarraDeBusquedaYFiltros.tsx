import { useEffect, useState } from "react";
import styles from "../css/BarraDeBusquedaYFiltros.module.css";
import { JSONDatosTrabajos, Trabajo } from "./Sistemas/trabajos.interface.ts"; // Ajusta la ruta si es necesario
import { useContent } from './Sistemas/useContent.tsx';
import LazyImage from './Sistemas/LazyImage.tsx'; // o ajusta el path si está en otro lado


interface FiltrosDisponibles {
    [clave: string]: string[];
}

interface Props {
    onBuscar: (trabajosFiltrados: Trabajo[]) => void;
}

function BarraDeBusquedaYFiltros({ onBuscar }: Props) {
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [filtros, setFiltros] = useState<FiltrosDisponibles>({});
    const [valoresSeleccionados, setValoresSeleccionados] = useState<
        Partial<Record<string, string>>
    >({});
    const [textoBusqueda, setTextoBusqueda] = useState("");
    const [todosLosTrabajos, setTodosLosTrabajos] = useState<Trabajo[]>([]);

    useEffect(() => {
        fetch("/DataTrabajos.json")
            .then((res) => res.json())
            .then((data: JSONDatosTrabajos) => {
                setFiltros(data.filtrosDisponibles);
                setTodosLosTrabajos(data.listaDeTrabajos);
                onBuscar(data.listaDeTrabajos); // Mostrar todos al inicio
            })
            .catch((error) => {
                console.error("Error al cargar datos:", error);
            });
    }, [onBuscar]);

    const toggleFiltros = () => {
        setMostrarFiltros((prev) => !prev);
    };

    const handleCambioFiltro = (titulo: string, valor: string) => {
        setValoresSeleccionados((prev) => ({
            ...prev,
            [titulo]: valor,
        }));
    };

    const handleBuscar = () => {
        const trabajosFiltrados = todosLosTrabajos.filter((trabajo) => {
            // Filtros por campo exacto
            const coincideConFiltros = Object.entries(valoresSeleccionados).every(
                ([clave, valor]) => trabajo.Filtros[clave as keyof typeof trabajo.Filtros] === valor
            );

            // Búsqueda textual por título (en español)
            const coincideConBusqueda =
                trabajo.es.Titulo.toLowerCase().includes(textoBusqueda.toLowerCase());

            return coincideConFiltros && coincideConBusqueda;
        });

        onBuscar(trabajosFiltrados);
    };

    return (
        <div className={styles.contenedorPrincipal}>
            <div className={styles.filaSuperior}>
                <div className={styles.barra}>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className={styles.input}
                        value={textoBusqueda}
                        onChange={(e) => setTextoBusqueda(e.target.value)}
                    />
                    <button className={styles.botonBuscar} onClick={handleBuscar}>
                        <LazyImage className={styles.ImagenBoton} src={useContent()?.Lidermania.CarruselDeTrabajos.Common.LupaDeBusqueda} alt="lupa" />
                    </button>
                </div>
                <button className={styles.botonFiltros} onClick={toggleFiltros}>
                    Filtros
                </button>
            </div>

            {mostrarFiltros && (
                <div className={styles.filtrosContenedor}>
                    {Object.keys(filtros).map((clave, idx) => (
                        <div key={idx} className={styles.filtro}>
                            <label className={styles.tituloFiltro}>
                                {String(clave)
                                    .replace(/([A-Z])/g, " $1")
                                    .toUpperCase()}
                                :
                            </label>
                            <select
                                value={valoresSeleccionados[clave] ?? ""}
                                onChange={(e) => handleCambioFiltro(clave, e.target.value)}
                            >
                                <option value="" disabled>
                                    Selecciona una opción
                                </option>
                                {filtros[clave].map((opcion, i) => (
                                    <option key={i} value={opcion}>
                                        {opcion}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default BarraDeBusquedaYFiltros;
