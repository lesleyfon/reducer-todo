import React from 'react';
import TodoForm from './commponents/TodopInput.js/TodoForm';
import Todo from './commponents/Todo/Todo';

function App() {
  return (
    <div className="App">
      <h1>Hello Todo</h1>
      <TodoForm />
      <Todo />
    </div>
  );
}

export default App;
