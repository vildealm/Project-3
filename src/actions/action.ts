

export const ADD_PERSON = 'ADD_PERSON'
export const SET_PERSON = 'SET_PERSON'



  export function addPerson(text: any) {
    return { type: ADD_PERSON, text }
  }
  
  