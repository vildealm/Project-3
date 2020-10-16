//A function that takes state and action as arguments, and returns the next state of the app. Inspired by: https://medium.com/better-programming/redux-setup-for-your-react-app-d003ec03aedf
// defines functions that tells to the store what to store. 
import {FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE} from '../actions/action';

const initialState = {
    persons: [], 
    loading: false, 
    error: null,
}

export function productsReducer(state = initialState, action) {
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

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;


 export interface PersonState {
    id: number; 
    last_name: string; 
    first_name: string; 
    age: number; 
    location: string; 
}

const initialState = {
    person: {
        id: 0,
        last_name: "",
        first_name: "",
        age: 0,
        location: "",
    }
}

type Action = {type: "SET_DB_VALUES", payload: string}

export const personReducer = (state:PersonState = initialState, action: Action)
switch (action.type) {
    case INIT:
      return state;
    case SET_DB_VALUES:
      return {
         ...state,
         data: action.payload
      }
    default:
      return state;

/*function Reducer(){
    return [1, "Almestad", "Vilde", 23, "Trondheim"];
    
    /*switch(action.type){
        case "SET_PERSON":
            return{
                ...state, 
                currentPerson: action.payload
            }
            default: return state
    }*/


export default Reducer;