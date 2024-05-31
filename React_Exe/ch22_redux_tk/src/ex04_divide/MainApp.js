// [redux 복습 : 예시일 뿐 실제 이렇게 사용하지 않음]
// redux는 불필요하게 사용하면 독립성을 잃음

import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './store/ShareStore';

function Counter(){
    const dispatch = useDispatch(); 
    const count = useSelector(state=>state.counter.value); // counter에 있는 value 값을 가져오겠다.
    const mCount = useSelector(state=>state.counter.mValue);
    const str = useSelector(state=>state.append.value); 

    return (
        <div>
            <button onClick={()=>{
                dispatch({type:'counterSlice/up', step:2}); 
            }}>+</button> {count}
            <br/>
            <button onClick={()=>{
                dispatch({type:'counterSlice/down', step:2}); 
            }}>-</button>{mCount}
             <br/>
            <button onClick={()=>{
                dispatch({type:'strSlice/append', ch: '0'}); 
            }}>+</button>{str}
        </div>
    )
}

function MainApp(){
    return (
        <Provider store={store}>
            <div>
                <Counter/>
            </div>
        </Provider>
    )
}

export default MainApp;