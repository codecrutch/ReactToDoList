export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const receiveTodo = function(todo) {
  return ({
    type: RECEIVE_TODO,
    todo
  });
};

export const receiveTodos = function(todos) {
  return ({
    type: RECEIVE_TODOS,
    todos
  });
};
export const updateTodo = function(todo) {
  return ({
    type: UPDATE_TODO,
    todo
  });
};

export const removeTodo = function(todo) {
  return({
    type: REMOVE_TODO,
    todo
  });
};

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
