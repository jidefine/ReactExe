import styles from "./CSSModule.module.css";

const CSSModule = () => {
    console.log(styles);
    console.log(styles.wrapper);
    return (
        // html 변환 시 각 모듈마다 이름에 __W1X70 등으로 덧붙여서 모든 모듈을 유일하게 만듦
        <div className={styles.wrapper}>
            안녕 저는 <span className="something">css module</span>
        </div>
    );
};

export default CSSModule;