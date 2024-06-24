import '../../assets/styles/common.scss';
import notion from "../../assets/image/icon-notion.svg"; 
import github from "../../assets/image/icon-github.svg"; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="project">Woosan</div>
            <div className="right">LuckyVicky ⓒ 2 024. All rights reserved.</div>
            <div className="site">
                <img src={notion} alt="Notion" />
                <img src={github} alt="Github" />
            </div>
        </footer>
    )
}

export default Footer;