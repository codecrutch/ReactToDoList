import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';


class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    let shit = this.props.fetchTodos();
  }

  render() {
    let {todos, removeTodo, updateTodo} = this.props;
    let allTodos = todos.map((todo) =>
      <TodoListItem handMeDowns={{todo, removeTodo, updateTodo}} key={todo.id}/>
    );
    return(
      <section>
        <ul>
        {allTodos}
        </ul>
        <TodoForm receiveTodo={receiveTodo}  />
      </section>

    );
  }
}

export default TodoList;
