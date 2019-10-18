
export function reducer(state, action ){

    switch (action.type) {
        case "ADD_TODO" :
            return [
                ...state,
                action.playload
            ]
        case 'TOGGLE_TODO' :
            return state.map(todo=>{
                if(todo.id === action.playload.id){
                    return {...todo, completed: !todo.completed}
                } else{
                    return todo;
                }
            })
        default:
            return state
            
    }
}