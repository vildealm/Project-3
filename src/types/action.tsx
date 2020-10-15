//define each action as a variable and the type. comment

import { Person } from "./Person";

export const ADD_PERSONS = "ADD_PERSONS"
export const SET_PERSONS = "SET_PERSONS"
export const GET_PERSON_AGE = "GET_PERSON_AGE"

export interface AddPersonsAction {
    type: typeof ADD_PERSONS
    person: Person; 
}

export interface SetPersonsAction {
    type: typeof SET_PERSONS
    person: Person; 
}

export interface GetPersonAge{
    type: typeof GET_PERSON_AGE
    person: Person
}



export type ExpenseActionTypes = AddPersonsAction| SetPersonsAction; 
export type AppActions = ExpenseActionTypes; 