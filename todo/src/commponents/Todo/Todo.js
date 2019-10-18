import React from 'react';
import TodoCard from './TodoCard';


function Todo({state, setCompleted, complete, toggleTodo}) {

    return (
        <div>
           {
               state.map(to_do => <TodoCard     
                    to_do ={ to_do } 
                    key={ to_do.item } 
                    setCompleted ={ setCompleted }
                    complete ={complete}
                    toggleTodo = {toggleTodo}
                    />)
           }
        </div>
    )
}

export default Todo
