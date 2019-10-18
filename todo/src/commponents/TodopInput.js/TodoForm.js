import React from 'react'

function TodoForm() {
    return (
        <div>
            <input 
                type='text' 
                name= 'todo'
                value= 'someTodo'
                />
                <input 
                type="date" 
                name="dateToComplete"
                value="2018-07-22"
                min="2018-01-01" 
                max="2018-12-31" />
        </div>
    )
}

export default TodoForm
