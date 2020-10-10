//A function that takes state and action as arguments, and returns the next state of the app. Inspired by: https://medium.com/better-programming/redux-setup-for-your-react-app-d003ec03aedf

import { VisibilityFilters } from "../actions/Action";


 const defaultState = {
    currentPerson: {}
}

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
  }


function Reducer( state = defaultState, action: any){
    
    switch(action.type){
        case "SET_PERSON":
            return{
                ...state, 
                currentPerson: action.payload
            }
            default: return state
    }
}


export default Reducer;