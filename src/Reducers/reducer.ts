
 const defaultState = {
    currentPerson: {}
}

function reducer( state = defaultState, action: any){
    
    switch(action.type){
        case "SET PERSON":
            return{
                ...state, 
                currentPerson: action.payload
            }
            default: return state
    }
}


export default reducer;