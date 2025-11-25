import { createContext, useContext, useState, ReactNode } from 'react';

type PageLoadContextType = {
    isPageLoaded: boolean;
    setPageLoaded: (loaded: boolean) => void;
};

const PageLoadContext = createContext<PageLoadContextType | undefined>(undefined);

export const PageLoadProvider = ({ children }: { children: ReactNode }) => {
    const [isPageLoaded, setPageLoaded] = useState(false);
    return (
        <PageLoadContext.Provider value={{ isPageLoaded, setPageLoaded }}>
            {children}
        </PageLoadContext.Provider>
    );
};

export const usePageLoad = () => {
    const context = useContext(PageLoadContext);
    if (!context) throw new Error('usePageLoad debe usarse dentro de PageLoadProvider');
    return context;
};