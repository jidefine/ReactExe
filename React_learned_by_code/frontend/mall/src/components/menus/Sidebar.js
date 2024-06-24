import {Link} from "react-router-dom";

const Sidebar = ({ pageType }) => {
    return (
        <aside id='sidebar' className=" bg-green-300 md:w-1/5 lg:w-1/4 px-5 py-40">
            <div className="">
                <ul className="flex flex-col p-3 text-white font-bold">
                    {pageType === 'tip' && (
                        <>
                            <li className="pr-6 text-2xl">
                                <Link to={'/tip/recipe/'}>요리</Link>
                            </li>
                            <li className="pr-6 text-2xl">
                                <Link to={'/tip/restaurants/'}>맛집</Link>
                            </li>
                            <li className="pr-6 text-2xl">
                                <Link to={'/tip/clean/'}>청소</Link>
                            </li>
                        </>
                    )}
                    {pageType === 'todo' && (
                        <>
                            <li className="pr-6 text-2xl">
                                <Link to={'/todo/urgent/'}>긴급</Link>
                            </li>
                            <li className="pr-6 text-2xl">
                                <Link to={'/todo/important/'}>중요</Link>
                            </li>
                            <li className="pr-6 text-2xl">
                                <Link to={'/todo/general/'}>일반</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;