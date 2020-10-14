//A function that takes state and action as arguments, and returns the next state of the app. Inspired by: https://medium.com/better-programming/redux-setup-for-your-react-app-d003ec03aedf
// defines functions that tells to the store what to store. 



 /*const defaultState = {
    currentPerson: {}
}*/


function Reducer(){
    return [1, "Almestad", "Vilde", 23, "Trondheim"];
    
    /*switch(action.type){
        case "SET_PERSON":
            return{
                ...state, 
                currentPerson: action.payload
            }
            default: return state
    }*/
}


export default Reducer;