import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';


const TodoList = function({todos, receiveTodo, removeTodo, updateTodo}) {
  let allTodos = todos.map((todo) => <TodoListItem todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} key={todo.id}/>);
  return(
    <section>
      <ul>
      {allTodos}
      </ul>
      <TodoForm receiveTodo={receiveTodo}  />
    </section>

  );
};


export default TodoList;
