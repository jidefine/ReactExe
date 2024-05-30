import { useContext } from 'react';
import './Style.css';
import Sub1 from './Sub1';
import { themeContext1 } from './ThemeContext';

// React에서 inline style을 사용할 때 직접 적용되며, CSS 파일에 정의된 스타일보다 우선
// 기본 HTML에서는 CSS 파일에 정의된 스타일이 우선
function MainApp(){
    const theme1 = useContext(themeContext1);
    return (
        // theme1은 useContext 훅을 사용하여 가져온 컨텍스트 값으로, inline style로 적용
        // theme1가 root보다 우선 적용
        // inline style : 해당 요소에 직접 스타일을 적용 ex) style={theme1}
        <div className='root' style={theme1}>
            <h1>피카츄</h1>
            <Sub1/>
        </div>
    );
}

export default MainApp;