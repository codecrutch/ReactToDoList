import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { allTodos } from './reducers/selectors';
import Root from './components/root';



  document.addEventListener("DOMContentLoaded", () => {
    window.store = store();
    ReactDOM.render(<Root store={store()}/>, document.getElementById('root'));
  });
