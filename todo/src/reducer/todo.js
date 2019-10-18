
export function reducer(state, action ){
    console.log(state)
    switch (action.type) {
        case "ADD_TODO" :
            return [
                ...state,
                action.playload
            ]
        default:
            // return state
            
    }
}