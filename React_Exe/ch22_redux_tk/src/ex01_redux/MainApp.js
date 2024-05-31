// [redux 복습 : 예시일 뿐 실제 이렇게 사용하지 않음]

// import {createStore} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import {Provider, useDispatch, useSelector} from 'react-redux';

function reducer(state, action){ // 이벤트 처리 후 store 저장변수에 갱신
    if(action.type === 'up')
        return {...state, value:state.value + action.step};
    return state;
}

const initialState = {value : 0}; // 초기값 / 어떤 변수를 store에 저장할 것인가
const store = createStore(reducer, initialState); // 공유 저장소(애플리케이션의 상태 저장 및 관리)

function Counter(){
    const dispatch = useDispatch(); // redux store에 저장된 reducer에 이벤트 전달

    const count = useSelector(state=>state.value); // redux store에 저장된 객체의 value 필드 값을 가져온다.
    return (
        <div>
            <button onClick={()=>{
                dispatch({type:'up', step:2}); // reducer의 action에 {}객체 전달
            }}>+</button> {count}
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