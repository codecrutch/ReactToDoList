import React from 'react';

const TodoListItem = ({todo, removeTodo, updateTodo}) => {
  let status = todo.done ? 'undone' : 'done';
  const toggleTodo = (todo) => {
    todo.done = !todo.done;

    return updateTodo(todo);
  };

  return (
    <li>
    {todo.title}
    <button onClick={() => toggleTodo(todo)}>{status}</button>
    <button onClick={() => removeTodo(todo)}> DELETE ME</button>
    </li>
  );
};


export default TodoListItem;
