//A function that takes state and action as arguments, and returns the next state of the app. Inspired by: https://medium.com/better-programming/redux-setup-for-your-react-app-d003ec03aedf
// defines functions that tells to the store what to store. 

const initialState = {
    persons: [], 
    loading: false, 
    error: null,
}

export function rootReducer(state = initialState, action: any) {
   
}


export default rootReducer;
