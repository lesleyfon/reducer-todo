import React, {useEffect} from 'react'
import styled from 'styled-components'
import delet from './delete.png'
import './todo.css';

function TodoCard({to_do, toggleTodo, deleteTodo }) {
    return (
        <div style={{ position : 'relative'}}>
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
                <p className='date'> {to_do.date.toDateString()} 
                 <span onClick={e=>{ 
                     e.preventDefault();
                     deleteTodo(to_do)
                }}>
                    <img className='image' src={delet}/>
                </span></p>
               
            </TodoCardStyles>
            <div  className = {`${to_do.completed && 'strike' }`}></div>
        </div>

    )
}

export default TodoCard;

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
     
    .image{
        height: 28px;
        padding: 5px;
        cursor: pointer;
        margin-left: 3px;
    }
    .image:hover{
        background: red;
    }
    p{
    vertical-align:middle;
    display: flex;
    align-items: center;
    }
`;