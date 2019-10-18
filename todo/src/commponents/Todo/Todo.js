import React, { useReducer } from 'react';
import { reducer } from './../../reducer/todo'
import {todoObject } from './../../data'
import TodoCard from './TodoCard';

function Todo() {
    const [state, dispatch]  = useReducer(reducer, todoObject)

    return (
        <div>
           {
               state.map(to_do => <TodoCard to_do ={to_do}/>)
           }
        </div>
    )
}

export default Todo
