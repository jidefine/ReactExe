import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
 
const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        // 리액트에서는 key값으로 해당 item을 구분
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
 
export default TodoList;