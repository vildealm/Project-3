import { PersonState } from "../reducers/reducer";

/*
export const ADD_PERSON = 'ADD_PERSON'
export const SET_PERSON = 'SET_PERSON'
export const SET_DB_VALUES = 'SET_DB_VALUES'


  export function addPerson(text: any) {
    return { type: ADD_PERSON, text }
  }

  export function setDbValues(text: any) {
    return { type: SET_DB_VALUES, text }
  }

*/

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PERSONS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchPersonsBegin= () => {
    return {
        type: FETCH_PRODUCTS_BEGIN
    }
}

export const fetchPersonsSuccess = (persons: PersonState) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        persons: persons
    }
}

export const fetchPersonsFailure= (error: Error) =>  {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        error: error
    }
}





  
  