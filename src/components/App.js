import React from 'react';
import TodoList from '../containers/todoList';
import UserList from '../containers/userList';

const App = () => (
  <div className="offset-md-3 col-md-8">
    <UserList />
    <TodoList />
  </div>
);

export default App;
