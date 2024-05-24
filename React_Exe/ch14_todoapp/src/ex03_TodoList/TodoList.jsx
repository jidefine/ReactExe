import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
 
const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};
 
export default TodoList;