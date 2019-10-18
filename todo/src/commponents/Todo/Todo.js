import React, { useReducer } from 'react';
import { reducer } from './../../reducer/todo'
import {todoObject } from './../../data'

function Todo() {
    const [state, dispatch]  = useReducer(reducer, todoObject)
    console.log(state)
    return (
        <div>
           
        </div>
    )
}

export default Todo
