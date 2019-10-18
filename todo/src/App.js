import React, { useReducer, useState } from 'react';
import TodoForm from './commponents/TodopInput.js/TodoForm';
import Todo from './commponents/Todo/Todo';
import {reducer} from './reducer/todo';
import { todoObject } from './data'

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [toDoDate, setTodoDate] = useState('');
  const [isCompleted, setCompleted] = useState(false);
  const [state, dispatch]  = useReducer(reducer, todoObject);

  function handleChange(e){
   setTodoInput(e.target.value); 
  }

  function handleDateChange(e){
      setTodoDate(e.target.value);
      console.log(e.target.value)
  }

  function handleSubmit(e){
      e.preventDefault();
      console.log()
      dispatch({
          type: "ADD_TODO",
           playload : {
              item: todoInput,
              date: new Date(toDoDate),
              completed: isCompleted,
              id : Date.now()
          }
      })
      console.log(state)
      setTodoInput('');
      setTodoDate('')
  }
  return (
    <div className="App">
      <TodoForm 
        state ={ state }
        handleSubmit ={ handleSubmit }
        handleChange ={ handleChange }
        handleDateChange = { handleDateChange }
        todoInput ={ todoInput}
        toDoDate = { toDoDate }
        setTodoDate = {setTodoDate}

        


      />
      <Todo 
      state ={ state }
      />
    </div>
  );
}

export default App;
