import { useState } from "react";

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if(numbers.length === 0) return 0; // === : 값과 타입까지 일치
    const sum = numbers.reduce((a,b) => a + b); // reduce : 모든 값을 순환하면서 총합을 구하는 함수
    return sum / numbers.length;

}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    };

    const onInsert = e => {
        // 기존 list에 새로운 number를 숫자로 변환하여 추가 -> 새로운 객체 생성
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {getAverage(list)}
            </div>
        </div>
    )

}

export default Average;