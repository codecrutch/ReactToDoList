import React from 'react';
import TodoListItem from './todo_list_item';


const TodoList = function({todos}) {
  let allTodos = todos.map((todo) => <TodoListItem todo={todo} key={todo.id}/>);
  return(
    <ul>
    {allTodos}
    </ul>
  );
};


export default TodoList;
