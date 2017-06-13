export const fetchTodos =  function() {
  return $.ajax({
      method: 'get',
      url: '/api/todos/'
    });
};
