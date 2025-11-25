import React from "react";
import styles from "../css/HeaderGenerico.module.css";
import ScrollLink from "./Sistemas/ScrollLink.tsx";
import LazyImage from './Sistemas/LazyImage.tsx';

type PosibleScrollMode = "center" | "top" | "bottom";
interface HeaderProps {
    backgroundImage: string;
    sideImage: string;
    title: string;
    description: string;
    button1Text: string;
    button2Text: string;
    onButton1ClickPosicion: string;
    onButton1ClickModo: PosibleScrollMode;
    onButton2ClickPosicion: string;
    onButton2ClickModo: PosibleScrollMode;
    logo?: string;
}

const HeaderGenerico: React.FC<HeaderProps> = ({
                                                   backgroundImage,
                                                   sideImage,
                                                   title,
                                                   description,
                                                   button1Text,
                                                   button2Text,
                                                   onButton1ClickPosicion,
                                                   onButton1ClickModo,
                                                   onButton2ClickPosicion,
                                                   onButton2ClickModo,
                                                   logo,
                                               }) => {
    return (
        <header id="HeaderGenerico"
            className={styles.header}
            // style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div
                className={styles.backgroundOverlay}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            {logo && <LazyImage src={logo} alt="Logo" className="logoHeader" />}
            <LazyImage
                src={sideImage}
                alt="Ilustración"
                className={styles.sideImage}
            />

            <div className={styles.content}>
                <div className={styles.contenedorFondo}></div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
                <div className={styles.buttonContainer}>
                    <ScrollLink to={onButton1ClickPosicion} scrollMode={onButton1ClickModo} className={styles.button} >
                        {button1Text}
                    </ScrollLink>
                    <ScrollLink to={onButton2ClickPosicion} scrollMode={onButton2ClickModo} className={styles.button} >
                        {button2Text}
                    </ScrollLink>
                </div>
            </div>
        </header>
    );
};

export default HeaderGenerico;