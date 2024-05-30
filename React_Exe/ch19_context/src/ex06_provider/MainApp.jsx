import { useContext } from 'react';
import './Style.css';
import Sub1 from './Sub1';
import { themeContext1 } from './ThemeContext';

function MainApp(){
    const theme1 = useContext(themeContext1);
    return (
        // theme1가 root보다 우선 적용
        <div className='root' style={theme1}>
            <h1>피카츄</h1>
            <Sub1/>
        </div>
    );
}

export default MainApp;