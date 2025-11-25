import React, { createContext, useContext, useEffect, useState } from 'react';
import { languageManager } from './SingletonIdiomas';

type LanguageContextType = {
    language: 'es' | 'en';
    setLanguage: (lang: 'es' | 'en') => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState(languageManager.getCurrentLanguage());

    useEffect(() => {
        const updateLanguage = (newLanguage: 'es' | 'en') => {
            setLanguageState(newLanguage);
        };

        languageManager.subscribe(updateLanguage);
        return () => {
            languageManager.unsubscribe(updateLanguage);
        };
    }, []);

    const setLanguage = (lang: 'es' | 'en') => {
        languageManager.setLanguage(lang); // Cambia el idioma en el singleton
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
    }
    return context;
};
