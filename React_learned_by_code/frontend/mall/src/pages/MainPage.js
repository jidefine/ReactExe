// Link를 통해 각 페이지 역할을 하는 컴포넌트가
// 다른 페이지의 컴포넌트로 이동할 수 있도록 해야 함

// Link 없이 직접 '/about' 결로를 호출하면 화면은 동일하지만
// 실행 과정에서 리택트가 아예 처음부터 다시 실행됨
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            {/* MainPage 컴포넌트에서 '/about' 경로로 이동할 수 있는 링크 */}
            <div className="flex">
                <Link to={'/about'}>About</Link>
            </div>
            <div className="text-3xl">
                <div>MainPage</div>
            </div>
        </div>
    );
}

export default MainPage;