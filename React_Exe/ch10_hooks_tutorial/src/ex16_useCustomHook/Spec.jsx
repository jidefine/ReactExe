import React from 'react';
import useInputs from './useInputs';

const Spec = () => {
    const [state, onChange] = useInputs({
        // initialForm가 넘겨주는 값들
        kor: '',
        eng: '',
        math: ''
    });
    const {kor, eng, math} = state;

    return (
        <div>
            <div>
                <input name="kor" value={kor} onChange={onChange} />
                <input name="eng" value={eng} onChange={onChange} />
                <input name="math" value={math} onChange={onChange} />
            </div>
            <div>
                <b>국어:</b> {kor}
            </div>
            <div>
                <b>영어: </b> {eng}
            </div>
            <div>
                <b>수학: </b> {math}
            </div>
        </div>
    )
}

export default Spec;