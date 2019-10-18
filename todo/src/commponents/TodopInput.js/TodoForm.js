import React from 'react';
import styled from 'styled-components'

function TodoForm({
    handleSubmit,
    handleChange, 
    handleDateChange, 
    todoInput, 
    toDoDate,  
}) {

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
                name="toDoDate"
                value={toDoDate}
                min="2018-01-01" 
                max="3018-12-31"
                onChange={handleDateChange}
                />
                <button>Submit</button>
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
       padding: 20px 0px 0px 0px;
       display: flex;
       align-items: center;
       justify-content: space-between;  
       flex-wrap: wrap;
    }
    button{
        width: 99%;
        margin-top: 10px;
        padding: 5px 0px; 
        background: #ffffff;
        border-radius: 5px;
        margin: 0 auto;
    }
    button:focus{
        outline: none;
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
        width: 400px;
        height: 29px;
        padding: 10px;
        font-size: 1.2rem;

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
    margin-bottom: 10px;
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
        margin-bottom: 10px;
    }

    .cursor input:focus + i {
        display: none;
    }

    @keyframes blink {
        from { opacity: 1; }
        to { opacity: 0; }
    }

`;