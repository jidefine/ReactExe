import React, { useState } from 'react';
 
const IterationSample = () => {
  const [names, setNames] = useState([
    {id: 1, text: '눈사람'},
    {id: 2, text: "얼음"},
    {id: 3, text: "눈"},
    {id: 4, text: "바람"}
  ]);

  const [inputText, setInputText] = useState("");
  // 현재 초기값
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    // 새로 부여된 id와 입력 데이터를 가져와서, names에 새로 추가
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1); // 다음 입력을 위해 id는 1 증가시킨다.
    setNames(nextNames); // names에 새로운 데이터 추가
    setInputText(''); // 입력 데이터 비우기
  }

  const onRemove = id => {
    // id가 일치하지 않으면, true가 되므로 그래도 저장
    // id가 일치하면 falsr가 되므로 제외
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  }

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};
 
export default IterationSample;