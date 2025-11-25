
import styles from '../css/Marquee2.module.css';

function Marquee2() {
    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marqueeText}>
                Este es un texto que se desplaza sin usar `marquee`, ¡solo CSS!
            </div>
        </div>
    );
}

export default Marquee2;
