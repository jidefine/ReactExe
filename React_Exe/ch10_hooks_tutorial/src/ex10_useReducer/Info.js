import React, { useReducer } from 'react';

function reducer(state, action){
    return {
        // ...state
        // - JavaScript의 spread 문법을 사용하여 기존 state객체를 새로운 state객체로 복제
        ...state, // 
        [action.name]: action.value // e.target에 맞게 action 실행
    }
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name : '',
        nickname : ''
    });
    const {name, nickname} = state;
    const onChange = e => {
        dispatch(e.target); // action에게 전달
    };

    return (
        <div>
            <div>
                <input name='name' value={name} onChange={onChange}/>
                <input name='nickname' value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;