import React from 'react'

function TodoCard() {
    return (
        <div>
            <label>
                <input 
                    type= 'checkbox'
                    name= 'isCompleted'
                    value = { false }
                />
            </label>
            <h5>todo</h5>
            <p>2018-07-22</p>
        </div>

    )
}

export default TodoCard
