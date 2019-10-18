import React, {useEffect} from 'react'
import styled from 'styled-components'
import './todo.css'
function TodoCard({to_do, toggleTodo }) {
    return (
        <TodoCardStyles className = {`${to_do.completed && 'isCompleted' }`}>
            <label>
                <input 
                    type= 'checkbox'
                    name= 'isCompleted'
                    checked = { to_do.completed }
                    onChange ={()=>{toggleTodo(to_do)}}
                />
            </label>
            <h5>{to_do.item}</h5>
            <p className='date'> {to_do.date.toDateString()}</p>
        </TodoCardStyles>

    )
}

export default TodoCard
const TodoCardStyles =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0px 3px 0 rgba(40,33,59,0.28);
    width: 650px;
    margin: 10px auto;
    border-radius: 5px;

    input[type=checkbox]{
        margin-left: 10px;
    }
    .date{
        padding: 10px;
        margin: 0px
    }
     
    
`;