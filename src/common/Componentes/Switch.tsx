import { useEffect, useState } from 'react';
import styles from '../css/Switch.module.css';
import { toggleDarkMode, isDarkModeEnabled } from './Sistemas/toggleDarkMode.ts';
import { updateSVGColor } from './BarraDeOpciones2.tsx';

function Switch() {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(isDarkModeEnabled());
    }, []);

    const handleToggle = () => {
        toggleDarkMode();
        updateSVGColor(); // Llama a la función para actualizar los colores del SVG
        setIsChecked(prev => !prev);
    };

    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                id="switch"
                className={styles.checkbox}
                checked={isChecked}
                onChange={handleToggle} // Ahora sí cambia el color del SVG
            />
            <label htmlFor="switch" className={styles.switchLabel}>
                Toggle
            </label>
        </div>
    );
}

export default Switch;
