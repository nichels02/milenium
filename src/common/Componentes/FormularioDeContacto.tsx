import styles from '../css/FormularioDeContacto.module.css';

const FormularioDeContacto = () => {
    return (
        <div id="FormularioDeContacto" className={styles.contenedor_principal}>
            <div className={styles.contenedor_secundario_80}>
                {/* Contenedor de los tres botones (dentro del contenedor secundario, fuera del formulario) */}
                <div className={styles.contenedor_botones_externo}>
                    <button className={styles.boton}>Botón 1</button>
                    <button className={styles.boton}>Botón 2</button>
                    <button className={styles.boton}>Botón 3</button>
                </div>

                {/* Contenedor del formulario */}
                <div className={styles.contenedor_formulario_principal}>
                    <div className={styles.contenedor_formulario}>
                        {/* Contenedor del título y dropdown */}
                        <div className={styles.contenedor_titulo_dropdown}>
                            <h1 className={styles.titulo}>Contactanos</h1>
                            <select className={styles.dropdown}>
                                <option value="opcion1">Opción 1</option>
                                <option value="opcion2">Opción 2</option>
                                <option value="opcion3">Opción 3</option>
                            </select>
                        </div>
                        <h3 className={styles.subtitulo}></h3>

                        {/* Resto del formulario */}
                        <form action="submeter-formulario.php" method="post" className={styles.formulario}>
                            {/* Fila 1: Nombre y Apellido */}
                            <div className={styles.fila}>
                                <div className={styles.campo}>
                                    <label htmlFor="nombre" className={styles.etiqueta}>
                                        Nombre<span className={styles.texto_obligatorio}>*</span>
                                    </label>
                                    <input type="text" id="nombre" className={styles.input} required />
                                </div>
                                <div className={styles.campo}>
                                    <label htmlFor="apellido" className={styles.etiqueta}>
                                        Apellido<span className={styles.texto_obligatorio}>*</span>
                                    </label>
                                    <input type="text" id="apellido" className={styles.input} required />
                                </div>
                            </div>

                            {/* Fila 2: Correo y Teléfono */}
                            <div className={styles.fila}>
                                <div className={styles.campo}>
                                    <label htmlFor="email" className={styles.etiqueta}>
                                        Correo<span className={styles.texto_obligatorio}>*</span>
                                    </label>
                                    <input type="email" id="email" className={styles.input} required />
                                </div>
                                <div className={styles.campo}>
                                    <label htmlFor="telefono" className={styles.etiqueta}>
                                        Teléfono<span className={styles.texto_obligatorio}>*</span>
                                    </label>
                                    <input type="tel" id="telefono" className={styles.input} required />
                                </div>
                            </div>

                            {/* Fila 3: Checkboxes */}
                            <div className={styles.fila_completa}>
                                <div className={styles.campo}>
                                    <label className={styles.etiqueta}>
                                        Elige las soluciones de tu interés
                                    </label>
                                    <div className={styles.grupo_checkboxes}>
                                        <label className={styles.contenedor_checkbox}>
                                            <input
                                                type="checkbox"
                                                name="soluciones"
                                                value="web"
                                                className={styles.input_checkbox}
                                            />
                                            <span className={styles.checkbox_personalizado}></span>
                                            <span className={styles.etiqueta_checkbox}>Seguridad</span>
                                        </label>

                                        <label className={styles.contenedor_checkbox}>
                                            <input
                                                type="checkbox"
                                                name="soluciones"
                                                value="movil"
                                                className={styles.input_checkbox}
                                            />
                                            <span className={styles.checkbox_personalizado}></span>
                                            <span className={styles.etiqueta_checkbox}>Servicios</span>
                                        </label>

                                        <label className={styles.contenedor_checkbox}>
                                            <input
                                                type="checkbox"
                                                name="soluciones"
                                                value="marketing"
                                                className={styles.input_checkbox}
                                            />
                                            <span className={styles.checkbox_personalizado}></span>
                                            <span className={styles.etiqueta_checkbox}>Tecnología</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Fila 4: Mensaje */}
                            <div className={styles.fila}>
                                <div className={styles.campo} style={{ gridColumn: '1 / -1' }}>
                                    <label htmlFor="mensaje" className={styles.etiqueta}>
                                        Mensaje<span className={styles.texto_obligatorio}>*</span>
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        className={styles.textarea}
                                        required
                                        placeholder="Deja aquí tu mensaje..."
                                    ></textarea>
                                </div>
                            </div>

                            {/* Fila 5: Contacto alternativo y Botón */}
                            <div className={styles.seccion_contacto_alternativo}>
                                <div className={styles.info_contacto_alternativo}>
                                    <h4 className={styles.titulo_contacto_alternativo}>También nos puedes contactar por:</h4>
                                    <a href="mailto:contacto@empresa.com" className={styles.enlace_contacto}>
                                        contacto@empresa.com
                                    </a>
                                </div>
                                <button type="submit" className={styles.boton_enviar}>
                                    Enviar mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormularioDeContacto;