import {Link} from "react-router-dom";
import logoImage from "../../image/logo.svg"; // 이미지 파일 경로

const Header = () => {
    return (
        <header id='navbar' className="flex bg-blue-300">
            <div className="w-4/5 bg-gray-500">
                <ul className="flex p-3 text-white font-bold">
                    <li className="pr-6 text-2xl">
                        {/*로고 삽입*/}
                        <Link to={'/'}>
                            <img src={logoImage} alt="Main" className="h-8" />
                        </Link>
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={'/'}>우리는 함께 산다</Link>
                    </li>
                </ul>
            </div>

            <div className="w-1/5 justify-end bg-orange-300 p-4 font-medium">
                <div className="text-white text-sm m-1 rounded" >
                    Login
                </div>
            </div>
        </header>
    )
}

export default Header;