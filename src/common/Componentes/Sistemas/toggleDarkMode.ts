// Verifica si el dark mode está activado en localStorage
export function isDarkModeEnabled(): boolean {
    return localStorage.getItem('darkMode') === 'enabled';
}

// Alternar el modo oscuro y guardar la preferencia
export function toggleDarkMode(): void {
    const htmlElement = document.documentElement;
    const isDarkMode: boolean = !isDarkModeEnabled();

    // Aplicar la clase según el estado
    htmlElement.classList.toggle('dark-mode', isDarkMode);

    // Guardar la preferencia en localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');


}

// Aplicar el modo oscuro al cargar la página
export function applySavedDarkMode(): void {
    const htmlElement = document.documentElement;
    const isDarkMode: boolean = isDarkModeEnabled();



    // Aplicar la clase correctamente al cargar la página
    htmlElement.classList.toggle('dark-mode', isDarkMode);
}

// Asegurar que el código se ejecute después de que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {

    applySavedDarkMode();
});
