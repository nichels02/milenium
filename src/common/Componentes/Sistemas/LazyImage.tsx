import React from 'react';

type LazyImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    noLazy?: boolean; // Si quieres evitar loading="lazy" para algunas imágenes
};

const LazyImage: React.FC<LazyImageProps> = ({ noLazy = false, ...props }) => {
    return <img loading={noLazy ? undefined : "lazy"} {...props} />;
};

export default LazyImage;
