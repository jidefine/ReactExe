import styles from "./CSSModule.module.css";
import classNames from "classnames/bind";

// classnames모듈을 사용해서, styles의 css를 받아서 저장하도록 한다.
const cx = classNames.bind(styles);

const CSSModule = () => {
    return (
        <div className={cx("wrapper", "inverted")}>
            안녕 저는 <span className="something">css module</span>
        </div>
    );
};

export default CSSModule;