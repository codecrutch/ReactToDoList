export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

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

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
