import React from 'react';
import ReactDOM from 'react-dom';
import ToDoListContainer from './todo_list/todo_list_container';



const App = function() {
  return(
    <div>
      <h1>ToDo App</h1>
      <ToDoListContainer/>
    </div>
  );
};


export default App;
