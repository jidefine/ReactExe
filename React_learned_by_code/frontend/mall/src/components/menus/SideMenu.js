import {Link} from "react-router-dom";

const BasicMenu = () => {
    return (
        <aside id='sidebar' className=" bg-green-300 md:w-1/5 lg:w-1/4 px-5 py-40">
            <div className="">
                <ul className="flex flex-col p-3 text-white font-bold">
                    <li className="pr-6 text-2xl">
                        <Link to={'/recipe'}>요리</Link>
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={'/restaurants'}>맛집</Link>
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={'/clean/'}>청소</Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default BasicMenu;