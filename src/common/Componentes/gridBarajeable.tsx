import { useState, useEffect } from "react";
import styles from "../css/gridBarajeable.module.css";

interface Item {
    id: number;
    text: string;
    image: string;
    showTitle: boolean;
    description: string[];
}

interface GridBarajeableProps {
    items: Item[]; // Lista completa, el primero será el main
}

function GridBarajeable({ items }: GridBarajeableProps) {
    const [mainItem, setMainItem] = useState<Item | null>(null);
    const [smallItems, setSmallItems] = useState<Item[]>([]);
    // const [isMobile, setIsMobile] = useState<boolean>(false);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth <= 926);
    //     };
    //
    //     handleResize();
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);

    // Actualiza los items cuando cambian las props
    useEffect(() => {
        if (items.length > 0) {
            setMainItem(items[0]);
            setSmallItems(items.slice(1));
        }
    }, [items]);

    if (!mainItem) {
        return <div>Loading...</div>;
    }

    const handleClick = (clickedItem: Item) => {
        setSmallItems(prevItems =>
            prevItems.map(item => (item.id === clickedItem.id ? mainItem : item))
        );
        setMainItem(clickedItem);
    };

    return (
        <div className={styles.contenedorPadre}>
            <div className={styles.gridContainer}>
                {/* Elemento grande */}
                <div className={styles.mainItem} style={{ backgroundImage: `url(${mainItem.image})` }}>
                    <div className={styles.mainOverlay}>
                        <h2 className={styles.mainTitle}>
                            {mainItem.showTitle ? mainItem.text : mainItem.description[0]}
                        </h2>
                        {mainItem.description.slice(mainItem.showTitle ? 0 : 1).map((desc, idx) => (
                            <p key={idx} className="p1">{desc}</p>
                        ))}
                    </div>
                </div>

                {/* Elementos pequeños */}
                {smallItems.map(item => (
                    <div
                        key={item.id}
                        className={styles.smallItem}
                        style={{ backgroundImage: `url(${item.image})` }}
                        onClick={() => handleClick(item)}
                    >




                        {/*<div className={styles.overlay}>*/}
                        {/*    <p className={styles.smallTitle}>*/}
                        {/*        {item.showTitle ? item.text : item.description[0]}*/}
                        {/*    </p>*/}
                        {/*    {!isMobile && item.description.slice(item.showTitle ? 0 : 1).map((desc, idx) => (*/}
                        {/*        <p key={idx} className="p2">{desc}</p>*/}
                        {/*    ))}*/}
                        {/*</div>*/}



                        <div className={styles.overlay}>
                            <p className={styles.smallTitle}>
                                {item.showTitle
                                    ? item.text
                                    : item.description[0].split(' ').length <= 4
                                        ? item.description[0]
                                        : item.description[0].split(' ').slice(0, 4).join(' ') + '...'}
                            </p>

                            {/*{!isMobile && item.description.slice(item.showTitle ? 0 : 1).map((desc, idx) => (*/}
                            {/*    <p key={idx} className="p2">{desc}</p>*/}
                            {/*))}*/}
                        </div>



                    </div>
                ))}
            </div>
        </div>
    );
}

export default GridBarajeable;
