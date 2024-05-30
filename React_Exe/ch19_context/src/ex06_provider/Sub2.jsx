import { useContext } from 'react';
import Sub3 from "./Sub3";
import { themeContext1 } from './ThemeContext';

function Sub2(){
    const theme1 = useContext(themeContext1);

    return (
        // Sub1에서 적용된 스타일 적용
        // 동시에 Sub2의 하위 컴포넌트인 Sub3도 적용
        <div style={theme1}>
            <h1>Sub2</h1>
            <Sub3/>
        </div>
    )
}

export default Sub2;