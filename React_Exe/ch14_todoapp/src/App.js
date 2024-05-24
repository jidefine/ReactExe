import logo from './logo.svg';
import './App.css';
// import TodoTemplate from './ex01_TodoTemplate/TodoTemplate';
// import TodoTemplate from './ex02_TodoInsert/TodoInsert';
// import TodoInsert from './ex02_TodoInsert/TodoInsert';

import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './ex05_TodoList/TodoTemplate';
import TodoInsert from './ex05_TodoList/TodoInsert'
import TodoList from './ex05_TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
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

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos}/>
    </TodoTemplate>
  );
};

export default App;
