import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, UPDATE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';
const initialState = {
  1: {
    id: 1,
    title: "Learn React",
    body: "with redux",
    done: false
  },
  2: {
    id: 2,
    title: "wash React",
    body: "with with width redux",
    done: true
  },
};


const todoReducer = function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TODOS:
      let newState = {};
        action.todos.forEach((todo) => {
          newState[todo.id] = todo;
        });
        return newState;
    case RECEIVE_TODO:
      newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    case UPDATE_TODO:
    
      newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
};

export default todoReducer;
