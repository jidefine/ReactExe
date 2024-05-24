import styles from "./CSSModule.module.css";

const CSSModule = () => {
    console.log(styles);
    console.log(styles.wrapper);
    return (
        // 동일한 방법
        // <div className={`${styles.wrapper} ${styles.inverted}`}>
        <div className={[styles.wrapper, styles.inverted].join(" ")}>
            안녕 저는 <span className="something">css module</span>
        </div>
    );
};

export default CSSModule;