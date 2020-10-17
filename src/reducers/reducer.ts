//A function that takes state and action as arguments, and returns the next state of the app. Inspired by: https://medium.com/better-programming/redux-setup-for-your-react-app-d003ec03aedf
// defines functions that tells to the store what to store. 
import {FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE} from '../actions/action';

const initialState = {
    persons: [], 
    loading: false, 
    error: null,
}

export function rootReducer(state = initialState, action: any) {
    switch(action.type) {
        case FETCH_PRODUCTS_BEGIN: 
            return {
                ...state,
                loading: true,
                error: null,
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                persons: action.payload.persons
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                persons: []
            }
        default: 
            return state;
    }
}


export default rootReducer;
