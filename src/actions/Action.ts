

export const ADD_PERSON = 'ADD_PERSON'
export const TOGGLE_PERSON = 'TOGGLE_PERSON'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_UNDER_25',
    SHOW_ACTIVE: 'SHOW_TRONDHEIM'
  }

  export function addPerson(text: any) {
    return { type: ADD_PERSON, text }
  }
  
  export function togglePerson(index: any) {
    return { type: TOGGLE_PERSON, index }
  }
  
  export function setVisibilityFilter(filter: any) {
    return { type: SET_VISIBILITY_FILTER, filter }
  }