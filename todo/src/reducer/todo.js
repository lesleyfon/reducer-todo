
export function reducer(state, action ){
    switch (action.type) {
        case "ADD_TODO" :
            return [
                ...state,
                action.playload
            ]
        default:
            return state
            
    }
}