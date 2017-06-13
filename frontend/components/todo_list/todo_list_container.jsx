import { connect } from 'react-redux';
import { receiveTodo, removeTodo, updateTodo, fetchTodos} from '../../actions/todo_actions';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';


const mapStateToProps = (state) => {
  return ({
    todos: allTodos(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
