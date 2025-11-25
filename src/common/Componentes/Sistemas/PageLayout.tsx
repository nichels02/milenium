import { useEffect } from 'react';
import { usePageLoad } from './PageLoadContext';

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    const { setPageLoaded } = usePageLoad();

    useEffect(() => {
        setPageLoaded(true);
        return () => setPageLoaded(false);
    }, [setPageLoaded]);

    return <>{children}</>;
};