import {Link} from "react-router-dom";

const BasicMenu = () => {
    return (
        <nav id='navbar' className="flex">
            <div className="w-4/5">
                <ul className="flex p-3 text-black font-bold">
                    {/* <li className="pr-6 text-2xl">
                        <Link to={'/about'}>About</Link>
                    </li> */}
                    <li className="pr-6 text-2xl">
                        <Link to={'/tip/'}>꿀팁</Link>
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={'/meeting/'}>모임</Link>
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={'/cs/'}>고객지원</Link>
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={'/myPage/'}>마이페이지</Link>
                    </li>
                    {/*'/todo/'는 모듈의 이름 자체를 하나의 경로로 설정*/}
                    <li className="pr-6 text-2xl">
                        <Link to={'/todo/'}>Todo</Link>
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={'/mall/'}>mall</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default BasicMenu;