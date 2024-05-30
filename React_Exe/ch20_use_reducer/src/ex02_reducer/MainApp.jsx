
import React, {useState} from 'react';
import { useReducer } from 'react';

// useReducer 
// - useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트하는 Hook

// reducer
// - 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아 
//   새로운 상태를 반환하는 함수

function MainApp(){
    const countReducer = (oldCount, action) => {
        if(action === 'UP')
            return oldCount + 1;
        else if(action === 'DOWN')
            return oldCount - 1;
        else if(action === 'RESET')
            return 0;
    }
    // [변수, action전달함수] = useReducer(action수신함수, 변수 초기값)
    // action전달함수 → action수신함수 → state 값의 변화
    const [count, countDispatch] = useReducer(countReducer, 0);
    const down = () => countDispatch('DOWN');
    const reset = () => countDispatch('RESET');
    const up = () => countDispatch('UP');

    return (
        <div>
            <input type='button' value='-' onClick={down} />
            <input type='button' value='0' onClick={reset} />
            <input type='button' value='+' onClick={up} />
            <span>{count}</span>
        </div>
    )
}

export default MainApp;