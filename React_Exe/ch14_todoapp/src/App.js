import logo from './logo.svg';
import './App.css';
// import TodoTemplate from './ex01_TodoTemplate/TodoTemplate';
// import TodoTemplate from './ex02_TodoInsert/TodoInsert';
// import TodoInsert from './ex02_TodoInsert/TodoInsert';

import React, { useState, useRef, useCallback } from 'react';
// import TodoTemplate from './ex05_TodoList/TodoTemplate';
// import TodoInsert from './ex05_TodoList/TodoInsert'
// import TodoList from './ex05_TodoList/TodoList';
import TodoTemplate from './ex06_Remove/TodoTemplate';
import TodoInsert from './ex06_Remove/TodoInsert'
import TodoList from './ex06_Remove/TodoList';

function App() {
  const [todos, setTodos] = useState([
    // 서버에서 json으로 받으면 다음과 같이 됨
    {
      id: 1,
      text: '간지나게 숨쉬기',
      checked: true,
    },
    {
      id: 2,
      text: '멋있게 눕기',
      checked: true,
    },
    {
      id: 3,
      text: '아무것도 안하기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove}/>
    </TodoTemplate>
  );
};

export default App;
