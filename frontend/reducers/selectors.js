export const allTodos = function({todos}) {
  return Object.keys(todos).map((todo) => todos[todo]);
};
