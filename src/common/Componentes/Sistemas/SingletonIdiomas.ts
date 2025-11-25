// Definimos los tipos de idioma
type Language = 'es' | 'en';

// Singleton Observer para manejar el idioma
class SingletonIdiomas {
    private static instance: SingletonIdiomas;
    private currentLanguage: Language = 'es'; // Idioma por defecto
    private observers: Array<(language: Language) => void> = []; // Lista de observadores

    private constructor() {}

    public static getInstance(): SingletonIdiomas {
        if (!SingletonIdiomas.instance) {
            SingletonIdiomas.instance = new SingletonIdiomas();
        }
        return SingletonIdiomas.instance;
    }

    public getCurrentLanguage(): Language {
        return this.currentLanguage;
    }

    // ✅ Método actualizado: ahora recibe el idioma que se quiere establecer
    public setLanguage(newLanguage: Language): void {
        if (this.currentLanguage !== newLanguage) {
            this.currentLanguage = newLanguage;
            this.notifyObservers(); // Notifica a los observadores si hay un cambio
        }
    }

    public subscribe(observer: (language: Language) => void): void {
        this.observers.push(observer);
    }

    public unsubscribe(observer: (language: Language) => void): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    private notifyObservers(): void {
        this.observers.forEach(observer => observer(this.currentLanguage));
    }
}

// Exportamos la instancia del singleton
export const languageManager = SingletonIdiomas.getInstance();
