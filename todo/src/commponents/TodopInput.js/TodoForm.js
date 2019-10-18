import React, {useState, useReducer} from 'react';
import styled from 'styled-components'

function TodoForm() {
    const [todoInput, setTodoInput] = useState('');
    const [toDoDate, setTodoDate] = useState('');

    function handleChange(e){
     setTodoInput(e.target.value)   
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(todoInput)
        setTodoInput('')   
    }
    return (
        <TodoFormStyles>
            
            <form onSubmit= { handleSubmit } className='todo-form'>
                <div className='cursor'>
                    <input 
                    type='text'
                    name= 'todoInput'
                    placeholder= 'Add a to do'
                    value={todoInput}
                    onChange={handleChange}
                    />
                    <i></i>
                </div>
                <input 
                type="date" 
                name="dateToComplete"
                // value="2018-07-22"
                min="2018-01-01" 
                max="3018-12-31" />
            </form>
            
        </TodoFormStyles>
    )
}

export default TodoForm



const TodoFormStyles = styled.div`
    .todo-form{
        width: 650px;
       margin: 10px auto 50px auto;
       border-radius: 5px;
       box-shadow: 0 0px 3px 0 rgba(40,33,59,0.28);
       padding: 20px 0px;
       display: flex;
       align-items: center;
       justify-content: space-between;  
    }
    input {
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        background-color: #fff;
        padding: 3px 5px;
        box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
        width: 190px;
        }
    input:focus{
        outline: none
    }
    [type='text']{
        box-shadow:none;
        border-radius: 0px;
        border: 0px;
    }
    [type="date"] {
    background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
    float: right;
    margin-right: 15px;
    }
    [type="date"]::-webkit-inner-spin-button {
    display: none;
    }
    [type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    }

    .cursor {
	position: relative;
    }
    .cursor	i {
        position: absolute;
        width: 1px;
        height: 90%;
        background-color: gray;
        left: 5px;
        top: 10%;
        animation-name: blink;
        animation-duration: 800ms;
        animation-iteration-count: infinite;
        opacity: 1;
    }

    .cursor input:focus + i {
        display: none;
    }

    @keyframes blink {
        from { opacity: 1; }
        to { opacity: 0; }
    }

`;