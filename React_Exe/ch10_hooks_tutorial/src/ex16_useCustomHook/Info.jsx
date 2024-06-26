import React from 'react';
import useInputs from './useInputs';

const Info = () => {
    const [state, onChange] = useInputs({
        // initialForm가 넘겨주는 값들
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임: </b> {nickname}
            </div>
        </div>
    )
}

export default Info;