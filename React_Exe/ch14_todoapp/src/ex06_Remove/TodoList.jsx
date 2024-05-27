import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
 
const TodoList = ({ todos, onRemove }) => {
  return (
    <div className="TodoList">
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem /> */}
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};
 
export default TodoList;