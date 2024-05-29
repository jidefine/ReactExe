import Home from "./Home";
import Topics from "./Topics";
import Contact from "./Contact";
import {HashRouter, Route, Routes, Link} from 'react-router-dom'

function SubApp(){
    return (
        // 웹서버는 URL 뒤의 #를 무시한다
        // HashRouter는 사용자가 어떤 주소로 들어와도, 
        // 처음에 동일한 페이지를 보여주고 싶을 때 사용
        // http://localhost:3000/#/contact
        <HashRouter> 
            <div>
                <h1>Hello React Router DOM</h1>
                {/* <a/>태그는 기본 기능이 주소 이동, 화면 Refresh를 한다.
                그래서 화면상의 컴포넌트가 초기화되는데
                이것을 js에서 preventDefault()로 종종 막는다.
                다른 컴포넌트로 이동하되 Refresh를 막기 위해 <Link/>를 사용한다. */}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/topics" element={<Topics />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={'Not Found'} />
                </Routes>
            </div>
        </HashRouter>
    )
}

export default SubApp;