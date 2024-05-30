import { useReducer } from "react";

// useReducer 
// - useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트하는 Hook

// reducer
// - 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아 
//   새로운 상태를 반환하는 함수


function reducer(state, action){
    switch(action.type){
        case 'INCREMENT' :
            return { value : state.value + 1};
        case 'DECREMENT' :
            return { value : state.value - 1};
        default:
            return state;
    }
}

const Counter = () => {
    // [변수, action전달함수] = useReducer(action수신함수, 변수 초기값)
    // state == {value : 0}
    // action전달함수 → action수신함수 → state 값의 변화
    const [state, dispatch] = useReducer(reducer, {value : 0});

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            {/* action : {type : 'INCREMENT'} */}
            {/* action : {type : 'DECREMENT'} */}
            <button onClick={()=> dispatch({type : 'INCREMENT'})}>+1</button>
            <button onClick={()=> dispatch({type : 'DECREMENT'})}>-1</button>
        </div>
    )
}

export default Counter;